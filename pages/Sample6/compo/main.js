import style from 'pages/Sample6/Sample6.module.css'
import Bh from 'pages/Sample6/compo/boxhead'
import Bb from 'pages/Sample6/compo/boxbody'

const Main = () =>{
	return(
		<div className={style.body}>
			<Bh />
                        <Bb />
			<p className={style.bgp}>p</p>
                </div>
	)
}

export default Main
