import Head from "next/head";
import React from "react";
import PostContent from "../../components/post/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-utils";

const SinglePostPage = (props) => {
	return (
		<>
			<Head>
				<title>{props.post.title}</title>
				<meta name='description' content={props.post.excerpt}/>
			</Head>
			<PostContent post={props.post} />
		</>
	);
};

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	console.log(context);

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postFilenames = getPostsFiles();

	const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}

export default SinglePostPage;
