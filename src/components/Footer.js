import { useState } from 'react'
import '../styles/Footer.css'
import samsung from '../assets/Logo-Samsung-min.png'
import apple from '../assets/Logo-Apple-min.png'
import huawei from '../assets/Logo-Huawei-min.png'
import sony from '../assets/Logo-Sony-min.png'
import facebook from '../assets/fb-icon.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter-icon.png'
import logo from '../assets/Logo.svg'
import copyright from '../assets/copyright.png'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
		}
	}

	return (
		<footer className='mt-footer'>
			<img src={logo} alt='logo-MediaTech' className='footer-mt-logo' />
			<p className='nameFooter'>MédiaTech</p>
			<div className='mt-footer-elem'>
				Pour les passionné·e·s de nouvelles technologies
			</div>
			<div className='mt-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
			<button className="submit">Envoyer</button>
			<img src={samsung} alt='logo-Samsung' className='samsung-logo' />
			<img src={apple} alt='logo-Apple' className='apple-logo' />
			<img src={huawei} alt='logo-Huawei' className='huawei-logo' />
			<img src={sony} alt='logo-Sony' className='sony-logo' />

			<div className='adress'>
				<h4>Coordonnées</h4>
				<p>24 avenue du Loremipsum</p>
				<p>75012 Paris</p>
			</div>

			<div className='contact'>
				<h4>Contact</h4>
				<p>06.55.55.55.55</p>
				<p>mediaTech@lorem.fr</p>
			</div>

			<div className='socialmedia'>
			<h4>Réseaux</h4>
				<img src={facebook} alt='logo-Facebook' className='facebook-logo' />
				<img src={insta} alt='logo-Instagram' className='instagram-logo' />
				<img src={twitter} alt='logo-Twitter' className='twitter-logo' />
			</div>

			<p className='copyright-name'>Copyright</p>
			<img src={copyright} alt='copyright' className='copyright' />
			<p className='date'>2022</p>
		</footer>
	)
}

export default Footer

