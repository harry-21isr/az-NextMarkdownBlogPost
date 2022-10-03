import React from 'react'
import PostItem from './PostItem'
import styles from './PostGrid.module.css';

const PostsGrid = (props) => {
  return (
    <ul key={'1'} className={styles.grid}>
      {
        props.posts.map((post, index) => <PostItem key={index} post={post} />)
      }
    </ul>
  )
}

export default PostsGrid