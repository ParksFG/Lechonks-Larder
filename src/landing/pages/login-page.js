import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function signInPage() {
  return (
    <div className="text-center m-5-auto">
      <h2>Sign In Here!</h2>
      <div class="container-fluid">
        <form class="login-form">
          <div class="form-outline mb-4">
            <input type="email" id="email-login" class="form-control" />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="password-login" class="form-control" />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col">
              <Link to="/forget-password">
                <label className="right-label">Forget password?</label>
              </Link>
            </div>
          </div>

          <button
            type="button"
            value="submit"
            class="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>

          <div class="text-center">
            <p>
              First time? <Link to="/register">Create an account</Link>.
            </p>
            <p>
              <Link to="/home">Back to Homepage</Link>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
