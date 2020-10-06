import React from 'react'
import "./index.css";

export default function Index() {
    return (
        <div className="admin-page">
            <div className="container">
                <div className="row">
                    <div id="sidebarMenu" className="col-md-1 d-md-block bg-white"> 
                                <div className="admin-order">
                                    <a className="text-dark" href="#">
                                        Orders
                                    </a>
                                </div>
                                <div className="">
                                    <a className="text-dark" href="#">
                                    Products
                                    </a>
                                </div>
                                <div className="">
                                    <a className="text-dark" href="#">
                                    Customers
                                    </a>
                                </div>
                                <div className="">
                                    <a className="text-dark" href="#">
                                    Reports
                                    </a>
                                </div>
                    </div>
                    <main className="col-md-10 mt-5 admin-main ml-auto">
                        <h2>User List</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Created</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td className="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>
                                        <td><i class="far fa-trash-alt"></i></td>

                                    </tr>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td className="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>
                                        <td><i class="far fa-trash-alt"></i></td>

                                    </tr>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td className="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>
                                        <td><i class="far fa-trash-alt"></i></td>

                                    </tr>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td className="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>
                                        <td><i class="far fa-trash-alt"></i></td>

                                    </tr>
                                    <tr>
                                        <td className="id">5f647d4beceecd0017bbdd49</td>
                                        <td className="username">Emil</td>
                                        <td className="email">emil.saxlund@notlify.com</td>
                                        <td className="created">2020-09-18T09:26:35.089Z</td>
                                        <td><i class="far fa-trash-alt"></i></td>
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
