import style from 'pages/Sample3/Sample3.module.css'
import Footer from 'components/footer'

const Home = () =>{
	return (<>	
			<main>
				<div className={style.body}>
					<div className={style.box}>
						<h1 className={style.h1}>COMING SOON</h1>
						<p className={style.p}>NEW WEBSITE IS AVAIRABLE <br />
						ON 20XX.01.01</p>
					</div>
				</div>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default Home
