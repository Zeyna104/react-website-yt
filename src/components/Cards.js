import CardItem from './CardItem'
import { cardItem } from './data'
import './Cards.css'

function Cards() {
	return (
		<div className="cards">
			<h1>Check out these EPIC Destinations!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						{cardItem.map((card) => (
							<CardItem
								text={card.text}
								src={card.src}
								label={card.label}
								path={card.path}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards
