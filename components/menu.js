import Link from 'next/link'
import style from 'styles/menu.module.css'

const Menu = () =>{
	return(
		<>
			<ul>
				<li className={style.li}>
					<Link href="/">
						<h2 className={style.h2}>HOME</h2>
					</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample1/about">
						<h2 className={style.h2}>Website</h2>
					</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample2/about">
						<h2 className={style.h2}>Grid</h2>
					</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample3/about">
						<h2 className={style.h2}>Box</h2>
					</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample4/about">
						<h2 className={style.h2}>Mart</h2>
					</Link>
				</li>
				<li className={style.li}>
					<Link href="/Sample5/about">
						<h2 className={style.h2}>Pop</h2>
					</Link>
				</li>





			</ul>
		</>
	)

}

export default Menu
