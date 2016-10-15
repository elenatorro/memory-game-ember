export var Utils = {
  array: [],

  setArray(array) {
    this.array = array.toArray();
    return this;
  },

  getArray() {
    return this.array;
  },

  getNElement(n) {
    var i, array, resultArray;

    i = 0;
    array = this.array;
    resultArray = [];

    for (i; i < n; i++) {
      resultArray.push(array[i]);
    }

    this.array = resultArray;
    return this;
  },

  shuffleArray() {
      var array, i, j, arrayLength, currentElement;
      array = this.array;

      arrayLength = array.length;

      for (i = arrayLength; i; i--) {
          j = Math.floor(Math.random() * i);
          currentElement = array[i - 1];
          array[i - 1] = array[j];
          array[j] = currentElement;
      }

      this.array = array;
      return this;
    }
};
