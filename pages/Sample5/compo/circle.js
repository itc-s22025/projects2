import Link from 'next/link'
import style from 'pages/Sample5/Sample5.module.css'

const Circle = ({title}) =>{
	return(
		<>
		<li className={style.li}>
			<Link href="/Sample5">
				<h2 className={style.h2}>{title}</h2>
			</Link>
		</li>
		</>
	)
}

export default Circle
