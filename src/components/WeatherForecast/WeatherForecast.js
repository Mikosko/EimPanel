/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T15:32:41+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-06T18:02:05+01:00
*/

import React from 'react'
import style from './style.scss'
import Block from './WeatherForecastBlock'

import ComponentWrapper from '../ComponentWrapper'

const WeatherForecastData0 = {
  symbol  : "°C",
  data    : [
  {
    value: 5,
    icon : "snow",
    label: "Ně"
  },
  {
    value: 15,
    icon : "snow",
    label: "Po"
  },
  {
    value: 22,
    icon : "sun-cloud",
    label: "Út"
  },
  {
    value: 22,
    icon : "clouds",
    label: "St"
  },
  {
    value: 11,
    icon : "clouds",
    label: "Čt"
  },
  {
    value: 7,
    icon : "sun-cloud",
    label: "Pá"
  },
  {
    value: 8,
    icon : "sun",
    label: "So"
  }]
};
const WeatherForecastData1 = {
  symbol  : "°C",
  data    : [
  {
    value: 10,
    icon : "sun-cloud",
    label: "Ně"
  },
  {
    value: 18,
    icon : "sun",
    label: "Po"
  },
  {
    value: 22,
    icon : "sun",
    label: "Út"
  },
  {
    value: 24,
    icon : "sun-cloud",
    label: "St"
  },
  {
    value: 18,
    icon : "clouds",
    label: "Čt"
  },
  {
    value: 15,
    icon : "sun-cloud",
    label: "Pá"
  },
  {
    value: 10,
    icon : "snow",
    label: "So"
  }]
};
var read = 0;
class WeatherForecast extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      symbol : "",
      data  : []
    }
  }

  getDataFromAPI() {
    var WeatherForecastData = {};
    if(read === 0) {
      WeatherForecastData = WeatherForecastData0
      read = 1;
    } else {
      WeatherForecastData = WeatherForecastData1
      read = 0;
    }

    this.setState({
      symbol  : WeatherForecastData.symbol,
      data    : function(){
        let data = [];
        for(let item of WeatherForecastData.data) {
          let obj = {
            width : 100/WeatherForecastData.data.length,
            value : item.value,
            icon  : item.icon,
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
    this.interval = setInterval(() => this.getDataFromAPI(), 10000);
  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }

  render() {
    const { data, symbol } = this.state;
    return <ComponentWrapper size={2} color="primary" className="block-offset">
      <h3 className={style.title}>Spotřeba tepla v domě</h3>
      {data.map((block, i) => {
        return <Block key={i} width={block.width} value={block.value} icon={block.icon} symbol={" " + symbol} label={block.label}/>
      })}
      </ComponentWrapper>
  }
}

export default WeatherForecast
