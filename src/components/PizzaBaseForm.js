import React, {PureComponent} from 'react'
import {selectBase} from '../actions/base'
// import {bases} from '../reducers/baseReducer'
import { connect } from 'react-redux'
import TotalPrice from './TotalPrice'
import {Redirect} from 'react-router-dom'




class PizzaBaseForm extends PureComponent{
    state = {baseReducer: {},
    redirect: false}
    
    setRedirect = () => {
    this.setState({
        redirect: true
    })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/sauce' />
        }
      }

    addToTotal = () => {
        
    }
    handleChange = event => {
        this.props.selectBase(event.target.value)
        console.log(event.target.value)
        this.setState({ redirect: true })
      }
    componentDidMount(){

    }
    render(){
        const small = ["small"]
        const medium = ["medium"]
        const large = ["large"]
        return(
            <div>
                {this.renderRedirect()}
                <p>SELECT A BASE</p>
                <select value={this.state.base} onChange= {this.handleChange}>
                <option>Choose </option>
                    <option value={"small"} >Small 25cm €8.99</option>
                    <option value={"medium"}>Medium 30cm €10.49</option>
                    <option value={"large"}>Large 35cm €13.49</option>
                </select>
                
                <div>
                   {this.props.base && <p>Your base: {this.props.base}</p>}
                </div>
                <div>
                   {this.props.sauce && <p>Your sauce: {this.props.sauce}</p>}
                </div>
                <div>
                {this.props.topping1 || this.props.topping2 ||this.props.topping3 ? <ul>
                <p>Your toppings:</p>
                       <li>{this.props.topping1}</li>
                       <li>{this.props.topping2}</li>
                       <li>{this.props.topping3}</li>
                </ul>: <p></p> } 
                </div>
                
                <TotalPrice />
               
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
export default connect(mapStateToProps, {selectBase})(PizzaBaseForm)