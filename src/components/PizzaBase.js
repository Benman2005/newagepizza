import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import PizzaBaseForm from './PizzaBaseForm';
import {selectBase} from '../actions/base'

class PizzaBase extends PureComponent{

   handleSelectBase = () => {
        this.props.selectBase()
        console.log(this.props)
   }
    render(){      
        return(
            <div>
                Welcome to NewAgePizza!
                Please choose a size..
                {/* <button onClick = {this.handleSelectBase}>25 cm</button> */}

                <PizzaBaseForm />
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        base: state.base
    }
}
export default connect (mapStateToProps, {selectBase})(PizzaBase)