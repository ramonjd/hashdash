import React, { Component, PropTypes } from 'react'

export default class Polo extends Component {

   // https://poloniex.com/public?command=returnTicker

    static propTypes = {

    };
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {actions} = this.props
        actions.subscribe()
    }

    createNode(currencyPairObject) {
        console.log(Object.keys(currencyPairObject))
        return (<p>{currencyPairObject.last}</p>)
    }

    render() {
      const {polo} = this.props
      const lastUpdated = polo.lastUpdated ? polo.lastUpdated.toLocaleDateString() : ''
        return (
            <div className="Polo">
              <h2>Polo <time dateTime="{lastUpdated}">{lastUpdated}</time></h2>
              {polo.data.BTC_ETH ? this.createNode(polo.data.BTC_ETH) : null}
            </div>
        )
    }
}
