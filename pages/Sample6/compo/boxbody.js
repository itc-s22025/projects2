import style from 'pages/Sample6/Sample6.module.css'
import Drinks from 'pages/Sample6/compo/drinks'

const Bb = () => {
	return(
		<>
		<nav className={style.boxbody}>
			<h2 className={style.h2}>Drink</h2>
			<Drinks name1="Coffee" name2="Latte" name3="Espresso" />
		</nav>
		</>
	)
}

export default Bb
