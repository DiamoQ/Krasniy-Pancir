import './Collections.scss'
import classNames from 'classnames'
import Tabs from "@/components/Tabs";
import collectionsGroups from "./collectionsGroups";
import getIdFromTitle from "@/utils/getIdFromTitle";
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import CategoryCard from "@/components/CategoryCard";
import MovieCard from "@/components/MovieCard";

const Collections = () => {
    return (
        <Tabs
            className='collections container'
            title='collections-title'
            isEnableOnlyOnMobile
            items={collectionsGroups.map((collection) => ({
                        title: collection.title,
                        isActive: collection.isActive,
                        children: (
                            <div className='collections__group'>
                                <p className="collections__title hidden-mobile">{collection.title}</p>
                                {
                                    collection.groups.map((group, index) => {
                                        const {
                                            title,
                                            items,
                                            movieItems,
                                            sliderParams,
                                        } = group;

                                        const titleFormatted = `${getIdFromTitle(collection.title)}-${getIdFromTitle(title)}`;
                                        const titleId = `${titleFormatted}-title`;
                                        const sliderNavigationId = `${titleFormatted}-slider-navigation`;

                                        return (
                                            <Section
                                                className='collections__section'
                                                title={title}
                                                titleId={titleId}
                                                actions={(
                                                    <SliderNavigation
                                                        id={sliderNavigationId}
                                                        mode='tile'
                                                    />
                                                )}
                                                isActionsHiddenInMobile
                                                key={index}
                                            >
                                                <Slider
                                                    sliderParams={sliderParams}
                                                    navigationTargetElementId={sliderNavigationId}
                                                    isBeyondTheViewportOnMobileS
                                                >
                                                    {
                                                        items?.map((item, index) => (
                                                            <CategoryCard key={index} {...item}/>
                                                        )) ?? movieItems?.map((item, index) => (
                                                            <MovieCard key={index} {...item}/>
                                                        ))
                                                    }
                                                </Slider>
                                            </Section>
                                        )
                                    })
                                }
                            </div>
                        ),
                    }))}
            >
        </Tabs>
    )
}

export default Collections