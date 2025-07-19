import './Ratings.scss'
import RatingView from "@/components/RatingView";

const Ratings = (props) => {
    const {
        items
    } = props

    return (
        <div
            className='ratings'
        >
            <ul className="ratings__list">
              {items.map(({name, rating},  index) => (
                  <li className='ratings__item' key={index}>
                    <h4 className='ratings__title'>{name}</h4>
                    <RatingView value={rating} label={rating}/>
                  </li>
              ))}
            </ul>
        </div>
    )
}

export default Ratings