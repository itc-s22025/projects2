import style from 'pages/Sample3/sample.module.css'
import Link from 'next/link'
import Header from 'components/header'

const Home = () =>{
	return(
		<>
			<Header title="Navigation" />
			<ul className={style.nav}>
				<li className={style.li}>
					<Link href="/Sample3" className={style.a}>TOP</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample3" className={style.a}>ABOUT</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample3" className={style.a}>NEWS</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample3" className={style.a}>LINK</Link>
				</li>


			</ul>
		</>
	)
}

export default Home
