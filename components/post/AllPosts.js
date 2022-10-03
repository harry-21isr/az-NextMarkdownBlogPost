import React from 'react'
import styles from './AllPosts.module.css';
import PostsGrid from './PostsGrid';

const AllPosts = (props) => {

  console.log(props)

  return (
    <section className={styles.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={props.posts}/>
    </section>
  )
}

export default AllPosts