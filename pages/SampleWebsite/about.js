import styles from 'pages/SampleWebsite/SampleWebsite.module.css'

const About = () => {
	return (
		<>
			<header>
				<div className={styles.header}>
				<h1>Sample Website</h1>
				</div>
			</header>

			<main>
				<h2>Heading</h2>
				<h2>Heading 2 </h2>
			</main>

			<footer>
				<p>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
			</footer>
		</>

	)
}

export default About
