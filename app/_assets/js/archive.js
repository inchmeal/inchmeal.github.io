var archivePage = {

  "data": {
  },

  "init": function(){
      var self = this;
      this.data.selectize = this.createSelectize();
      this.data.router = this.createRouter();

      var allData = this.createAllDataCollection();
      allData.fetch().done(function(){
          //initialize selectize only after allData fetch is completed
          self.data.selectize.on('change', function(){
            self.selectOptionChangeHandler();
          });

          self.data.allData = allData;
          var searchResultsCollection = self.createSearchResultsCollection();
          self.createSearchResultsView(searchResultsCollection);

          self.data.searchResultsCollection = searchResultsCollection;

          //start Backbone history after initializing selectize
          Backbone.history.start();

          //on firt page load, check
          //if no search entered, call selectOptionChangeHandler explicitly
          var fragment = Backbone.history.getFragment();
          fragment = $.trim(fragment);
          if(fragment.length === 0 || fragment == 'search' || fragment == 'search/' || fragment.indexOf('search') !== 0){
              self.selectOptionChangeHandler();
          }
      });
  },

  "selectOptionChangeHandler" : function(){
    var selectedValues = this.data.selectize.getValue();
    var fragment = this.convertArrayToFragment(selectedValues);
    //Check is required because
    //on page load it may happen that backbone is not yet started and we are trying to use it
    if(Backbone.History.started){
      this.data.router.navigate('#search/' + fragment);
    }
    var searchResults = this.data.allData.search(selectedValues);
    this.data.searchResultsCollection.reset(searchResults);
  },

  "populateSelectizeFromUrl" : function(){
      var fragment = Backbone.history.getFragment();
      var selectedValues = this.convertFragmentToArray(fragment);
      this.data.selectize.setValue(selectedValues);
  },

  "convertFragmentToArray" : function(fragment){
      if(
          (fragment !== null && fragment !== undefined) &&
          (typeof fragment === 'string' || fragment instanceof String)
        ){
          return fragment.split('/');
      }else{
        return [];
      }
  },

  "convertArrayToFragment" : function(array){
    if(
        (array !== null && array !== undefined) &&
        (Array.isArray(array))
      ){
        return array.join('/');
    }else{
      return '';
    }
  },

  "createRouter" : function(){
      var self = this;
      var AppRouter = Backbone.Router.extend({
          "routes": {
              "": "tagsSearch",
              "search/*tags": "tagsSearch"
          },
          "tagsSearch": function (actions) {
            //alert("Searched with tags : [" + actions + "]");
            self.populateSelectizeFromUrl();
          }
      });
      // Instantiate the router
      var instance = new AppRouter();
      return instance;
  },

  "createSelectize": function(){
      var self = this;

      var selectizeControl = $(".tags-filter-box").selectize({
        "options": searchBoxOptions,
        "optgroups": [
          {"id": 'Tags'},
          {"id": 'Year'},
          {"id": 'Month'}
        ],
        "maxItems" : 15,
        "labelField": 'value',
        "valueField": 'value',
        "optgroupField": 'group',
        "optgroupLabelField": 'id',
        "optgroupValueField": 'id',
        "optgroupOrder": ['Tags', 'Year', 'Month'],
        "searchField": ['value'],
        "plugins": ['optgroup_columns', 'remove_button']
      });

      return selectizeControl[0].selectize;
  },

  "createAllDataCollection" : function(){
      var self = this;
      //create collection for loading all posts and index
      var DataCollection = Backbone.Collection.extend({
            "url": '/json/all_index.json',
            "parse": function(data) {
                this.index = lunr.Index.load(data.index);
                return data.posts;
            },
            "search": function(items){
                if(items !== null && items !== undefined && (Array.isArray(items)) && items.length > 0){
                    var searchTokens = _(items).map(function(item){
                        return item.split(/[\s\-]+/).join('%');
                    });
                    var searchString = searchTokens.join(' ');
                    var thisCollection = this;
                    var results = _(this.index.search(searchString)).map(function(hit) {
                        //alert(JSON.stringify(thisCollection.get(hit.ref)));
                        return thisCollection.get(hit.ref);
                    });

                    return results;
                }else{
                    //alert('JSSON : ' + JSON.stringify(this));
                    return this.toJSON();
                }
            }
      });
      //allData will contain posts and index for all the posts
      var allData = new DataCollection();
      return allData;
  },

  "createSearchResultsCollection" : function(){
      var SearchResultCollection = Backbone.Collection.extend({
          "comparator" : "id"
      });
      return new SearchResultCollection();
  },

  "createSearchResultsView" : function(searchResults){
      var SearchResultView = Backbone.View.extend({
          template: _.template($('#search-result').html().trim()),
          render: function() {
              var htmlContent = this.template(this.model.toJSON());
              this.$el.html(htmlContent);
              return this;
          }
      });

      var SearchResultsView = Backbone.View.extend({
          el: '#search-results',

          initialize: function() {
            this.listenTo(this.collection, 'reset', this.render);
          },

          render: function() {
            var $list = this.$el.empty();

            this.collection.each(function(model) {
              var item = new SearchResultView({model: model});
              $list.append(item.render().$el);
            }, this);

            return this;
          }
      });
      return new SearchResultsView({"collection": searchResults});
  }
};
