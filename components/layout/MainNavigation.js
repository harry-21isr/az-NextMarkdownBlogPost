import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import styles from "./mainNavigation.module.css";

const MainNavigation = () => {
	return (
		<>
			<header className={styles.header}>
				<Link href="/"> 
        <a>
					<Logo />
        </a>
				</Link>
				<nav>
					<ul>
						<li>
							<Link href="/posts">Post</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default MainNavigation;

/* Link will no render <a> if no text i added. if we want to load a custom html elemt we have to wrap it inside <a> */