import Nav from 'components/nav'
import Menu from 'components/menu'

const Hero = ({title}) =>{
	return (
		<div>
			<h1>{title}</h1>
			<Menu />
		</div>
	)
}

export default Hero
