import React, { PureComponent } from 'react';
import TotalPrice from './TotalPrice'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {selectTopping1} from '../actions/topping'
import {selectTopping2} from '../actions/topping'
import {selectTopping3} from '../actions/topping'

class ToppingsForm extends PureComponent{
    state = {}

    
    handleChange1 = event => {
        this.props.selectTopping1(event.target.value)
        // this.setState({ redirect: true })
    }
    handleChange2 = event => {
        this.props.selectTopping2(event.target.value)
    }
    handleChange3 = event => {
        this.props.selectTopping3(event.target.value)
    }
    render(){
        const toppings = ["pineapple","corn", "olives", "red onion", "spinach", "cherry tomatoes"]

        const toppingProps = [this.props.topping1, this.props.topping2, this.props.topping3]
        
        
        return(
        <div>
            <p>select toppings</p>
            
            <select value={this.state.topping1} onChange= {this.handleChange1}>
                <option>Choose </option>
                {toppings.map(topping => <option key= {topping} value = {topping}>{topping}</option>)}
            </select>
            <select value={this.state.topping2} onChange= {this.handleChange2}>
                <option>Choose </option>
                {toppings.map(topping => <option key= {topping} value = {topping}>{topping}</option>)}
            </select>
            <select value={this.state.topping3} onChange= {this.handleChange3}>
                <option>Choose </option>
                {toppings.map(topping => <option key= {topping} value = {topping}>{topping}</option>)}
            </select>

            <div>
                   Your base: {this.props.base}
            </div>
            <div>
                   Your sauce: {this.props.sauce}
            </div>
            <div>
                <ul>
                   <p>Your toppings:</p>
                       <li>{this.props.topping1}</li>
                       <li>{this.props.topping2}</li>
                       <li>{this.props.topping3}</li>
                </ul>
            </div>
            <div>
            <Link to= {'/base'}>Change base</Link>
            </div>
            <div>
            <Link to= {'/sauce'}>Change sauce</Link>
            </div>
            
            <div>
            <TotalPrice />
            </div>
        </div>
    )
    }
}
const mapStateToProps = function (state) {
    return {
        sauce: state.sauceReducer.sauce,
        base: state.baseReducer.base,
        baseprice: state.baseReducer.price,
        sauceprice: state.sauceReducer.price,
        toppingprice1: state.toppingReducer.price1,
        toppingprice2: state.toppingReducer.price2,
        toppingprice3: state.toppingReducer.price3,
        topping1: state.toppingReducer.topping1,
        topping2: state.toppingReducer.topping2,
        topping3: state.toppingReducer.topping3,

    }
}
export default connect (mapStateToProps, {selectTopping1, selectTopping2, selectTopping3})(ToppingsForm)