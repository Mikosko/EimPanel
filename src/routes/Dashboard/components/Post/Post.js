/**
* @Author: Miloš Kolčák
* @Date:   2017-01-06T17:09:02+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-10T15:27:11+01:00
*/

import React from 'react'
import style from './Poststyle.scss'
import PostBlock from './PostBlock'

class Post extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          size  : 2,
          date  : "2017-01-08",
          title : "Nulla turpis magna, cursus sit amet, suscipit",
          text  : "<h1>Maecenas lorem.</h1> Ut enim ad minim veniam, <strong>quis nostrud exercitation</strong> ullamco laboris nisi ut aliquip ex ea commodo consequat.<img src=\"http:\/\/placekitten.com\/g\/300\/300\"><br/> Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, <img src=\"http:\/\/placekitten.com\/g\/300\/300\"><br/> Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. <img src=\"http:\/\/placekitten.com\/g\/300\/300\"><br/> Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. consectetuer eu lobortis ut, dictum at dui. ",
          icon  : 'warning'
        },
        {
          size  : 1,
          date  : "2017-01-08",
          title : "Nulla turpis magna, cursus sit amet, suscipit",
          text  : "<h1>Maecenas lorem.</h1> Ut enim ad minim veniam, <strong>quis nostrud exercitation</strong> ullamco laboris nisi ut aliquip ex ea commodo consequat.<img src=\"http:\/\/placekitten.com\/g\/300\/300\"><br/> Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, <img src=\"http:\/\/placekitten.com\/g\/300\/300\"><br/> Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. <img src=\"http:\/\/placekitten.com\/g\/300\/300\"><br/> Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Fusce suscipit libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. consectetuer eu lobortis ut, dictum at dui. ",
          icon  : 'warning'
        }
      ]
    }
  }

  render() {
    const {data} = this.state

    return <div>
      {data.map((post, i) => {
        return <PostBlock key={i} size={post.size} post-type={post.type} title={post.title} date={post.date} text={post.text} icon={post.icon}/>
      })}
    </div>
  }
}

export default Post
