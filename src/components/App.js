import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/Logo.svg'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import stars from '../assets/star.svg'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-MediaTech' className='mt-logo' />
				<h1 className='mt-title'>MédiaTech</h1>
				<img src={stars} alt='étoile' className='left-star' />
			</Banner>
			<div className='mt-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer />
		</div>
	)
}

export default App

