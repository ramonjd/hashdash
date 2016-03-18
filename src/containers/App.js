import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions  from '../actions/'
import Polo from '../components/Polo'


function mapStateToProps(state) {
    const { polo } = state
    return {
        polo : polo
    }
}

function mapDispatchToProps(dispatch) {
    return { actions : bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {

    static propTypes = {

    };

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {actions} = this.props
    }

    render() {
        const {polo, actions} = this.props
        return (
            <div>
              <Polo polo={polo} actions={actions} />
            </div>
        )
    }
}
