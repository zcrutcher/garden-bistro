"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [navMenu, setNavMenu] = useState({
    hamburger: "closed",
    navMenu: "closed",
    more: "closed",
  });

  const hamburgerHandler = () => {
    const navState = navMenu.hamburger === "open" ? "closed" : "open";
    setNavMenu({ hamburger: navState, navMenu: navState });
  };

  const resetNav = () => {
    setNavMenu({ hamburger: "closed", navMenu: "closed", more: "closed" });
  };

  const moreHandler = () => {
    const moreState = navMenu.more === "open" ? "closed" : "open";
    setNavMenu({ ...navMenu, more: moreState });
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/" onClick={resetNav}>
            <Image
              alt="brand logo"
              src="/assets/nav/imgs/logo.png"
              width="112"
              height="28"
            />
          </Link>

          <button
            //role="button"
            id="navbar-burger"
            className={
              navMenu.hamburger === "open"
                ? "navbar-burger is-active"
                : "navbar-burger"
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={hamburgerHandler}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="navbar-menu"
          className={
            navMenu.hamburger === "open"
              ? "navbar-menu is-active"
              : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <Link className="navbar-item" href="/menu" onClick={resetNav}>
              Menu
            </Link>
            <Link className="navbar-item" href="/about" onClick={resetNav}>
              About Us
            </Link>
            <Link
              className="navbar-item"
              href="/contact"
              onClick={hamburgerHandler}
            >
              Contact
            </Link>

            <div
              className={
                navMenu.more === "open"
                  ? "navbar-item has-dropdown is-active"
                  : "navbar-item has-dropdown"
              }
            >
              <span className="navbar-link" onClick={moreHandler}>
                More
              </span>
              <div className="navbar-dropdown">
                <Link
                  className={
                    navMenu.more === "open"
                      ? "navbar-item"
                      : "navbar-item is-hidden"
                  }
                  href="/gallery"
                  onClick={resetNav}
                >
                  Gallery
                </Link>
                <Link
                  className={
                    navMenu.more === "open"
                      ? "navbar-item"
                      : "navbar-item is-hidden"
                  }
                  href="/reviews"
                  onClick={resetNav}
                >
                  Reviews
                </Link>
                <Link
                  className={
                    navMenu.more === "open"
                      ? "navbar-item"
                      : "navbar-item is-hidden"
                  }
                  href="/special-events"
                  onClick={resetNav}
                >
                  Special Events
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link
                  className="button is-primary"
                  href="/reservation"
                  onClick={hamburgerHandler}
                >
                  <strong>Reservations</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Header;
