import './MovieBanner.scss'
import MovieBannerSlide from "@/components/MovieBannerSlide";
import movieBannerItem from "./movieBannerItem";

const MovieBanner = () => {
    const titleId='movie-banner-title'

    return (
        <section
            className='movie-ban container'
            aria-labelledby={titleId}
        >
            <MovieBannerSlide
                titleId={titleId}
                TitleTag='h1'
                isSmallPaddingY
                {...movieBannerItem}
            />
        </section>
    )
}

export default MovieBanner