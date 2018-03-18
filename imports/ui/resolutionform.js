console.log("==> ui/resolutionform.js");

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class ResolutionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        console.log("handleChange: ", event.target.value);
        this.setState({
            input: event.target.value
        });
    }

    submit() {
        console.log("submit: ", this.state.input);
        this.props.createResolution({
            variables: {
                name: this.state.input
            }
        }).then(({ data }) => {
            console.log("data:", data);
            this.props.refetch();
        }).catch(error => {
            console.error("submit error:", error);
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.submit}>Submit</button>
            </div>
        );
    }
};

const createResolutionGql = gql`
    mutation createResolution($name: String!) {
        createResolution(name: $name) {
            _id
        }
    }
`;

export default graphql(createResolutionGql, { name: 'createResolution' })(ResolutionForm);