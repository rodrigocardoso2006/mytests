var logical = false;

console.log("run mytests", logical);

var mytest = {

  set: function(value) {
    this.logical = value;

  },
  get: function() {
    return logical;
  }

}

module.exports = mytest;