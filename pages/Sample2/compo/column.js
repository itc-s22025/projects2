import style from 'pages/Sample2/Sample2.module.css'
import Box from 'pages/Sample2/compo/box'
import B1 from 'pages/Sample2/compo/B1'

const Column = () =>{
	return(
		<div className={style.grid_column}>
			<B1 num="1" />
                        <Box num="2" />
                 </div>

	)
}

export default Column
