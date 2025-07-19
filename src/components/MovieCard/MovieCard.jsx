import './MovieCard.scss'
import Badge from "@/components/Badge";
import { Image } from 'minista'
import RatingView from "@/components/RatingView";

const MovieCard = (props) => {
    const {
        title,
        imgSrc,
        duration,
        season,
        views,
        released,
        rating,
        href='/movie'
    } = props

    return (
        <div
            className='movie-card'
            href={href}
            title={title}
        >
            <h3 className="visually-hidden">{title}</h3>
            <Image className='movie-card__image' src={imgSrc} alt={title} />
            <div className="movie-card__body">
              {duration && (
                  <Badge
                      iconName='clock'
                      iconAreaLabel='Duration'
                      hasFillIcon
                  >
                    {duration}
                  </Badge>
              )}

              {rating && (
                  <Badge
                      className='movie-card__rating-bage'
                  >
                    <RatingView {...rating}/>
                  </Badge>
              )}

              {season && (
                  <Badge
                    iconName='season'
                    iconAreaLabel='Season'
                    hasFillIcon
                  >
                    {season}
                  </Badge>
              )}

              {views && (
                  <Badge
                    iconName='view'
                    iconAreaLabel='Views'
                    hasFillIcon
                  >
                    {views}
                  </Badge>
              )}

              {released && (
                    <Badge
                        className='movie-card__released-bage'
                    >
                        Released at <time className='movie-card__released-bage-label' dateTime={released.dateTime}>{released.label}</time>
                    </Badge>
              )}
            </div>
        </div>
    )
}

export default MovieCard