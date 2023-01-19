import Link from 'next/link'
import style from 'pages/Sample5/Sample5.module.css'

const Menu = () =>{
	return(
		<>
			<ul>
				<li className={style.li}>
					<Link href="/Sample5">
						<h2 className={style.h2}>Home</h2>
					</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample5">
						<h2 className={style.h2}>About</h2>
					</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample5">
						<h2 className={style.h2}>Topics</h2>
					</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample5">
						<h2 className={style.h2}>Link</h2>
					</Link>
				</li>

			</ul>
		</>
	)

}

export default Menu
