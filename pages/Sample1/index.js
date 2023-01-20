import Header from 'components/header'
import styles from 'pages/Sample1/SampleWebsite.module.css'
import Head from 'pages/Sample1/compo/head'
import Main from 'pages/Sample1/compo/main'
import Foot from 'pages/Sample1/compo/foot'

const Home = () => {
	return (
		<>
			<Header title="Website"/>

				<Head />
				<Main />
				<Foot />
		
		</>

	)
}

export default Home
