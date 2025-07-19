import './AccordeonGroup.scss'
import classNames from 'classnames'

const AccordeonGroup = (props) => {
    const {
        className,
        // '' (default) | 'dark'
        mode='',
        columns = 1,
        children,
        isOrderedList = true,
    } = props

    const itemPerColumn = Math.ceil(children.length / columns);

    const ListTag = isOrderedList ? 'ol' : 'ul'

    return (
        <ListTag
            className={classNames(className, 'accordeon-group', {
                [`accordeon-group--${columns}-columns`]: columns > 1,
                [`accordeon-group--${mode}`]: mode,
                'accordeon-group--has-counter': isOrderedList,
            })}
        >
            {children.map((question, index) => (
                <li
                    className={classNames('accordeon-group__item' , {
                        'accordeon-group__item--last-column-item': columns > 1 && (index + 1) % itemPerColumn === 0,
                    })}
                    key={index}
                >
                    {question}
                </li>
            ))}
        </ListTag>
    )
}

export default AccordeonGroup