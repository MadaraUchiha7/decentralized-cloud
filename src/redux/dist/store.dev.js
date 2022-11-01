"use strict";

var _redux = require("redux");

var initialState = {
  name: "Kazi",
  age: "21"
};

var reducer = function reducer(initialState) {
  return initialState;
};

var store = (0, _redux.createStore)();