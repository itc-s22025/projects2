import style from 'pages/Sample6/Sample6.module.css'
import Header from 'components/header'

const Drinks = ({name1, name2, name3}) =>{
	return(
		<ul className={style.ul}>
			<li className={style.li}>{name1}</li>
			<li className={style.li}>{name2}</li>
			<li className={style.li}>{name3}</li>
		</ul>
	)
}

export default Drinks



