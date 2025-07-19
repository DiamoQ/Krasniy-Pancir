import './Logo.scss'
import classNames from 'classnames'
import logoImgSrc from '@/assets/images/logo.png'

const Logo = (props) => {
    const {
        className,
        loading = lazy
    } = props
    const title = 'Главная'

    return (
        <a
            className={classNames(className, 'logo')}
            href='/'
            title={title}
            aria-label={title}
        >
            <img
                className="logo__image"
                src={logoImgSrc}
                alt=''
                width={185}
                height={40}
                loading={loading}
            />
        </a>
    )
}

export default Logo