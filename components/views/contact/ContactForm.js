import React, { useEffect, useRef, useState } from "react";
import Notification from "../../ui/Notification";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
	const emailRef = useRef();
	const nameRef = useRef();
	const textRef = useRef();
	const [status, setStatus] = useState();

	useEffect(() => {
		//clearing notification message after 3 seconds
		if (status) {
			const timer = setTimeout(() => {
				setStatus(undefined);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [status]);

	const submitFormHandler = async (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const name = nameRef.current.value;
		const text = textRef.current.value;

		const emailReg = /\S+@\S+\.\S+/;

		if (!emailReg.test(email) || !name || !text) {
			console.log("form no completed");
			return;
		}

		const formData = {
			email,
			name,
			text,
		};
		setStatus({ title: "Loading", message: "fetching", status: "pending" });
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify(formData),
				headers: { "Content-Type": "application/json" },
			});

			if (!response.ok) {
				throw new Error("failed to fetch");
			}
			const data = await response.json();
			setStatus({ title: "Success", message: "Added to database", status: "success" });
			emailRef.current.value = nameRef.current.value = textRef.current.value = "";
		} catch (error) {
			setStatus({ title: "Error", message: `${error.message}`, status: "error" });
			console.log(error.message);
		}
	};

	return (
		<section className={styles.contact}>
			<h1>How can i help you?</h1>
			<form onSubmit={submitFormHandler} className={styles.form}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="email">Your email</label>
						<input ref={emailRef} type="email" id="email" required />
					</div>

					<div className={styles.control}>
						<label htmlFor="name">Your name</label>
						<input ref={nameRef} type="text" id="name" />
					</div>
				</div>

				<div className={styles.control}>
					<label htmlFor="message">your message</label>
					<textarea ref={textRef} id="message" rows={5}></textarea>
				</div>
				<div className={styles.actions}>
					<button>Send message</button>
				</div>
			</form>
			{status && <Notification title={status.title} message={status.message} status={status.status} />}
		</section>
	);
};

export default ContactForm;
