import style from 'pages/Sample4/Sample4.module.css'

const Menu = ({name1, name2, name3}) =>{
	return(
		<>
			<ul className={style.menu}>
				<li className={style.menuli}>{name1}</li>
				<li className={style.menuli}>{name2}</li>
				<li className={style.menuli}>{name3}</li>
			</ul>
		</>
	)
}

export default Menu


