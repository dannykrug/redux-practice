import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single  extends Component{
  render() {
    //index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
    //get us the post
    const post = this.props.posts[i]
    const postComments = this.props.comments[this.props.params.postId] || []
    return(
      <div className='single-photo'>
      <Photo i={i} post={post} {...this.props}/>
      <Comments postComments ={postComments} {...this.props}/>
      </div>

    )
  }
}

export default Single