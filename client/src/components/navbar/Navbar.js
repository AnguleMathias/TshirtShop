/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';
import './navbar.scss';
import TopNav from './TopNav';
import GET_DEPARTMENT_QUERY from '../../graphql/queries/departments';

const Navbar = ({...props}) => {
  const {
    activeItem,
    handleItemClick,
    data,
    handleSearchChange,
    handleClick
  } = props;
  console.log(props)
  
  if( data.department === undefined ){
    return 'loading...'
  }
  const { department } = data;
  const itemStyle={ color: '#DC143C' };
  return(
    <div className="">
      <TopNav {...props} />
      <nav className="navbar navbar-fixed-top navbar-expand-lg navStyle">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger " to="/products">Shopmate</Link>
          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav m-auto ">
              <li key='0'
                data-toggle="tooltip"
                title='Products'
                className="nav-item"
                >
                <Link
                  to='/products'
                  data-key='0'
                  className='link-item'
                  style={activeItem === 'Products' ? itemStyle : {}}
                  onClick={handleClick}
                >Products
                </Link>
              </li>
              {department.map(dept =>
                <li key={dept.department_id}
                  data-toggle="tooltip"
                  title={dept.description}
                  className="nav-item"
                >
                  <Link
                    to={`/products/inDepartment/${dept.department_id}`}
                    data-key={dept.department_id}
                    className='link-item'
                    style={activeItem === dept.name ? itemStyle : {}}
                    onClick={handleItemClick}
                  >{dept.name}
                  </Link>
                </li>
                )}
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <div className="searchbar">
                <input
                  onChange={handleSearchChange}
                  className="search_input"
                  type="text" name=""
                  placeholder="Search..."
                />
                <i className="fas fa-search"></i>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default compose(graphql(GET_DEPARTMENT_QUERY))(Navbar);
