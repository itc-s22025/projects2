import H2 from 'pages/Sample1/compo/h2'
import styles from 'pages/Sample1/SampleWebsite.module.css'

const Main = () => {
	return(
		<main>  
                       <div className={styles.main}>
			<H2/>
                        <H2 num=" 2"/>
                       </div>
		</main>

	)
}

export default Main
