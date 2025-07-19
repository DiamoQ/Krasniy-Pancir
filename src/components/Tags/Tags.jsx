import './Tags.scss'
import Badge from "@/components/Badge";

const Tags = (props) => {
    const {
        langs = [],
    } = props

    return (
        <div
            className='tags'
        >
            <ul className="tags__list">
                {langs.map((lang, index) => (
                    <li className="tags__item" key={index}>
                        {lang}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tags