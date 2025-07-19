import './Categories.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import categoryItems from "@/sections/Categories/categoryitems";

const Categories = () => {
    const sliderNavigationId = 'categories-slider-navigation'

    return (
        <Section
            title='Explore our wide variety of categories'
            titleId='categories-title'
            description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            actions={(
                <SliderNavigation
                    mode='tile'
                    id={sliderNavigationId}
                />
            )}
            isActionsHiddenInMobile={true}
        >
            <Slider
                navigationTargetElementId={sliderNavigationId}
                isBeyondTheViewportOnMobileS
            >
                {
                    categoryItems.map(({title, images}, index) => (
                        <CategoryCard
                            title={title}
                            images={images}
                            key={index}
                        />
                    ))
                }
            </Slider>
        </Section>
    )
}

export default Categories