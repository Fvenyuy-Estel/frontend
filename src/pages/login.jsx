

import React, { useState, useRef } from "react";
import { useScript } from "./script";
import jwt_deocde from "jwt-decode";
import { Navigate, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate()
  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    console.log(payload);
    setuser(payload);
    // localStorage.setItem('gUser',JSON.stringify(user))
  };
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: "677700427736-ebfp0hmo2e0h5cdttl55orol43lqnn1s.apps.googleusercontent.com", // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "large",
    });
  });

  const [nUser, setnUser] = useState(
    {
      email: '',
      password: '',
    })

  const handleChange = (event) => {
    console.log(event)
    setnUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    axios.post("https://simplor.herokuapp.com/api/user/login", nUser, {

    }
    ).then(res => {
      console.log(res)
      // localStorage.setItem('user', JSON.stringify(res.data))
      navigate('/', { state: res.data })
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div
      className="mx-auto bg-slate-300 h-screen"
    >
      {!user && <>
        <div className="h-full w-full">
          <div className="mt-25"><h2 className="text-4xl text-center mt-25">Members Log in</h2></div>
          <div class="w-full max-w-lg m-auto mt-20">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" name="email" value={nUser.email} onChange={handleChange} />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" value={nUser.password} onChange={handleChange} />
              </div>
              <div class="flex items-center justify-between">
                <button onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
              </div>

            </form>

            <div ref={googlebuttonref} className="w-60 h-12 max-w-lg"></div>
            <p className="mx-auto">
              Don't Have Account ? <Link to="/signup" className="font-bold text-blue-600">Register Now</Link>
            </p>
          </div>


        </div>

      </>}
      {user && (
        <div>
          <Navigate to={'/'} />
        </div>
      )}
    </div>
  );
};

export default Login;

