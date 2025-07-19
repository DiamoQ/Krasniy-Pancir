import './Footer.scss';
import classNames from "classnames";
import Socials from "@/components/Socials";

const Footer = (props) => {
    const menuItems = [
        {
            title: 'Home',
            links: [
                {
                    title: 'Categories',
                    link: '/categories',
                },
                {
                    title: 'Devices',
                    link: '/devices',
                },
                {
                    title: 'Pricing',
                    link: '/pricing',
                },
                {
                    title: 'FAQ',
                    link: '/faq',
                },
            ],
        },{
            title: 'Movies',
            links: [
                {
                    title: 'Gernes',
                    link: '/gernes',
                },
                {
                    title: 'Trending',
                    link: '/trending',
                },
                {
                    title: 'New Release',
                    link: '/newrelease',
                },
                {
                    title: 'Popular',
                    link: '/popular',
                },
            ],
        },{
            title: 'Shows',
            links: [
                {
                    title: 'Gernes',
                    link: '/gernes',
                },
                {
                    title: 'Trending',
                    link: '/trending',
                },
                {
                    title: 'New Release',
                    link: '/newrelease',
                },
                {
                    title: 'Popular',
                    link: '/popular',
                },
            ],
        },{
            title: 'Support',
            links: [
                {
                    title: 'Contact Us',
                    link: '/contact',
                },
            ],
        },{
            title: 'Subscription',
            links: [
                {
                    title: 'Plans',
                    link: '/plans',
                },
                {
                    title: 'Features',
                    link: '/features',
                },
            ],
        },{
            title: 'Connect With Us',
            socialLinks: [
                {
                    label: 'Facebook',
                    iconName: 'facebook',
                    link: 'https://www.facebook.com',
                },{
                    label: 'Twitter',
                    iconName: 'twitter',
                    link: 'https://twitter.com',
                },{
                    label: 'Linkedin',
                    iconName: 'linkedin',
                    link: 'https://www.linkedin.com',
                },
            ],
        }
    ]
    const extraLinks = [
        {
            title: 'Terms of Use',
            href: '/terms',
        },
        {
            title: 'Privacy Policy',
            href: '/privacy-policy',
        },{
            title: 'Cookie Policy',
            href: '/cookie-policy',
        },
    ];

    return (
        <footer className='footer'>
            <div className='footer__inner container'>
                <nav className='footer__menu'>
                    {menuItems.map(({title, links, socialLinks}, index) => (
                        <div className='footer__menu-column' key={index}>
                            <span className="footer__menu-title h6">{title}</span>
                            {links?.length > 0 && (
                                <ul className='footer__menu-list'>
                                    {links.map(({title, link}, index) => (
                                        <li className='footer__menu-item' key={index}>
                                            <a href={link} className='footer__menu-link'>{title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {socialLinks?.length > 0 && (
                                <Socials className='footer__soc1als' links={socialLinks} />
                            )}
                        </div>
                    ))}
                </nav>
                <div className='footer__extra'>
                    <p className='footer__copyright'>
                        @<time dateTime='2023'>2023</time> streamvib, All Rights Reserved
                    </p>
                    <div className='footer__extra-links'>
                        {extraLinks.map(({title, href}, index) => (
                            <a
                                href={href}
                                key={index}
                                className='footer__extra-link'
                            >
                                {title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;