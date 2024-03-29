import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class Payments extends Component {
    render() {
        console.log(this.props);
        return (
            <StripeCheckout
                name="Survey"
                description="$5 for 5 email credit"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credit
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);