import { useState } from 'react'
import { itemList } from '../datas/itemList'
import Item from './Item'
import Categories from './Categories'
import '../styles/ShoppingList.css'


function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = itemList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const currentItemAdded = cart.find((item) => item.name === name)
		if (currentItemAdded) {
			const cartFilteredCurrentItem = cart.filter(
				(item) => item.name !== name
			)
			updateCart([
				...cartFilteredCurrentItem,
				{ name, price, amount: currentItemAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='mt-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<p className='mt-infos'>Nos produits :</p>
			<ul className='mt-list'>
				{itemList.map(({ id, cover, name, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<Item
								cover={cover}
								name={name}
								price={price}
							/>
							<button className='addItem' onClick={() => addToCart(name, price)}>Ajouter au panier</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList

