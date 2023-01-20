import style from 'pages/Sample2/Sample2.module.css'
import Box from 'pages/Sample2/compo/box'
import B1 from 'pages/Sample2/compo/B1'
import Column from 'pages/Sample2/compo/column'

const Main = () =>{
	return(
                <main>
                        <div className={style.contents}>
                                <h1 className={style.h1}>Layout</h1>
                                        <Column />
                                        <Box num="3" />
                                        <Box num="4" />
                        </div>
                </main>

	)
}

export default Main
