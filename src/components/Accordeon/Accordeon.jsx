import './Accordeon.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Accordeon = (props) => {
    const {
        title,
        id,
        name,
        isOpen,
        titleLevelClassName='h5',
        subtitle,
        isArrowButton= false,
        children
    } = props

    return (
        <div
            className='accordeon'
        >
            <details
                className='accordeon__details'
                name={name}
                open={isOpen}
            >
              <summary className="accordeon__summary">
                <h3 className={`accordeon__title ${titleLevelClassName}`}>
                  <span role='term' aria-details={id}>{title}</span>
                  {subtitle && (
                    <span className='accordeon__subtitle'>{subtitle}</span>
                  )}
                  { isArrowButton && (
                      <div className="accordeon__arrow">
                          <Icon
                              name='arrow-down'
                          />
                      </div>
                  )}
                </h3>
              </summary>
            </details>
            <div
                className='accordeon__content'
                id={id}
                role='definition'
            >
              <div className='accordeon__content-inner'>
                <div className="accordeon__content-body">
                  {children}
                </div>
              </div>
            </div>
        </div>
    )
}

export default Accordeon