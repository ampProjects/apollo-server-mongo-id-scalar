"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _default = new _graphql.GraphQLScalarType({
  name: 'MONGOID',
  description: 'Mongo Id Scalar Type',
  serialize: function serialize(value) {
    return value.toString();
  },
  parseValue: function parseValue(value) {
    return value.toString();
  },
  parseLiteral: function parseLiteral(ast) {
    switch (ast.kind) {}
  }
});

exports.default = _default;
//# sourceMappingURL=index.js.map