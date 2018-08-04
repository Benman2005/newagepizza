import React, { PureComponent } from 'react';
import TotalPrice from './TotalPrice'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {selectSauce} from '../actions/sauce'



class SauceForm extends PureComponent {
    state = {}
   
    state = {
        redirect: false
      }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
        }
        renderRedirect = () => {
            if (this.state.redirect) {
              return <Redirect to='/toppings' />
            }
          }
    
    
    handleChange = event => {
        this.props.selectSauce(event.target.value)
        console.log(event.target.value)
        console.log(this.props.baseprice + this.props.sauceprice)
        this.setState({ redirect: true })
      }
    render(){
        console.log(this.props.baseprice)
        if(!this.props.base) {
                return <Redirect to='/base'/>;
              }
        const red = ["red"]
        const white = ["white"]
        const mix = ["mix"]
        return(
            
        <div>
                    {this.renderRedirect()}

            <p>select a sauce</p>
            <select value={this.state.sauce} onChange= {this.handleChange}>
                <option>Choose </option>
                    <option value={red} >Red Sauce</option>
                    <option value={white}>White Sauce</option>
                    <option value={mix}>Mix it up</option>
                </select>
                <div>
                   Your base is: {this.props.base}
                </div>

                <div>
                <Link to= {'/base'}>Change base size</Link>
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
        base: state.baseReducer.base,
        baseprice: state.baseReducer.price,
        sauceprice: state.sauceReducer.price
    }
}

export default connect (mapStateToProps, {selectSauce})(SauceForm)