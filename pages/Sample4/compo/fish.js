import style from 'pages/Sample4/Sample4.module.css'
import Menu from 'pages/Sample4/compo/menu'

const Fish = () => {
	return(
		<li className={style.li}>
			<h2 className={style.fish}>Fish</h2>
				<Menu name1="Tuna" name2="Shrimp" name3="Other" />
		</li>

	)
}

export default Fish
