import style from 'pages/Sample4/Sample4.module.css'
import Menu from 'pages/Sample4/compo/menu'

const Vege = () =>{
	return(
		<li className={style.li}>
			<h2 className={style.vegetable}>Vegetable</h2>
				<Menu name1="Tomato" name2="Lettuce" name3="Other" />
		</li>
	)
}

export default Vege
