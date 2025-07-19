import './EpisodeCard.scss'
import Icon from "@/components/Icon";

const EpisodeCard = (props) => {
    const {
        number,
        name,
        description,
        duration,
        video,
    } = props

    return (
        <div
            className='episode-card'
        >
            <div className="episode-card__number">
                {number}
            </div>
            <div className="episode-card__video" data-js-video="">
                <video
                    className='episode-card__video-player'
                    src={video.src}
                    poster={video.previewSrc}
                    width='172'
                    height='118'
                    data-js-video-video=""
                />
                <button
                    className='episode-card__video-button is-active'
                    aria-label='Play Video'
                    title='Play Video'
                    type='button'
                    data-js-video-play-button=""
                >
                    <Icon
                        className='episode-card__video-button-icon'
                        name='play-video-button'
                    />
                </button>
            </div>
            <div className="episode-card__body">
                <div className="episode-card__info">
                    <h4 className="episode-card__title h6">{name}</h4>
                    <div className='episode-card__duration'>
                        <Icon
                            name='clock-notfilled'
                            areaLabel='Duration'
                        />
                        <span>{duration}</span>
                    </div>
                </div>
                <div className="episode-card__description hidden-mobile">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard