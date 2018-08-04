import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'


class TotalPrice extends PureComponent {
    componentDidMount(){
        // const totalPrice = this.props.baseprice + this.props.sauceprice

    }
    render(){
        if(!this.props.base) {
            return <Redirect to='/base'/>;
          }
        let totalPrice = this.props.baseprice + this.props.sauceprice
        if(!this.props.baseprice) totalPrice = 0
        if(!this.props.sauceprice) totalPrice = this.props.baseprice
        return (
            <div>
                <p>  Your total price is </p>
                {totalPrice}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        base: state.baseReducer.base,
        baseprice: state.baseReducer.price,
        sauceprice: state.sauceReducer.price
    }
}

export default connect (mapStateToProps)(TotalPrice)