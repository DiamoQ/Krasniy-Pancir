
import './MoviesBanner.scss'
import classNames from 'classnames'
import MovieBannerSlide from "@/components/MovieBannerSlide";
import movieBanners from './movieBanners'
import Slider from "@/components/Slider";

const MoviesBanner = (props) => {
  const {
    className,
  } = props

  const titleId='movies-banner-title'

  
  return (
    <section
      className='movies-ban container'
      aria-labelledby={titleId}
    >
      <h1 className="visually-hidden" id={titleId}>Movies & Shows</h1>
      <Slider
          sliderParams={{
            slidesPerView: 1,
            breakpoints: {
                1024: {
                    allowTouchMove: false,
                },
            }
          }}
          navigationPosition='abs-bottom'
          hasScrollbarOnMobile={false}
      >
        {movieBanners.map((slide, index) => (
          <MovieBannerSlide key={index} {...slide}/>
        ))}
      </Slider>
    </section>
  )
}

export default MoviesBanner