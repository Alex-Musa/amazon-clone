import React from 'react'
import "./Header.css"

import { Link } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>


            {/* 1st link */}
            <div className="header__nav">
                <Link to="login" className="header__link">
                    <div className="headerOption">
                        <span className="header__optionLineOne">Hello ALEX</span>
                        <span className="header__optionLineTwo">Sing in</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="headerOption">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="headerOption">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__baskrtCount">0</span>
                    </div>
                </Link>
            </div>
            

        </nav>
    )
}

export default Header
