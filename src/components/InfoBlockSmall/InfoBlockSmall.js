/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:12:58+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-10T13:39:26+01:00
*/

import React from 'react'
import Weather from '../Weather'
import Calendar from '../Calendar'

const Timer = 40

class InfoBlockSmall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBlock : 0
    }
  }

  changeComponent() {
      let { showBlock } = this.state
      this.setState({
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

  componentDidMount() {
    this.interval = setInterval(() => this.changeComponent(), 1000 * Timer);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { showBlock, progress } = this.state
    return <div className="block-wrapper">
      {(() => {switch (showBlock){
        case 0:
          return <Calendar />
          break;
        case 1:
          return <Weather />
          break;
      }})()}
    </div>
  }
}

export default InfoBlockSmall
