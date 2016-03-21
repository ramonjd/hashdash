import React, { Component, PropTypes } from 'react'
import PoloIntent from '../intents/polo'
import Rx from 'rx'

export default class Polo extends Component {

   // https://poloniex.com/public?command=returnTicker

    static propTypes = {

    };
    constructor(props) {
        super(props)
        this.intervalStream = null
    }

    componentWillMount() {
    }

    componentWillUnmount() {
      this.intervalStream.dispose()
    }

    componentDidMount() {
      PoloIntent.getPoloData()
      this.intervalStream = Rx.Observable.interval(2500)
      this.intervalStream.subscribe(() => PoloIntent.getPoloData())
    }

    createNode(currencyPairObject) {
        return (<p>{currencyPairObject.last}</p>)
    }

    render() {
      const {poloData, lastUpdated} = this.props
        return (
            <div className="Polo">
              <h2>Polo <time dateTime="{lastUpdated}">{lastUpdated ? lastUpdated.toLocaleDateString() : ''}</time></h2>
              {poloData && poloData.BTC_ETH ? this.createNode(poloData.BTC_ETH) : null}
            </div>
        )
    }
}
