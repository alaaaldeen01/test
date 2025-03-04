import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TiAdjustBrightness } from "react-icons/ti";
import { BsFillMoonFill } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeMode } from "../../Redux/counterSlice";

const Header = () => {
  const navigate = useNavigate();
  const isRealyDark = useSelector((state) => state.counter.isDark);
  const numProduct = useSelector((state) => state.counter.numProducts);
  const dispatch = useDispatch();
  const handleNavigate = () => {
    navigate("/CardBag");
  };
  return (
    <>
      <div
        className={
          isRealyDark == true ? "top-header  light1" : "top-header  dark1"
        }
      >
        <Link to="/signup">Sign in / Guest</Link>
        <Link> Create Account</Link>
      </div>
      <nav
        className={
          isRealyDark == true
            ? "navbar navbar-expand-lg light2 "
            : "navbar navbar-expand-lg dark2"
        }
      >
        <div className="container-fluid first-nav">
          <div className="logo">
            <a
              className={
                isRealyDark === true ? "hero-mode light" : "hero-mode dark "
              }
              href="#"
            >
              C
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse info" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={
                    isRealyDark == true ? "light-active" : "dark-active"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    isRealyDark == true ? "light-active" : "dark-active"
                  }
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    isRealyDark == true ? "light-active" : "dark-active"
                  }
                  to="/Product"
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    isRealyDark == true ? "light-active" : " dark-active"
                  }
                  to="/CardBag"
                >
                  Card
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="new-icons">
          <div className="icons">
            {isRealyDark == true ? (
              <div
                className="icon2"
                onClick={() => dispatch(handleChangeMode())}
              >
                <BsFillMoonFill size={20} />
              </div>
            ) : (
              <div
                className="icon1"
                onClick={() => dispatch(handleChangeMode())}
              >
                <TiAdjustBrightness size={20} />
              </div>
            )}
          </div>
          <div className="bag" onClick={handleNavigate}>
            <AiOutlineShoppingCart size={25} />
            <p
              className={
                isRealyDark == true ? "para-bag light" : "para-bag dark"
              }
            >
              {numProduct}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
