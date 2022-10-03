import Head from "next/head";
import React from "react";
import ContactForm from "../components/views/contact/ContactForm";

const Contact = () => {
	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta name="Contact description" content="Send me your messages" />
			</Head>
			<ContactForm />
		</>
	);
};

export default Contact;
