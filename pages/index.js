import Hero from "../components/views/home/Hero";
import React from "react";
import styles from "../styles/Home.module.css";
import FeaturePosts from "../components/views/home/FeaturePosts";
import { getFeaturedPosts } from "../lib/posts-utils";
import Head from "next/head";

/* const DUMMY_POST = [
	{title: 'Getting started with nextjs', image: 'getting-started-nextjs.png', excerpt: 'Next is a react framework fro production its makes building apps easier with ssg ssr', date: '2022-02-10', slug: 'getting-started-nextjs'},
	{title: 'Getting started with nextjs', image: 'getting-started-nextjs.png', excerpt: 'Next is a react framework fro production its makes building apps easier with ssg ssr', date: '2022-02-10', slug: 'getting-started-nextjs2'},
	{title: 'Getting started with nextjs', image: 'getting-started-nextjs.png', excerpt: 'Next is a react framework fro production its makes building apps easier with ssg ssr', date: '2022-02-10', slug: 'getting-started-nextjs3'},
	{title: 'Getting started with nextjs', image: 'getting-started-nextjs.png', excerpt: 'Next is a react framework fro production its makes building apps easier with ssg ssr', date: '2022-02-10', slug: 'getting-started-nextjs4'}];
 */

function Home(props) {
	return (
		<>
			<Head>
				<title>Harry`s Blog</title>
				<meta name="Blog description" content="Dummy blog about programming and web dev.." />
			</Head>
			<Hero />
			<FeaturePosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default Home;
