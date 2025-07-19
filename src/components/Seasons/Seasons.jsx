import './Seasons.scss'
import AccordeonGroup from "@/components/AccordeonGroup";
import Accordeon from "@/components/Accordeon";
import EpisodeCard from "@/components/EpisodeCard";

const Seasons = (props) => {
    const {
      seasons
    } = props

    return (
        <AccordeonGroup
            className="seasons"
            mode='dark'
            isOrderedList={false}
        >
            { seasons.map(({title, subtitle, episodes}, index) => (
                <Accordeon
                    key={index}
                    title={title}
                    id={`season-${index}`}
                    name='seasons'
                    titleLevelClassName='h4'
                    subtitle={subtitle}
                    isOpen={index === 0}
                    isArrowButton={true}
                >
                    <ul className="seasons__list">
                        {episodes.map((episode, index) => (
                            <li className="seasons__item" key={index}>
                                <EpisodeCard {...episode} />
                            </li>
                        ))}
                    </ul>
                </Accordeon>
            ))}
        </AccordeonGroup>
    )
}

export default Seasons