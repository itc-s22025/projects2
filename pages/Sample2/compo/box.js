import style from 'pages/Sample2/Sample2.module.css'

const Box = ({num}) =>{
	return(
		<div className={style.box}>
			<h2 className={style.h2}>Box {num}</h2>
				<p>hello world hello world hello world hello world hello world hello world hello world hello world</p>
		</div>
	)	
}

export default Box 
