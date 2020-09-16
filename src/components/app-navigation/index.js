import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";

export default function index() {
  return (
    <div>
      <div>
        <div className="nav-top">
          <div className="container d-flex justify-content-between h-100">
            <div className="nav-border-r d-flex align-items-center">
              <div className="nav-top-item pr-2">
                ENG
                <i className="fas fa-chevron-down fa-sm"></i>
              </div>
              <div className="nav-top-item px-2 pr-3">
                USD
                <i className="fas fa-chevron-down fa-sm fa-sm"></i>
              </div>
            </div>
            <div className="d-none d-md-flex">
              <div>
                <Link
                  href="/newsletter"
                  className="pr-3 text-light nav-text-item nav-border-r"
                >
                  Newsletter
                </Link>
                <Link
                  to="/contact"
                  className="pr-3 pl-3 text-light nav-text-item nav-border-r"
                >
                  Contact us
                </Link>
                <Link to="/faq" className="pr-3 pl-3 text-light nav-text-item">
                  FAQs
                </Link>
              </div>
              <div className="nav-socials h-100 nav-border-l pl-2 d-flex align-items-center">
                <i className="fab fa-facebook-f px-1"></i>
                <i className="fab fa-twitter px-1"></i>
                <i className="fab fa-instagram px-1"></i>
                <i className="fab fa-pinterest-p px-1"></i>
                <i className="fab fa-youtube px-1"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-middle">
          <div className="container h-100 d-flex flex-column flex-md-row py-4 py-md-0 align-items-start align-items-md-center justify-content-between">
            <Link to="/">
              <img className="mb-4 mb-md-0" src={Logo} alt="Logo" />
            </Link>

            <div className="input-group nav-search-grp">
              <input
                type="text"
                className="form-control nav-search-input"
                placeholder="Search products..."
                aria-label="Search"
                aria-describedby="nav-search-btn"
              />
              <a
                className="nav-link nav-categories-link d-flex align-items-center"
                href="/"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
              >
                Categories
                <i className="fas fa-chevron-down fa-sm fa-lg ml-4 dropdown-icon"></i>
              </a>
              <div className="input-group-prepend">
                <button
                  className="input-group-text nav-search-btn"
                  id="nav-search-btn"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            <div className="d-none d-lg-block">
              <Link to="/account" className="custom-nav-link">
                <i className="far fa-user custom-nav-link-icon pr-1 "></i>
                My account
              </Link>
              <Link to="/heart" className="custom-nav-link ml-4">
                <i className="far fa-heart custom-nav-link-icon"></i>
              </Link>
              <Link href="/compare" className="custom-nav-link ml-3">
                <i className="fas fa-arrows-alt-h custom-nav-link-icon"></i>
              </Link>
              <Link href="/shopping-bag" className="custom-nav-link ml-3">
                <i className="fas fa-shopping-bag custom-nav-link-icon"></i>
                $0.00
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="container h-100 d-flex align-items-center justify-content-between position-relative">
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler mobile-toggle-btn"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars fa-lg"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav flex-column-reverse flex-lg-row">
                <li className="nav-item browse-cat px-3 mr-2 mr-xl-4">
                  <Link
                    href="/"
                    className="custom-nav-link d-flex h-100 align-items-center text-white"
                  >
                    <i className="fas fa-list mr-2"></i>
                    Browse Categories
                    <i className="fas fa-chevron-down fa-sm fa-lg pt-1 pl-2 dropdown-icon text-white ml-4"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/shop"
                    className="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Shop
                    <i className="fas fa-chevron-down fa-sm fa-lg pt-1 pl-2 dropdown-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/product"
                    className="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Products
                    <i className="fas fa-chevron-down fa-sm fa-lg pt-1 pl-2 dropdown-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/categories"
                    className="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Categories
                    <i className="fas fa-chevron-down fa-sm pt-1 pl-2 dropdown-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/pages"
                    className="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Pages
                    <i className="fas fa-chevron-down fa-sm fa-lg pt-1 pl-2 dropdown-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog"
                    className="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <button className="custom-theme-btn s-offer-btn">
            SPECIAL OFFER
          </button>
        </div>
      </div>
    </div>
  );
}
