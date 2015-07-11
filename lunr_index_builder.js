var lunr = require('lunr');
var fs = require('fs');

var idx = lunr(function () {
  this.ref('id');

  this.field('year');
  this.field('month');
  this.field('tags');

  this.pipeline.remove(lunr.stopWordFilter);
  this.pipeline.remove(lunr.stemmer);
});

var indexData = function(dataPath, indexPath, callback){
  console.log('Indexing started.....');
  fs.readFile(dataPath, function (err, data) {
    if (err) throw err;

    var raw = JSON.parse(data);

    var records = raw.map(function (r) {
      var mappedTags = r.tags.map(function (tag){
          return tag.split(/[\s\-]+/).join('%');
      });
      return {
        id: r.id,
        year: r.date[0],
        month: r.date[1],
        tags: mappedTags.join(' ')
      }
    });

    records.forEach(function (record) {
      idx.add(record);
    });
    var indexAndData = {
      "index" : idx,
      "posts" : raw
    };

    fs.writeFile(indexPath, JSON.stringify(indexAndData), function (err) {
      if (err) throw err;
      console.log('Indexing Completed....');
      callback();
    });
  });
}

module.exports = indexData;
