# apollo-server-mongo-id-scalar

Mongo ID Custom Scalar for GraphQL and Apollo Server

If we use Mongo with GraphQL and Apollo Server, the mongo response includes _id of the collection as a value.

If we use default ID Scalar, we get an error, because GraphQL does not understand the value, we need to change the value to String.

This small package do that for us. It comes with a Custom Scalar for parsing value to string directly as Scalar and we can re-use in our GraphQL Schemas.

## Install

```javascript
npm install --save apollo-server-mongo-id-scalar
```

## Usage

Create a file where you have located your Schemas files with the following code:

```javascript
export default `
  scalar MONGOID
`;
```

In Resolvers folder, save a file with this content:

```javascript
import mongoId from 'apollo-server-mongo-id-scalar';

export default {
  MONGOID: mongoId
}
```

Now we can use the new Custom Scalar in our Schemas.

```javascript
export default `
  type User {
    _id: MONGOID
    name: String
  }
`;
```