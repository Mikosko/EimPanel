/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:12:58+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-06T16:16:54+01:00
*/

import React from 'react'
import Weather from '../Weather'
import Calendar from '../Calendar'

const Timer = 40

class InfoBlockSmall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress  : 0,
      showBlock : 0
    }
  }

  changeComponent() {
      let { showBlock } = this.state
      this.setState({
        progress  : 0,
        showBlock: showBlock !== 1 ? showBlock += 1 : showBlock = 0
      })
      clearInterval(this.interval);
      switch(showBlock) {
        case 0:
            this.interval = setInterval(() => this.changeComponent(), 1000 * Timer);
          break;
        case 1:
            this.interval = setInterval(() => this.changeComponent(), 1000 * Timer/2);
          break;
      }
  }
  animateProgress() {
    this.setState({
      progress  : this.state.progress += (100 / Timer)/100
    });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.changeComponent(), 1000 * Timer);
    this.progressSlide = setInterval(() => this.animateProgress(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.progressSlide);
  }

  render() {
    const { showBlock, progress } = this.state
    return <span>
      {(() => {switch (showBlock){
        case 0:
          return <div className="infoWrapper">
            <Calendar />
              <div className="infoPreloader">
                <div className="infoPreloader__bar" style={{width: progress + "%"}}></div>
              </div>
          </div>
          break;
        case 1:
          return <div className="infoWrapper">
            <Weather />
              <div className="infoPreloader">
                <div className="infoPreloader__bar" style={{width: progress + "%"}}></div>
              </div>
          </div>
          break;
      }})()}
    </span>
  }
}

export default InfoBlockSmall
