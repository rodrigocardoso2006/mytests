var mytest = {
  logical = false,
  set: function(value) {
    this.logical = value;
    console.log('in set', this.logical);
  },
  get: function() {
    console.log('in get', this.logical);
    return this.logical;
  }

}

module.exports = mytest;