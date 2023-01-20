import styles from 'pages/Sample1/SampleWebsite.module.css'

const H2 = ({num}) => {
	return (
		<>
			<h2 className={styles.h2}>Heading{num}</h2>
				<p className={styles.h2p}>Content comes here. Content comes here. Content comes here.<br />
                                Content comes here. Content comes here. Content comes here.</p>
		</>
	)
}

export default H2
