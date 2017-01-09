/**
* @Author: Miloš Kolčák
* @Date:   2017-01-06T18:02:53+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-09T16:49:05+01:00
*/
import React from 'react'
import style from './Poststyle.scss'

class PostBlock extends React.Component {
  constructor(props) {
    super(props)
    const { title, text, date, icon } = props
    const DATE = new Date(date)

    this.state = {
      title : title,
      text  : text,
      icon  : icon,
      size  : 1,
      date  : {
        year  : DATE.getFullYear(),
        month : DATE.getMonth() + 1,
        day   : DATE.getDate()
      },
      scroll  : {
        direction : 1
      }
    }
  }
  animateScroll() {
    const {scrollBox} = this.refs
    if (scrollBox.scrollHeight - scrollBox.scrollTop === scrollBox.clientHeight) {
      this.setState({scroll:{direction: -1}});
    } else if(scrollBox.scrollTop === 0) {
      this.setState({scroll:{direction: 1}});
    }
    scrollBox.scrollTop += this.state.scroll.direction;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.animateScroll(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {title, text, date, icon} = this.state

    return <div className={style.block}>
      <div className={style.date}>{date.day + "." + date.month + "." +  date.year }</div>
      <h3 className={style.headline}>{title}</h3>
      <div className={style.textBlock} ref="scrollBox">
      <div className={style.text} dangerouslySetInnerHTML={{
        __html: text
      }}></div>
      </div>
      <div className={style.icon + ' streamline post-' + icon}></div>
    </div>
  }
}

export default PostBlock
