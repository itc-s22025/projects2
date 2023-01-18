import style from 'pages/Sample3/Sample3.module.css'
import Footer from 'components/footer'

const Home = () =>{
	return (<>	
			<main>
				<div className={style.body}>
						<p className={style.trp}>a</p>
						<div className={style.tr2}></div>
					<div className={style.box}>
						<h1 className={style.h1}>COMING SOON</h1>
						<p className={style.p}>NEW WEBSITE IS AVAIRABLE <br />
						ON 20XX.01.01</p>
							<div className={style.tr}>
								<p className={style.trp}>a</p>
							</div>
					</div>
					<p className={style.bg}>a</p>
				</div>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default Home
