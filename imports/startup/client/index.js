import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../ui/app'

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
console.log("==> client/index.js");
console.log("==> client/index.js graphql url: ", Meteor.absoluteUrl('graphql'));

import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink({
        uri: Meteor.absoluteUrl('graphql')
    }),
    cache: new InMemoryCache()
});

Meteor.startup(() => {
    ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        document.getElementById('root')
    );
});

