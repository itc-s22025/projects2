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
			</ul>
		</nav>
	)
}


export default Nav
