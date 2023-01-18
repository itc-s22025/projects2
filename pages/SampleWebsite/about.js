import styles from 'pages/SampleWebsite/SampleWebsite.module.css'

const About = () => {
	return (
		<>
			<header>
				<div className={styles.header}>
					<h1 className={styles.h1}>Sample Website</h1>
				</div>
			</header>

			<main>
				<div className={styles.main}>
					<h2 className={styles.h2}>Heading</h2>
						<p className={styles.h2p}>Content comes here. Content comes here. Content comes here.<br />
						Content comes here. Content comes here. Content comes here.</p>
					<h2 className={styles.h2}>Heading 2 </h2>
						<p className={styles.h2p}>Content comes here. Content comes here. Content comes here.<br />
						Content comes here. Content comes here. Content comes here.</p>

				</div>
			</main>

			<footer>
				<div className={styles.footer}>
				<p className={styles.fp}>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
				</div>	
		</footer>
		</>

	)
}

export default About
