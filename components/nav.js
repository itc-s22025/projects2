import Link from 'next/link'

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/Sample1">
						SampleWebsite
					</Link>
				</li>

				<li>
					<Link href="/Sample2">
						SampleGrid
					</Link>
				</li>

				<li>
					<Link href="/Sample3">
						SampleBox
					</Link>
				</li>
		
				<li>
					<Link href="/Sample4/about">
						Sample4
					</Link>
				</li>
			
				<li>
					<Link href="/Sample5/about">
						SamplePop
					</Link>
				</li>

			</ul>
		</nav>

	)
}


export default Nav
