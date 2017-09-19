function Slice(list) {
  var from = 0,
      to   = 0,
      sliceArray = [];

  return {
    next(n) {
      from = to;
      to = to + n;

      if(to >= list.length) {
        to = to % list.length;
        sliceArray = list.slice(from).concat(list.slice(0, to));
        return this;
      }

      sliceArray = list.slice(from, to);
      return this;
    },
    back(n) {
      to = from;
      from = from - n;

      if(from < 0) {
        from = from + list.length;
        sliceArray = list.slice(from).concat(list.slice(0, to));
        return this;
      }

      sliceArray = list.slice(from, to);
      return this;
    },
    getSlice() {
      return sliceArray;
    }
  }
}

export default Slice;