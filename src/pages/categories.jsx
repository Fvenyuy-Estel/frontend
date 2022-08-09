
import { GrEdit } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom';
import image from '../components/download.jpeg'
import axios from 'axios';

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


            <Link to='/form'><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Create Category</button></Link>
            <table class="border-collapse table-auto border-spacing-2 border border-slate-400 w-full ...">
                <thead className='text-3xl'>
                    <tr>
                        <th class="border border-slate-300 ...">ID</th>
                        <th class="border border-slate-300 ...">Image</th>
                        <th class="border border-slate-300 ...">Name</th>
                        <th class="border border-slate-300 ...">Description</th>
                        <th class="border border-slate-300 ...">Modify</th>

                    </tr>
                </thead>
                <tbody className='text-center text-3xl'>
                    {props.category.map((cat) => {
                        id = cat.id
                        return (<tr>
                            <td class="border border-slate-300 ...">{cat.id}</td>
                            <td class="border border-slate-300 ...">
                                {/* {cat.image} */}
                                <img src={image} alt="" className='w-20 h-18 m-auto rounded-full' />
                            </td>
                            <td class="border border-slate-300 ...">{cat.name}</td>
                            <td class="border border-slate-300 ...">{cat.description}</td>
                            <td className=' border-slate-300 ... flex justify-evenly mt-5'>
                                <Link to='/form' state={cat}><GrEdit className='text-green-400'/></Link>
                                <MdDeleteForever onClick={deleteCategory} className='text-red-700'/>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Categories