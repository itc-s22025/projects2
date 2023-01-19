import style from 'pages/Sample6/Sample6.module.css'
import Header from 'components/header'

const Home = () =>{
	return(
		<>
		<Header title="Cafe" />
		<div className={style.body}>
			<div className={style.box}>
				<div className={style.boxhead}>
					<h1 className={style.h1}>Cafe Prep</h1>
				</div>
			</div>

			<nav className={style.boxbody}>
				<h2 className={style.h2}>Drink</h2>
				<ul className={style.ul}>
					<li className={style.li}>Coffee</li>
					<li className={style.li}>Latte</li>
					<li className={style.li}>Espresso</li>
				</ul>
			</nav>
			<p className={style.bgp}>p</p>
		</div>
		</>
	)
}
export default Home
