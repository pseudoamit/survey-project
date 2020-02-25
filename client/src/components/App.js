import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from '../Router';
import Header from './Header';
import * as actions from '../store/actions';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();

    }

    render() {
        return (
            <div className="container">
                <Header />
                <Router />
            </div>
        );
    }
}

export default connect(null, actions)(App);