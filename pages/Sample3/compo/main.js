import style from 'pages/Sample3/sample.module.css'
import Li from 'pages/Sample3/compo/li'

const Main = () =>{
	return(
		<main>
		<ul className={style.nav}>
			<Li title="TOP" />
			<Li title="ABOUT" />
			<Li title="NEWS" />
			<Li title="LINK" />
		</ul>
		</main>

	)
}

export default Main
