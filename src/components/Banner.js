import '../styles/Banner.css'
import stars from '../assets/star.svg'

function Banner({ children }) {
	return <div className='mt-banner'>{children}
	<p className="slogan">Tous nos produits ont été reconditionnés avec le plus grand soin</p>
	<img src={stars} alt='étoile' className='right-star' />
	</div>
}

export default Banner
