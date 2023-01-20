import style from 'pages/Sample4/Sample4.module.css'
import Meat from 'pages/Sample4/compo/meat'
import Fish from 'pages/Sample4/compo/fish'
import Vege from 'pages/Sample4/compo/vegetable'

const Main = () =>{
	return(
		<div className={style.box}>
                    <h1 className={style.h1}>Prep Mart</h1>
                        <ul className={style.col_3}>
                                <Meat />
                                <Fish />
                                <Vege />
                        </ul>
                </div>
	)
}

export default Main
