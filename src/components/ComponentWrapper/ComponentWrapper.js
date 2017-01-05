/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:31:16+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-04T17:53:37+01:00
*/

import React from 'react'
class ComponentWrapper extends React.Component {
  static propTypes = {
    size: React.PropTypes.number.isRequired
  }

  render() {
    const { size, color, className, children } = this.props

    return <div className={"block block-" + size + " block-" + color + " " + className}>{children}</div>
  }
}

export default ComponentWrapper
