import './Badge.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Badge = (props) => {
    const {
        className,
        // '' (default) | 'red'
        mode='',
        isBig= false,
        iconName,
        hasFillIcon,
        iconAreaLabel,
        children,
    } = props

    return (
        <div
            className={classNames(className, 'badge', {
              [`badge--${mode}`]: mode,
              'badge--big': isBig,
            })}
        >
            {iconName && (
                <Icon
                    name={iconName}
                    className='badge__icon'
                    hasFill={hasFillIcon}
                    areaLabel={iconAreaLabel}
                />
            )}
            <span>{children}</span>
        </div>
    )
}

export default Badge