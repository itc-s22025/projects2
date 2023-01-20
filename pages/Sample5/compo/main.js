import style from 'pages/Sample5/Sample5.module.css'
import Circle from 'pages/Sample5/compo/circle'

const Main = () =>{
	return(
		<>
		<ul>
			<Circle title="Home" />
			<Circle title="About" />
			<Circle title="Topics" />
			<Circle title="Link" />
		</ul>
		</>

	)
}

export default Main
