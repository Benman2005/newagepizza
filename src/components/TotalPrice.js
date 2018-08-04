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

        let totalPrice = 0
        let price1 = this.props.toppingprice1
        let price2 = this.props.toppingprice2
        let price3 = this.props.toppingprice3
        if (price1 === undefined) {price1=0}
        if (price2 === undefined) {price2=0}
        if (price3 === undefined) {price3=0}
    
        const reducer = function (a, b) {return a + b}
        const totalTops = [price1, price2,price3].reduce(reducer, 0)
        console.log(totalTops)

        if (!this.props.baseprice) {totalPrice = 0}
        if (!this.props.sauceprice) {totalPrice = this.props.baseprice}
        if (this.props.sauceprice) {totalPrice = this.props.baseprice + this.props.sauceprice + totalTops}
        if (this.props.drone === true){totalPrice = totalPrice*1.1}
        return (
            <div>
                <p>  Your total price:</p>
                €{totalPrice.toFixed(2)}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        base: state.baseReducer.base,
        baseprice: state.baseReducer.price,
        sauceprice: state.sauceReducer.price,
        toppingprice1: state.toppingReducer.price1,
        toppingprice2: state.toppingReducer.price2,
        toppingprice3: state.toppingReducer.price3,
        drone: state.drone

    }
}

export default connect (mapStateToProps)(TotalPrice)