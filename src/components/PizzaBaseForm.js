import React, {PureComponent} from 'react'
import {selectBase} from '../actions/base'
// import {bases} from '../reducers/baseReducer'
import { connect } from 'react-redux'
import TotalPrice from './TotalPrice'
import {Redirect} from 'react-router-dom'




class PizzaBaseForm extends PureComponent{
    state = {baseReducer: {}}
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
          return <Redirect to='/sauce' />
        }
      }

    addToTotal = () => {
        
    }
    handleChange = event => {
        this.props.selectBase(event.target.value)
        console.log(event.target.value)
        this.setState({ redirect: true })
        // this.calculateTotal()
        // this.addToTotal(this.props.baseprice)
        // console.log(this.props.baseprice + this.props.sauceprice)

      }
    componentDidMount(){

    }
    render(){
        // if (this.props.base) {
        //     return <Redirect to='/sauce'/>;
        //   }
        const small = ["small"]
        const medium = ["medium"]
        const large = ["large"]
        return(
            <div>
                
		{this.renderRedirect()}
                <select value={this.state.base} onChange= {this.handleChange}>
                <option>Choose </option>
                    <option value={small} >Small 25cm</option>
                    <option value={medium}>Medium 30cm</option>
                    <option value={large}>Large 35cm</option>
                </select>
                <TotalPrice />
               
            </div>
        )
    }

}
const mapStateToProps = function (state) {
    return {

        base: state.baseReducer.base,
        baseprice: state.baseReducer.price

    }
}
export default connect(mapStateToProps, {selectBase})(PizzaBaseForm)