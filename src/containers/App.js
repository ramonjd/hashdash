import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions  from '../actions/'
import Ethereum from './components/Ethereum'


function mapStateToProps(state) {
    const { search, jobs, player } = state

    return {
        jobs : jobs.jobs
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

        return (
            <div>
              <Ethereum />
            </div>
        )
    }
}
