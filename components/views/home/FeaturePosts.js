import React from 'react'
import styles from './feature-posts.module.css'
import PostsGrid from '../../post/PostsGrid'

const FeaturePosts = (props) => {
  return (
   <section className={styles.latest}>
    <h2>Feature post </h2>
    <PostsGrid posts={props.posts}/>
   </section>
  )
}

export default FeaturePosts 