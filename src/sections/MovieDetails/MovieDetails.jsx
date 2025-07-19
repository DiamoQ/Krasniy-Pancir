import './MovieDetails.scss'
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import PersonCard from "@/components/PersonCard";
import Button from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import Icon from "@/components/Icon";
import Tags from "@/components/Tags";
import Ratings from "@/components/Ratings";
import castItems from "@/sections/MovieDetails/castItems";
import reviewItems from "@/sections/MovieDetails/reviewItems";
import ratingsItems from "@/sections/MovieDetails/ratingsItems";
import Seasons from "@/components/Seasons";

const MovieDetails = (props) => {
    const {
        seasons,
    } = props

    const titleId = 'movie-details__title'
    const castSliderNavigationId = 'movie-details-cast-slider-navigation'

    return (
        <section
            className='movie-details container'
            aria-labelledby={titleId}
        >
          <h2 className="visually-hidden" id={titleId}>Detailed movie information</h2>
          <div className="movie-details__main">
            { seasons && (
                <div className="movie-details__block movie-details__block--seasons movie-details__block--large-gap-y">
                    <h3 className="movie-details__block-title h4">Seasons and Episodes</h3>
                    <Seasons seasons={seasons} />
                </div>
            )}
            <div className="movie-details__block movie-details__block--description movie-details__block--small-gap-y">
                <h3 className="movie-details__block-title">Description</h3>
                <div className="movie-details__block-description">
                  <p>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
                </div>
            </div>
            <div className="movie-details__block">
              <header className="movie-details__block-header">
                <h3 className="movie-details__block-title">Cast</h3>
                <SliderNavigation
                    id={castSliderNavigationId}
                    hasPagination={false}
                    mode='rounded'
                    buttonMode='black-08'
                />
              </header>
              <Slider
                  navigationTargetElementId={castSliderNavigationId}
                  hasScrollbarOnMobile={false}
                  sliderParams={{
                    slidesPerView: "auto",
                    spaceBetween: 10,
                    breakpoints: {
                      1024: {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                        allowTouchMove: false,
                      }
                    }
                  }}
              >
                  {castItems.map((person, i) => (
                      <PersonCard {...person} key={i} />
                  ))}
              </Slider>
            </div>
            <div className="movie-details__block movie-details__block--large-gap-y">
                <header className="movie-details__block-header">
                    <h3 className="movie-details__block-title">Reviews</h3>
                    <Button
                        href='/'
                        mode='black-08'
                        label='Add Your Review'
                        iconName='plus'
                    />
                </header>
                <Slider
                    hasScrollbarOnMobile={false}
                    isNavigationHiddenMobile={false}
                    navigationMode='rounded'
                    sliderParams={{
                        slidesPerView: 1,
                        spaceBetween: 16,
                        breakpoints: {
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                allowTouchMove: false,
                            }
                        }
                    }}
                >
                    {reviewItems.map((review, i) => (
                        <ReviewCard {...review} key={i} />
                    ))}
                </Slider>
            </div>
          </div>
          <aside className="movie-details__info">
            <div className="movie-details__block">
                <div className="movie-details__block-group">
                    <h3 className="movie-details__block-title">
                        <Icon name='calendar' areaLabel=''/>
                        <span>Released Year</span>
                    </h3>
                    <div className="movie-details__block-description">
                        <time className='h6' dateTime='2022'>2022</time>
                    </div>
                </div>
                <div className="movie-details__block-group">
                    <h3 className="movie-details__block-title">
                        <Icon name='language' areaLabel=''/>
                        <span>Available Languages</span>
                    </h3>
                    <Tags langs={['English', 'Hindi', 'Tamil', ' Telegu', 'Kannada']}/>
                </div>
                <div className="movie-details__block-group">
                    <h3 className="movie-details__block-title">
                        <Icon name='ratings' areaLabel=''/>
                        <span>Ratings</span>
                    </h3>
                    <Ratings items={ratingsItems}/>
                </div>
                <div className="movie-details__block-group">
                    <h3 className="movie-details__block-title">
                        <Icon name='genres' areaLabel=''/>
                        <span>Gernes</span>
                    </h3>
                    <Tags langs={['Action', 'Adventure']}/>
                </div>
                <div className="movie-details__block-group">
                    <h3 className="movie-details__block-title">Director</h3>
                    <PersonCard
                        imgSrc='/src/assets/images/cast/director.png'
                        name='Rishab Shetty'
                        subtitle='From India'
                    />
                </div>
                <div className="movie-details__block-group">
                    <h3 className="movie-details__block-title">Music</h3>
                    <PersonCard
                        imgSrc='/src/assets/images/cast/music.png'
                        name='B. Ajaneesh Loknath'
                        subtitle='From India'
                    />
                </div>
            </div>
          </aside>
        </section>
    )
}

export default MovieDetails