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
						<Link href="/Sample1/about">
							SampleWebsite
						</Link>
					</li>

					<li className={style.li}>
						<Link href="/Sample2/about">
							SampleGrid
						</Link>
					</li>

					<li className={style.li}>
						<Link href="/Sample3/about">
							SampleBox
						</Link>
					</li>
		
					<li className={style.li}>
						<Link href="/Sample4/about">
							Sample4
						</Link>
					</li>
			
					<li className={style.li}>
						<Link href="/Sample5/about">
							Sample5
						</Link>
					</li>

				</ul>
			</nav>
		</footer>
	)
}

export default Footer
