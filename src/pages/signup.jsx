import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Signup() {
    const navigate = useNavigate();
    // const [file, setFile] = useState()
    const [user, setUser] = useState(
        {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone: '',
        })

    // const handlePhoto = (event) => {
    // 	console.log(event.target.files[0])
    // 	var img = event.target.files[0]
    // 	setFile(img)
    // 	setUser({...user, 'avatar': img.name})
    // }

    const handleChange = (event) => {
        console.log(event)
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    console.log(user)

    const handleSubmit = event => {
        console.log(user)
        event.preventDefault()
        // const formData = new FormData()
        // formData.append('myFile', file)

        // axios.post("http://localhost:8080/api/uploadfile", formData, {
        // 	headers: {
        // 	  "content-type": "multipart/form-data",
        // 	},
        //   }).then(res=>{
        // 	console.log(res)
        // }).catch(err=>{
        // 	console.log(err)
        // })

        axios.post("https://simplor.herokuapp.com/api/user/register", user, {
            headers: {
                "content-type": "application/json",
            },
        }
        ).then(res => {
            console.log(res)
            // localStorage.setItem('user', JSON.stringify(res.data))
            navigate('/login')
        }).catch(err => {
            console.log(err)
        })
    }
    localStorage.removeItem('user')
    return (
        <div className="bg-slate-300 h-screen">

            <h1 className="text-center text-4xl underline">Sign up Form</h1>
            <div class="w-full max-w-lg m-auto mt-5">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            First name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name" name="first_name" value={user.first_name} onChange={handleChange} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Last name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name" name="last_name" value={user.last_name} onChange={handleChange} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="First Name" nplaceholder="Password"
                            name="password"
                            value={user.password}
                            onChange={handleChange} />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Phone
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange} />
                    </div>
                    <div class="flex items-center justify-between">
                        <button onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                    </div>
                </form>

                <p className="mx-auto">
                    Already Have Account ? <Link to="/login" className="font-bold text-blue-600">Log In</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;