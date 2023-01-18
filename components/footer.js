import Link from 'next/link'
import style from 'styles/footer.module.css'

const Footer = () => {
	return (
		<footer className={style.main}>
			<nav>
				<ul className={style.ul}>
					<li className={style.li}>
						<Link href="/">
							HOME
						</Link>
					</li>


					<li className={style.li}>
						<Link href="/Sample1">
							SampleWebsite
						</Link>
					</li>

					<li className={style.li}>
						<Link href="/Sample2">
							SampleGrid
						</Link>
					</li>

					<li className={style.li}>
						<Link href="/Sample3">
							SampleNavigation
						</Link>
					</li>
		
					<li className={style.li}>
						<Link href="/Sample4">
							SampleMart
						</Link>
					</li>
			
					<li className={style.li}>
						<Link href="/Sample5">
							SamplePop
						</Link>
					</li>

				</ul>
			</nav>
		</footer>
	)
}

export default Footer
