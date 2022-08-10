
import { GrEdit } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom';
import image from '../components/download.jpeg'
import axios from 'axios';
import Header from '../components/Header';
import './table.css'

function Categories(props) {
    console.log(props.category)
    var id
    console.log(props.category.id)
    const deleteCategory = () => {
        axios
            .delete(`https://simplor.herokuapp.com/api/category/delete/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    alert("Category successfully deleted");
                    //  console.log(`${API}/service/${id}`)
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    }
    return (
        <>
            <Header name="Categories Table" />
            <div className=' mt-5'>
                <Link to='/form'><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Create Category</button></Link>
                
                    <div class="sm:w-10/12 justify-center mx-auto">
                        <div class="">
                            <table class="w-12 sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                                <thead class="text-white">
                                    <tr class="bg-teal-400  sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                        <th class="p-3 text-left">ID</th>
                                        <th class="p-3 text-left">Image</th>
                                        <th class="p-3 text-left">Name</th>
                                        <th class="p-3 text-left">Description</th>
                                        <th class="p-3 text-left" width="110px">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center text-xl'>
                                    {props.category.map((cat) => {
                                        id = cat.id
                                        return (
                                            // (<tr>
                                            //     <td class="border border-slate-300 ...">{cat.id}</td>
                                            //     <td class="border border-slate-300 ...">
                                            //         {/* {cat.image} */}
                                            //         <img src={image} alt="" className='w-20 h-18 m-auto rounded-full' />
                                            //     </td>
                                            //     <td class="border border-slate-300 ...">{cat.name}</td>
                                            //     <td class="border border-slate-300 ...">{cat.description}</td>
                                            //     <td className=' border-slate-300 ... flex justify-evenly mt-5'>
                                            //         <Link to='/form' state={cat}><GrEdit className='text-green-400' /></Link>
                                            //         <MdDeleteForever onClick={deleteCategory} className='text-red-700' />
                                            //     </td>
                                            // </tr>
                                            <tr class=" sm:table-row mb-2 sm:mb-0">
                                                <td class="border-grey-light wrap border hover:bg-gray-100 p-3">{cat.id}</td>
                                                <td class="border-grey-light border hover:bg-gray-100 p-3 truncate"><img src={cat.image} alt="imag" /> </td>

                                                <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{cat.name} </td>
                                                <td class="border-grey-light wrap border hover:bg-gray-100 p-3 truncate">{cat.description} </td>
                                                <td class="border-grey-light flex border hover:bg-gray-100 p-3 justify-between text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                                    <Link to='/form' state={cat}><GrEdit className='text-green-400' /></Link>
                                                    <MdDeleteForever onClick={deleteCategory} className='text-red-700' /></td>
                                            </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Categories