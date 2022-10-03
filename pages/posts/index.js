import Head from "next/head";
import React from "react";
import AllPosts from "../../components/post/AllPosts";
import { getAllPosts } from "../../lib/posts-utils";

/* const DUMMY_POST = [
	{title: 'Getting started with nextjs', image: 'getting-started-nextjs.png', excerpt: 'Next is a react framework fro production its makes building apps easier with ssg ssr', date: '2022-02-10', slug: 'getting-started-nextjs'},
	{title: 'Getting started with nextjs', image: 'getting-started-nextjs.png', excerpt: 'Next is a react framework fro production its makes building apps easier with ssg ssr', date: '2022-02-10', slug: 'getting-started-nextjs2'},
	{title: 'Getting started with nextjs', image: 'getting-started-nextjs.png', excerpt: 'Next is a react framework fro production its makes building apps easier with ssg ssr', date: '2022-02-10', slug: 'getting-started-nextjs3'},
	{title: 'Getting started with nextjs', image: 'getting-started-nextjs.png', excerpt: 'Next is a react framework fro production its makes building apps easier with ssg ssr', date: '2022-02-10', slug: 'getting-started-nextjs4'}];

 */
const AllPostPage = (props) => {
	return (
		<>
			<Head>
				<title>All post</title>
				<meta name='Post description' content='List of all programming-related tutorials and posts.'/>
			</Head>
			<AllPosts posts={props.posts} />
		</>
	);
};

export function getStaticProps() {
	const allPost = getAllPosts();

	return {
		props: {
			posts: allPost,
		},
	};
}

export default AllPostPage;
