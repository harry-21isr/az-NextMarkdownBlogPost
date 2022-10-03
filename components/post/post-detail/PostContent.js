import React from 'react'
import PostHeader from './PostHeader';
import styles from './PostContent.module.css'
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
/* const DUMMY_POST = {content: '# this is a first post', title: 'Getting started with nextjs', image: 'getting-started-nextjs.png', excerpt: 'Next is a react framework fro production its makes building apps easier with ssg ssr', date: '2022-02-10', slug: 'getting-started-nextjs'};
 */
PrismLight.registerLanguage('js', js);
PrismLight.registerLanguage('css', css);

const PostContent = (props) => {

  const {post} = props; 
  const imagePath = `/images/posts/${post.slug}/${post.image}`;



  const customRenderers = { //overrida default component from react markdown
    img(image) {
      return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
    },

    code(code) {  /* custom ¶endering for code bloc */
      const { className,children  } = code;
      /* const language = className.split('-')[1];  */// className is something like language-js => We need the "js" part here
      return (
        <PrismLight
          style={atomDark}
          language={'javascript'}
        >
          {children}
        </PrismLight>
      );
    },
  }; 

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
     
    </article>
  )
}

export default PostContent 