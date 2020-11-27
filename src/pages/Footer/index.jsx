import React from 'react'

import Facebook from '../../assets/images/facebook.svg'
import Instagram from '../../assets/images/instagram.svg'
import Whatsapp from '../../assets/images/whatsapp.svg'
import Youtube from '../../assets/images/youtube.svg'

import './styles.css'

function Footer() {
	return (
		<div id="footer-social-media">
			<main>
				<h1>Conecte-se conosco!</h1>
				<section>
					<img src={Facebook} width="50" height="50" alt=""/>
					<img src={Instagram} width="50" height="50" alt=""/>
					<img src={Whatsapp} width="50" height="50" alt=""/>
					<img src={Youtube} width="50" height="50" alt=""/>
				</section>
			</main>
		</div>
	)
}

export default Footer