import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import styles from './PostItem.module.css'

const PostItem = (props) => {


  const {title, image, excerpt, date, slug} = props.post;

  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`

  return (
   <li key={slug} className={styles.post}>
    <Link href={linkPath}>
      <a>
        <div className={styles.image}>
          <Image src={imagePath} alt="image" height={200} width={300} layout="responsive"/>
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </a>
    </Link>
   </li>
  )
}

export default PostItem