import style from 'pages/Sample3/sample.module.css'
import Link from 'next/link'
import Header from 'components/header'
import Main from 'pages/Sample3/compo/main'

const Home = () =>{
	return(
		<>
			<Header title="Navigation" />
			<Main />
		</>
	)
}

export default Home
