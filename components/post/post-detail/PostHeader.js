import Image from 'next/image';
import React from 'react';
import styles from './PostHeader.module.css';

const PostHeader = (props) => {

  const {title, image} = props;
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} width={200} height={150} alt={title}/>
    </header >
  )
}

export default PostHeader