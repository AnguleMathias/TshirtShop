/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../../helpers/Authentication';
import * as accessCart from '../../helpers/Cart';
import handleLogout from '../../helpers/Logout';
import './navbar.scss';


const computeTotal = (data) => {
  if (!data || data.length === 0) return '';
  let total = 0;
  for (let i = 0; i < data.length; i+=1) {
    if (data.length !== 0) {
      // eslint-disable-next-line
      Object.keys(data[i]).forEach(item => {
        if(item === 'quantity') {
          total += data[i][item];
        }
      });
    }
  };
  return total;
}

const TopNav = ({...props}) => {
  const username = auth.getUsername();

  const { shoppingCart } = props;
  const total = computeTotal(shoppingCart)
  const generatedId = accessCart.getGeneratedCartId();

  return (
    <div className="row account">
      <div className="col-md-2">
        {auth.isAuthenticated()
          ?
          <ul className="dropdown account-ul">
            <li className="nav-item dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">Hey!
              <Link to="!#" className="auth">{username}</Link>
            </li>
            <span className="caret"></span>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/myorders"><i className="fas fa-cart-arrow-down"></i> My Orders</Link>
              <Link className="dropdown-item" to="/customer"><i className="fas fa-user profile"></i> Profile</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" onClick={handleLogout} to="/"><i className="fas fa-sign-out-alt"></i> Log out</Link>
            </div>
          </ul>
          :
          <ul className="account-ul">
            <li className="nav-item">Hi!
              <Link to="/login" className="auth">Sign In</Link>
            </li>
            <li className="nav-item">Or
              <Link to="/signup" className="auth">Sign Up</Link>
            </li>
          </ul>
        }
      </div>
      <div className="col-md-8">
        <ul className="account-ul">
            <li className="nav-item"><Link to="/" className="item">Daily Deals</Link></li>
            <li className="nav-item"><Link to="/" className="item">Sell</Link></li>
            <li className="nav-item"><Link to="/" className="item">Help & Contact</Link></li>
        </ul>
      </div>
      <div className="col-md-2">
        <ul className="account-ul">
            <li className="nav-item">
              <Link to={`/shoppingcart/${generatedId}`} className="item">
                <i className="fas fa-cart-arrow-down">
                  <span className="badge badge-danger">{total}</span>
                </i>
              </Link>
            </li>
            <li className="nav-item">Your Cart: <span className="auth">&euro; 0.00</span></li>
        </ul>
      </div>
    </div>
  )
}

export default TopNav;
