import { Link } from "react-router-dom";
import Container from 'utils/container/Container.jsx';
import './Header.scss';
import iconSearch from 'assets/img/icon-search.svg';
import iconNotification from 'assets/img/icon-notification.svg';
import avatar from 'assets/img/avatar.jpg';
import Badge from "utils/badge/Badge";
function Header(props) {
    return (
        <header className="header">
            <Container>
                <div className="header__left">
                    <Link className="header__brand" to="/">
                        .TeamWiki
                    </Link>
                </div>
                <div className="header__middle">
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link to="/category/wordpress">Wordpress</Link>
                            </li>
                            <li>
                                <Link to="/category/woocommerce">WooCommerce</Link>
                            </li>
                            <li>
                                <Link to="/category/prestashop">Prestashop</Link>
                            </li>
                            <li>
                                <Link to="/category/serwery">Serwery</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__search">
                        <input type="search" placeholder="Wpisz frazę..."/>
                        <button>
                            <img src={iconSearch} alt="Szukaj"/>
                        </button>
                    </div>
                </div>
                <div className="header__right">
                    <Link to="/profile" className="header__user user">
                        <div className="user__avatar">
                            <img src={avatar} alt="Grzegorz Wójcik" />
                        </div>
                        <div>
                            <span className="user__firstname">
                                Grzegorz
                            </span>
                            <span className="user__lastname">
                                Wójcik
                            </span>
                        </div>
                    </Link>
                    <div className="header__notifications">
                        <button>
                            <img src={iconNotification} alt="Notyfikacje"/>
                            <Badge>1</Badge>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header