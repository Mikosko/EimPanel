/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T16:50:39+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-10T13:45:54+01:00
*/

import React from 'react'
import style from './style.scss'

import Bar from './HeatMonitorBar'

import ComponentWrapper from '../ComponentWrapper'

const HeatMonitorData = {
  symbol  : "Gj",
  data    : [
  {
    value: 200,
    label: "Ně"
  },
  {
    value: 75,
    label: "Po"
  },
  {
    value: 100,
    label: "Út"
  },
  {
    value: 38,
    label: "St"
  },
  {
    value: 28,
    label: "Čt"
  },
  {
    value: 99,
    label: "Pá"
  },
  {
    value: 4,
    label: "So"
  }]
};

class HeatMonitor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol : "",
      data  : []
    }
  }
  getDataFromAPI() {
    var highestValue = 0;
    for (let item of HeatMonitorData.data) {
      highestValue = item.value > highestValue ? item.value : highestValue
    }

    this.setState({
      symbol  : HeatMonitorData.symbol,
      data    : function(){
        let data = [];
        for(let item of HeatMonitorData.data) {
          let obj = {
            width : 100/HeatMonitorData.data.length,
            value : item.value,
            height: (item.value / highestValue) * 100,
            label : item.label
          }
          data.push(obj);
        }

        return data;
      }()
    })
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  render() {
    const { data, symbol } = this.state;
    return <ComponentWrapper size={2} color="green" className="block-offset">
      <h3 className={style.title}>Spotřeba tepla v domě</h3>
        {data.map((bar, i) => {
          return <Bar key={i} width={bar.width} value={bar.value} symbol={" " + symbol} height={bar.height} label={bar.label}/>
        })}
    </ComponentWrapper>
  }
}

export default HeatMonitor
