import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import panier from '../assets/cart.svg'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, Type) => acc + Type.amount * Type.price,
		0
	)
	useEffect(() => {
		document.title = `MT: ${total}€ d'achats`
	}, [total])

	return isOpen ? (
		<div className='mt-cart'>
			<button
				className='mt-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<img src={panier} alt='panier' className='mt-panier' />
					<h2>Panier</h2>
					<ul className='cartUdpdated'>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button 
						className='mt-cart-toggle-button' 
						onClick={() => updateCart([])}>Vider le panier
					</button>
				</div>
			) : (
				<div className='emptyCart'>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='mt-cart-closed'>
			<button
				className='mt-cart-toggle-button-open'
				onClick={() => setIsOpen(true)}>Ouvrir le Panier
			</button>
		</div>
	)
}
	
export default Cart
