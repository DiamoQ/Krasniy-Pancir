import './Header.scss';
import Logo from "@/components/Logo";
import classNames from "classnames";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";

const Header = (props) => {
    const {
        url,
        isFixed,
    } = props;

    const menuItems = [
        {
            label: 'Home',
            href: '/'
        },{
            label: 'Movie & Shows',
            href: '/movies'
        },{
            label: 'Support',
            href: '/support'
        },{
            label: 'Subscriptions',
            href: '/subscriptions'
        },
    ]

    return (
        <header className={classNames('header', {
            'is-fixed': isFixed,
        })} data-js-overlay-menu=''>
            <div className='header__inner container'>
                <Logo loading='eager'/>
                <dialog
                    className='header__overlay-menu-dialog'
                    data-js-overlay-menu-dialog=''
                >
                    <nav className='header__menu'>
                        <ul className='header__menu-list'>
                            {menuItems.map((item, index) => (
                                <li key={index} className='header__menu-item'>
                                    <a
                                        href={item.href}
                                        className={classNames('header__menu-link', {
                                            'is-active': item.href === url
                                        })}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className='header__actions'>
                    <Button
                        className='header__button'
                        label='Search'
                        isLabelHidden
                        iconName='search'
                        mode='transparent'
                    />
                    <Button
                        href='/'
                        label='Notifications'
                        isLabelHidden
                        iconName='signal'
                        mode='transparent'
                    />
                </div>
                </dialog>
                <BurgerButton
                    className='header__burger-button visible-tablet'
                    extraAttrs={{
                        'data-js-overlay-menu-burger-button': ''
                    }}
                />
            </div>
        </header>
    )
}

export default Header;