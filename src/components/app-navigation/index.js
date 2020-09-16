import React from "react";
import "./index.css";
import Logo from "../../assets/img/Logo.png";

export default function index() {
  return (
    <div>
      <div>
        <div class="nav-top">
          <div class="container d-flex justify-content-between h-100">
            <div class="nav-border-r d-flex align-items-center">
              <div class="nav-top-item pr-2">
                ENG
                <i class="fas fa-chevron-down fa-sm"></i>
              </div>
              <div class="nav-top-item px-2 pr-3">
                USD
                <i class="fas fa-chevron-down fa-sm fa-sm"></i>
              </div>
            </div>
            <div class="d-none d-md-flex">
              <div>
                <a
                  href="#Newsletter"
                  class="pr-3 text-light nav-text-item nav-border-r"
                >
                  Newsletter
                </a>
                <a
                  href="#contact"
                  class="pr-3 pl-3 text-light nav-text-item nav-border-r"
                >
                  Contact us
                </a>
                <a href="#faqsa" class="pr-3 pl-3 text-light nav-text-item">
                  FAQs
                </a>
              </div>
              <div class="nav-socials h-100 nav-border-l pl-2 d-flex align-items-center">
                <i class="fab fa-facebook-f px-1"></i>
                <i class="fab fa-twitter px-1"></i>
                <i class="fab fa-instagram px-1"></i>
                <i class="fab fa-pinterest-p px-1"></i>
                <i class="fab fa-youtube px-1"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-middle">
          <div class="container h-100 d-flex flex-column flex-md-row py-4 py-md-0 align-items-start align-items-md-center justify-content-between">
            <img class="mb-4 mb-md-0" src={Logo} alt="Logo" />

            <div class="input-group nav-search-grp">
              <input
                type="text"
                class="form-control nav-search-input"
                placeholder="Search products..."
                aria-label="Search"
                aria-describedby="nav-search-btn"
              />
              <a
                class="nav-link nav-categories-link d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
              >
                Categories
                <i class="fas fa-chevron-down fa-sm fa-lg ml-4 dropdown-icon"></i>
              </a>
              <div class="input-group-prepend">
                <button
                  class="input-group-text nav-search-btn"
                  id="nav-search-btn"
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>

            <div class="d-none d-lg-block">
              <a href="#account" class="custom-nav-link">
                <i class="far fa-user custom-nav-link-icon pr-1 "></i>
                My account
              </a>
              <a href="#likes" class="custom-nav-link ml-4">
                <i class="far fa-heart custom-nav-link-icon"></i>
              </a>
              <a href="#likes" class="custom-nav-link ml-3">
                <i class="fas fa-arrows-alt-h custom-nav-link-icon"></i>
              </a>
              <a href="#likes" class="custom-nav-link ml-3">
                <i class="fas fa-shopping-bag custom-nav-link-icon"></i>
                $0.00
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-bottom">
        <div class="container h-100 d-flex align-items-center justify-content-between position-relative">
          <nav class="navbar navbar-expand-lg">
            <button
              class="navbar-toggler mobile-toggle-btn"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars fa-lg"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav flex-column-reverse flex-lg-row">
                <li class="nav-item browse-cat px-3 mr-2 mr-xl-4">
                  <a
                    href="#home"
                    class="custom-nav-link d-flex h-100 align-items-center text-white"
                  >
                    <i class="fas fa-list mr-2"></i>
                    Browse Categories
                    <i class="fas fa-chevron-down fa-sm fa-lg pt-1 pl-2 dropdown-icon text-white ml-4"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <router-link
                    to="/"
                    class="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Home
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    to="/shop"
                    class="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Shop
                    <i class="fas fa-chevron-down fa-sm fa-lg pt-1 pl-2 dropdown-icon"></i>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    to="/product"
                    class="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Products
                    <i class="fas fa-chevron-down fa-sm fa-lg pt-1 pl-2 dropdown-icon"></i>
                  </router-link>
                </li>
                <li class="nav-item">
                  <a
                    href="#cat"
                    class="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Categories
                    <i class="fas fa-chevron-down fa-sm pt-1 pl-2 dropdown-icon"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#pages"
                    class="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Pages
                    <i class="fas fa-chevron-down fa-sm fa-lg pt-1 pl-2 dropdown-icon"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <router-link
                    to="/blog"
                    class="custom-nav-link d-flex h-100 align-items-center mr-4"
                  >
                    Blog
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>

          <button class="custom-theme-btn s-offer-btn">SPECIAL OFFER</button>
        </div>
      </div>
    </div>
  );
}
