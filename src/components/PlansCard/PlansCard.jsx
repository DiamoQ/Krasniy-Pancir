import './PlansCard.scss'
import classNames from 'classnames'
import Button from "@/components/Button";

const PlansCard = (props) => {
    const {
        title,
        description,
        price,
        className,
    } = props

    return (
        <div
            className='plans-card'
        >
            <div className="plans-card__info">
                <h3 className="plans-card__title h4">
                    {title}
                </h3>
                <div className="plans-card__description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <div className="plans-card__tarif">
                <span className="plans-card__price">{price.value}</span>
                <span className="plans-card__period">{price.period}</span>
            </div>
            <div className="plans-card__actions">
                <Button
                    label='Start Free Trial'
                    href='/support'
                    mode='black-08'
                />
                <Button
                    label='Choose Plan'
                    href='/plans'
                />
            </div>
        </div>
    )
}

export default PlansCard