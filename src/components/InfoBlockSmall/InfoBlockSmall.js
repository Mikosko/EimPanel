/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:12:58+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-12T15:48:01+01:00
*/

import React from 'react'
import Weather from '../Weather'
import Day from '../Day'
import NameDay from '../NameDay'

const Timer = 5

class InfoBlockSmall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBlock     : 0,
      showComponent : 0
    }
  }

  flipBlock() {
      let { showBlock, showComponent } = this.state
      if(showBlock !== 1) {
        this.setState({
          showBlock: showBlock += 1
        });
      } else {
        this.setState({
          showComponent: showComponent !== 1 ? showComponent += 1 : showComponent = 0,
          showBlock: showBlock = 0
        });
      }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.flipBlock(), 1000 * Timer);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { showBlock, showComponent } = this.state
    return <div className={"flip-container flip-container-1"+ (showBlock ? ' flip-content' : '')}>
      <div className="flipper">
          <div className="front">
            {(()=>{if(showComponent){return <NameDay />}else{return <Day />}})()}
          </div>
          <div className="back">
            <Weather />
          </div>
      </div>
    </div>

  }
}

export default InfoBlockSmall
