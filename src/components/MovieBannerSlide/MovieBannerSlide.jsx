import './MovieBannerSlide.scss'
import classNames from 'classnames'
import { Image } from 'minista'
import Button from "@/components/Button";

const MovieBannerSlide = (props) => {
    const {
        className,
        title,
        TitleTag = 'h2',
        titleId,
        description,
        imgSrc,
        isSmallPaddingY = false,
    } = props

    return (
        <div
            className='movie-ban-slide'
        >
            <Image
              className='movie-ban-slide__image'
              src={imgSrc}
            />
          <div className={classNames("movie-ban-slide__inner", {
              "movie-ban-slide__inner--small-padding-y": isSmallPaddingY,
          })} >
            <div className="movie-ban-slide__body">
              <TitleTag
                  className="movie-ban-slide__title h3"
                  id={titleId}
              >
                  {title}
              </TitleTag>
              <div className="movie-ban-slide__description hidden-mobile">
                <p>{description}</p>
              </div>
            </div>
            <footer className="movie-ban-slide__footer">
              <Button
                className='movie-ban-slide__play-button'
                iconName='play'
                href='/film'
                label='Play Now'
                hasFillIcon
              />
              <div className="movie-ban-slide__actions">
                <Button
                    iconName='plus'
                    label='Add to playlist'
                    isLabelHidden={true}
                    mode='black-06'
                />
                <Button
                    iconName='like'
                    label='Like'
                    isLabelHidden={true}
                    mode='black-06'
                />
                <Button
                    iconName='volume'
                    label='Mute'
                    isLabelHidden={true}
                    mode='black-06'
                />
              </div>
            </footer>
          </div>
        </div>
    )
}

export default MovieBannerSlide