
import '../styles/Item.css'

function handleClick(itemName) {
	alert(`Vous voulez acheter 1 ${itemName}? Très bon choix ✨`)
}

function Item({ cover, name, price }) {
	return (
		<li className='mt-item' onClick={() => handleClick}>
			<span className='mt-item-price'>{price}€</span>
			<img className='mt-item-cover' src={cover} alt={`${name} cover`} />
			<p className='name'>{name}</p>
		</li>
	)
}

export default Item
