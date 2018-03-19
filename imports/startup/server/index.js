console.log("==> server/index.js");

import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';
import SubscriptionsSchema from '../../api/subscriptions/subscriptions.graphql';

import ResolutionsResolver, { newResolution } from '../../api/resolutions/resolvers';
import SubscriptionsResolver from '../../api/subscriptions/resolvers';


const testSchema = `
    type Query {
        hi: String
        resolutions: [Resolution]
        vendors: [DataVendor]
        sources: [DataSource]
        subscriptions: [Subscription]
        subscription(id: String!): Subscription
    }
`;
 
const typedefs = [
    testSchema,
    ResolutionsSchema,
    SubscriptionsSchema
];

const HiResolver = {
    hi() {
        return "Hello World!!!";
    }
};

const resolvers = {
    Query: {
        ...HiResolver,
        ...ResolutionsResolver,
        ...SubscriptionsResolver
    },
    Mutation: {
        createResolution(obj, args, context) {
            console.log('==> server/index.js Mutation.createResolution, obj: ', obj, ', args: ', args, ', context: ', context);
            const name = args.name;
            return newResolution(name);
        }
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




