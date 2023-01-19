import style from 'pages/Sample4/Sample4.module.css'
import Header from 'components/header'

const Home = () =>{
	return (
		<>
		<Header title="Mart" />
		<div className={style.box}>
		    <h1 className={style.h1}>Prep Mart</h1>
			    <ul className={style.col_3}>
			        <li className={style.li}>
		        	    <h2 className={style.meat}>Meat</h2>
			        	    <ul className={style.menu}>
		        		        <li className={style.menuli}>Beef</li>
        		        		<li className={style.menuli}>Chicken</li>
				                <li className={style.menuli}>Other</li>
		        		    </ul>
			        </li>
			        <li className={style.li}>
			            <h2 className={style.fish}>Fish</h2>
				            <ul className={style.menu}>
			        	        <li className={style.menuli}>Tuna</li>
			                	<li className={style.menuli}>Shrimp</li>
				                <li className={style.menuli}>Other</li>
				            </ul>
			        </li>
				<li className={style.li}>
			            <h2 className={style.vegetable}>Vegetable</h2>
				            <ul className={style.menu}>
				                <li className={style.menuli}>Tomato</li>
				                <li className={style.menuli}>Lettuce</li>
			        	        <li className={style.menuli}>Other</li>
				            </ul>
			        </li>
        		    </ul>
		</div>

		</>

	)
}

export default Home
