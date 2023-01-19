import style from 'pages/Sample2/Sample2.module.css'

const Home = () =>{
	return (
		<>
		<main>
			<div className={style.contents}>
				<h1>Layout</h1>
					<div className={style.grid_column}>
						<div className={style.box}>
							<h2 className={style.h2}>Box 1</h2>
							<p>hello world hello world hello world hello world<br />
							<br />hello world hello world hello world hello world</p>
						</div>
						<div className={style.box}>
							<h2 className={style.h2}>Box 2</h2>
							<p>hello world hello world hello world hello world
							hello world hello world hello world hello world</p>
						</div>
					</div>

						<div className={style.box}>
							<h2 className={style.h2}>Box 3</h2>
							<p>hello world hello world hello world hello world 
							hello world hello world hello world hello world</p>
						</div>
						<div className={style.box}>
							<h2 className={style.h2}>Box 4</h2>
							<p>hello world hello world hello world hello world 
							hello world hello world hello world hello world</p>
						</div>
			</div>
		</main>
		</>
	)
}

export default Home
