import React, {PureComponent} from 'react'
import {selectBase} from '../actions/base'
import {bases} from '../reducers/baseReducer'
import { connect } from 'react-redux'

class PizzaBaseForm extends PureComponent{
    handleSelectBase = () => {
        console.log(this.props.base)
        this.props.selectBase(this.props.base)
   }    

    render(){
        // console.log(bases)

        return(
            <div>
            { bases.map(base => (<button key={base} onClick={ this.handleSelectBase}>
                {base}
                </button>))}
                

        </div>
        )
    }

}
const mapStateToProps = function (state) {

    return {
        base: state.baseReducer

    }
}
export default connect(mapStateToProps, {selectBase})(PizzaBaseForm)