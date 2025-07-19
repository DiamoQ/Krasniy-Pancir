import './OrderStepsCard.scss'

const OrderStepsCard = (props) => {
    const {
        number,
        title,
        imgSrc,
    } = props

    return (
        <div
            className='order-step-card'
        >
            <header className='order-step-card__header'>
                <div className='order-step-card__image-wrapper'>
                    <img
                        className='order-step-card__image'
                        src={imgSrc}
                        width={40}
                        height={40}
                        alt=''
                        loading='lazy'
                    />
                </div>
                <h3 className='order-step-card__title'>{title}</h3>
            </header>
            <span className="order-step-card__number">{number}</span>
        </div>
    )
}

export default OrderStepsCard