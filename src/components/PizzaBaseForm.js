import React, {PureComponent} from 'react'
import {selectBase} from '../actions/base'
import {bases} from '../reducers/baseReducer'
import { connect } from 'react-redux'

class PizzaBaseForm extends PureComponent{
    state = {}
    // setPrice = function() {
    //     this.setState({price: 12.99})
    // }
    // componentDidMount(){
    //    this.setPrice()
    // }   
    handleChange = event => {
        this.props.selectBase(event.target.value)
        console.log(event.target.value)
        // this.setPrice()
      }
    render(){
        
        const small = ["small"]
        const medium = ["medium"]
        const large = ["large"]
        return(
            
                <select value={this.state.base} onChange= {this.handleChange}>
                <option>Choose </option>
                    <option value={small}>Small 25cm</option>
                    <option value={medium}>Medium 30cm</option>
                    <option value={large}>Large 35cm</option>
                </select>

       
    )
    }

}
const mapStateToProps = function (state) {
    return {

        base: state.baseReducer.base,
        price: state.baseReducer.price

    }
}
export default connect(mapStateToProps, {selectBase})(PizzaBaseForm)