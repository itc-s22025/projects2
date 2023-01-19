import style from 'styles/header.module.css'

const Header = ({ title }) => {
	return (
		<div>
		<h1 className={style.h1}>{title}</h1>
		</div>
	)
}

export default Header
