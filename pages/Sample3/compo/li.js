import style from 'pages/Sample3/sample.module.css'
import Link from 'next/link'

const Li = ({title}) =>{
	return(
	<li className={style.li}>
		<Link href="/Sample3" className={style.a}>{title}</Link>
	</li>
	)
}

export default Li
