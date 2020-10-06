import React from 'react'
import "./index.css";

export default function Index() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-white">
                        <div>
                            <ul className="flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        <span data-feather="home"></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">
                                        <span data-feather="file"></span>
                                        Orders
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">
                                        <span data-feather="shopping-cart"></span>
                                    Products
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">
                                        <span data-feather="users"></span>
                                    Customers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">
                                        <span data-feather="bar-chart-2"></span>
                                    Reports
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <h2>User List</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Created</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td classname="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>

                                    </tr>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td classname="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>

                                    </tr>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td classname="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>

                                    </tr>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td classname="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>

                                    </tr>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td classname="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
