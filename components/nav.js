import Link from 'next/link'

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/SampleWebsite/about">
						SampleWebsite
					</Link>
				</li>

				<li>
					<Link href="/Sample2/about">
						Sample2
					</Link>
				</li>

				<li>
					<Link href="/Sample3/about">
						Sample3
					</Link>
				</li>
		
				<li>
					<Link href="/Sample4/about">
						Sample4
					</Link>
				</li>
			
				<li>
					<Link href="/Sample5/about">
						Sample5
					</Link>
				</li>

			</ul>
		</nav>

	)
}


export default Nav