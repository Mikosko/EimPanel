/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T18:32:01+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-05T13:26:26+01:00
*/

import React from 'react'
import style from './style.scss'

import ComponentWrapper from '../ComponentWrapper'
import HintsData from './HintsData.json'

let HintLevel = 0
class Hints extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title : "",
      text  : ""
    }
  }
  getDataFromAPI() {
    HintLevel !== HintsData.length-1 ? HintLevel += 1 : HintLevel = 0
    this.setState({
      title : HintsData[HintLevel][0],
      text  : HintsData[HintLevel][1]
    });
  }

  componentDidMount() {
    this.getDataFromAPI();
    this.interval = setInterval(() => this.getDataFromAPI(), 15000);
  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }

  render() {
    const { title, text } = this.state
    return <ComponentWrapper size={2} color="primary" className="block-offset">
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
    </ComponentWrapper>
  }
}

export default Hints
