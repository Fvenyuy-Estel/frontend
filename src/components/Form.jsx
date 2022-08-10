import React, { useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'


function Form() {
    const location = useLocation()
    const categoryExist = location.state

    // const [file, setFile] = useState()
    const [cat, setCat] = useState(categoryExist ?
        {
            name: categoryExist.name,
            description: categoryExist.description,
            image: categoryExist.image,
            id: categoryExist.id
        } : {
            name: '',
            description: '',
            id: '',
            image: ''
        })

    // const handlePhoto = (event) => {
    //     console.log(event.target.files[0])
    //     var img = event.target.files[0]
    //     setFile(img)
    //     setCat({ ...cat, 'image': img.name })
    // }

    const handleChange = (event) => {
        console.log(event)
        setCat({ ...cat, [event.target.name]: event.target.value })
    }
    console.log(cat)

    const handleSubmit = event => {
        if (!categoryExist) {
            // const formData = new FormData()
            // formData.append('myFile', file)

            // axios.post("http://localhost:8080/api/uploadfile", formData, {
            //     headers: {
            //         "content-type": "multipart/form-data",
            //     },
            // }).then(res => {
            //     console.log(res)
            // }).catch(err => {
            //     console.log(err)
            // })

            axios.post("https://simplor.herokuapp.com/api/category/create", cat, {
                headers: {
                    "content-type": "application/json",
                },
            }
            ).then(res => {
                console.log(res)
                localStorage.setItem('cat', JSON.stringify(res.data))
            }).catch(err => {
                console.log(err)
            })
        } else { 
            axios.put(`https://simplor.herokuapp.com/api/category/update/${categoryExist.id}`, cat
            ).then(res => {
                console.log(res)
                // localStorage.setItem('cat', JSON.stringify(res.data))
            }).catch(err => {
                console.log(err)
            })
        }
    }
    localStorage.removeItem('cat')

    return (
        <>
            <Header name = "Create Category"/>
            <div class="w-6/12 mx-auto mt-4">
                <form class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-xl font-bold mb-2" for="username">
                            Category Name
                        </label>
                        <input class="h-4/12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='name' value={cat.name} type="text" placeholder="Username" onChange={handleChange}/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-xl font-bold mb-2" for="password">
                            Enter the Decription
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" name='description' value={cat.description} onChange={handleChange}/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-xl font-bold mb-2" for="password">
                            Select Image
                        </label>
                        <input class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="file" name='image' onChange/>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form