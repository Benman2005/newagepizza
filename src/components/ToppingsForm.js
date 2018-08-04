import React, { PureComponent } from 'react';
import TotalPrice from './TotalPrice'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {selectSauce} from '../actions/sauce'

class ToppingsForm extends PureComponent{
    render(){
        return(
        <div>
            <div>
                   Your base is: {this.props.base}
            </div>
            <div>
                   Your sauce is: {this.props.sauce}
            </div>
            <div>
            <Link to= {'/base'}>Change base size</Link>
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
        sauceprice: state.sauceReducer.price
    }
}
export default connect (mapStateToProps)(ToppingsForm)