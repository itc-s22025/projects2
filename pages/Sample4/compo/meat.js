import style from 'pages/Sample4/Sample4.module.css'
import Menu from 'pages/Sample4/compo/menu'

const Meat = () =>{
	return(
		<li className={style.li}>
                                    <h2 className={style.meat}>Meat</h2>
                                        <Menu name1="Beef" name2="Chicken" name3="Other" />
                </li>
	)
}

export default Meat
