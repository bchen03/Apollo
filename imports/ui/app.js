console.log("==> ui/app.js");

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './resolutionform';

const App = ({ data }) => {
    if (data.loading === true) 
        return <div>Loading...</div>;
        
    return (
        <div>
            <h1>{ data.hi }</h1>
            <ul>
            { 
                data.resolutions.map(item => {
                    return <li key={ item.id }>{ item.name }</li>;
                })
            }
            </ul>

            <ResolutionForm refetch={data.refetch} />

        </div>
    );
};

const hiGql = gql`
    {
        hi
        resolutions
        {
            id: _id
            name
        }    
    }
`;

export default graphql(hiGql)(App);
