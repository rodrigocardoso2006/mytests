var local = false;

var mytest = {
  logical: false,
  set: function(value) {
    this.logical = value;
    local = value;
    console.log('in set', this.logical, local);
  },
  get: function() {
    console.log('in get', this.logical, local);
    return this.logical;
  }

}

module.exports = mytest;