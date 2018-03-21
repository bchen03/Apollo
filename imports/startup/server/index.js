console.log("==> server/index.js");

import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsType from '../../api/resolutions/resolutions.graphql';
import SubscriptionsType from '../../api/subscriptions/subscriptions.graphql';

import { ResolutionsResolver, ResolutionsMutation } from '../../api/resolutions/resolvers';
import { SubscriptionsResolver } from '../../api/subscriptions/resolvers';


const rootType = `
    type Query {
        hi: String
        resolutions: [Resolution]
        vendors: [DataVendor]
        sources: [DataSource]
        subscriptions: [Subscription]
        subscription(id: String!): Subscription
    }

    type Mutation {
        createResolution(name: String!): Resolution
    }
`;
 
const typedefs = [
    rootType,
    ResolutionsType,
    SubscriptionsType
];

const TestResolver = {
    hi() {
        return "Hello World!!!";
    }
};

const resolvers = {
    Query: {
        ...TestResolver,
        ...ResolutionsResolver,
        ...SubscriptionsResolver
    },
    Mutation: {
        ...ResolutionsMutation    
    }
};
  
console.log("==> server/index.js resolvers", resolvers);

const schema = makeExecutableSchema({
    typeDefs: typedefs,
    resolvers
});

createApolloServer({
    schema
});




