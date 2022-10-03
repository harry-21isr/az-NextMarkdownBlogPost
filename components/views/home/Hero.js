import Image from "next/image";
import React from "react";
import imgHarry from '/public/images/site/harry.JPG'
import styles from './hero.module.css'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.image}>
        <Image src={imgHarry} width={326} height={231} alt="harry image"/>
      </div>
			<h1>Hi, Im Harry</h1>
			<p>I blo g about web development - especially frontend frameworks like react and next.js</p>
		</section>
	);
};

export default Hero;
