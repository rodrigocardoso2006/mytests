var nodecache = require("node-cache");
var localcache = new nodecache();

var local = false;

var mytest = {
  logical: false,
  set: function(value) {
    this.logical = value;
    local = value;
    localcache.set("local", local);
    console.log('in set', this.logical, local);
  },
  get: function() {
    v = localcache.get("local");
    console.log('in get', this.logical, local, v);
    if (v) {
      return v;
    } else {
      return this.logical;
    }
  }

}

module.exports = mytest;