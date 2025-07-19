import MovieBannerSlide from "@/components/MovieBannerSlide";

const ShowBanner = () => {
    const titleId = "show-banner-title";

    return (
        <section
            className='container'
            aria-labelledby={titleId}
        >
            <MovieBannerSlide
                title='Stranger Things'
                titleId={titleId}
                TitleTag='h1'
                description='When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.'
                imgSrc='src/assets/images/showBans/1.jpg'
                isSmallPaddingY={true}
            />
        </section>
    )
}

export default ShowBanner