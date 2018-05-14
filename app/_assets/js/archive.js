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

          //register handler for all tag labels.
          $(document).on("click", "a[tags]", {"self": self}, self.tagLabelClicked);
      });
  },

  "tagLabelClicked": function(event){
      var tags = $(this).attr('tags');
      var tagsArray = tags.split(',');
      event.data.self.data.selectize.setValue(tagsArray);
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      //alert(tags);
  },

  "selectOptionChangeHandler" : function(){
    var selectedValues = this.data.selectize.getValue();
    var fragment = this.convertArrayToFragment(selectedValues);
    //Check is required because
    //on page load it may happen that backbone is not yet started and we are trying to use it
    if(Backbone.History.started){
        if(fragment.length > 0) {
            //note that this will not trigger urlchange handler. this is a silent navigation.
            this.data.router.navigate('#search/' + fragment);
        }else{
            //note that this will not trigger urlchange handler. this is a silent navigation.
            this.data.router.navigate();
        }
    }
    var searchResults = this.data.allData.filter(selectedValues);
    if(searchResults.length === 0) {
        this.data.searchResultsCollection.messageId = "zero-results";
    }else{
        this.data.searchResultsCollection.messageId = null;
    }
    this.data.searchResultsCollection.reset(searchResults);
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
              "": "showAll",
              "search": "showAll",
              "search/": "showAll",
              "search/*tags": "filterPosts",
              "*actions": "invalidUrl"
          },
          "showAll": function(){
              self.data.searchResultsCollection.messageId = null;
              self.data.searchResultsCollection.reset(self.data.allData.toJSON());
          },
          "filterPosts": function (searchTerms) {
              var tagsToSelect = self.convertFragmentToArray(searchTerms);

              if(self.areTagsValid(tagsToSelect)) {
                  //passing true so that it will not trigger selectize change handler.
                  self.data.selectize.setValue(tagsToSelect, true);

                  //filter the values.
                  var searchResults = self.data.allData.filter(tagsToSelect);
                  if(searchResults.length === 0) {
                      self.data.searchResultsCollection.messageId = "zero-results";
                  }else{
                      self.data.searchResultsCollection.messageId = null;
                  }
                  self.data.searchResultsCollection.reset(searchResults);
              }else{
                  self.data.searchResultsCollection.messageId = "invalid-tags";
                  self.data.searchResultsCollection.reset();
              }
          },
          "invalidUrl": function(){
              self.data.searchResultsCollection.messageId = "invalid-url";
              self.data.searchResultsCollection.reset();
          }
      });
      // Instantiate the router
      var instance = new AppRouter();
      return instance;
  },

  "areTagsValid": function(tagsToCheck){
      //note that we are comparing this with the tags populated in filter.
      //tags populated in filter are present in variable searchBoxOptions.
      if(typeof tagsToCheck != 'undefined' && searchBoxOptions != 'undefined'){
          for(var i = 0; i < tagsToCheck.length; i++){
              var tagFound = false;
              for(var j = 0; j < searchBoxOptions.length; j++){
                  //console.log('Comparing: ' + searchBoxOptions[j]['value'] + ':' + tagsToCheck[i]);
                  if(searchBoxOptions[j].value == tagsToCheck[i]){
                      tagFound = true;
                      break;
                  }
              }
              if(!tagFound){
                  console.error("Tag not found: ["+tagsToCheck[i]+"]");
                  return false;
              }
          }
          return true;
      }else{
          console.error('Error while matching tags');
          return false;
      }
      return true;
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
            "filter": function(items){
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
      var TotalCountView = Backbone.View.extend({
          template: _.template($('#total-result').html().trim()),
          render: function() {
              var htmlContent = this.template(this.model);
              this.$el.html(htmlContent);
              return this;
          }
      });

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

              var totView = new TotalCountView({"model": {"total": this.collection.length}});
              $list.append(totView.render().$el);

              //Every message may need different html. Thus we defined all messages elements with a convention <result-message>-id.
              //Controller will set correct messageId. Then this view will check if there is any messageId attached. If found it will
              //look up for the element and append its html.
              if(typeof this.collection.messageId != "undefined" && this.collection.messageId !== null && this.collection.messageId.length > 0) {
                  var htmlContent = $('#result-message-' + this.collection.messageId).html().trim();
                  $list.append(htmlContent);
              }

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
