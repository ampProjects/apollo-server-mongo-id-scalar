import { GraphQLScalarType } from 'graphql';

export default new GraphQLScalarType({
  name: 'MONGOID',
  description: 'Mongo Id Scalar Type',
  serialize(value) {
    return value.toString();
  },
  parseValue(value) {
    return value.toString();
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      // Implement your own behavior here by returning what suits your needs
      // depending on ast.kind
    }
  }
})
