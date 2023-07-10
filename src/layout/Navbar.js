import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div class="blue">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <h3>Patient Management</h3>
          <Link className="btn btn-outline-light" to="/">
           Logout
          </Link>
        </div>
      </nav>
    </div>
    </div>
  );
}