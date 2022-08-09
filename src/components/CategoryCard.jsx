import image from './download.jpeg'

function CategoryCard(props){

    return(
        <>
            <div className="w-10/12 border-2 sm:w-50 lg:w-33 rounded-2xl shadow-md mx-auto">
                <div><img src={image} alt="hello" className='rounded-t-2xl rounded--2xl w-full h-40'/></div>
                <div className='text-4xl text-center font-extrabold pt-5 mb-3'><h4>{props.name}</h4></div>
                <div className='text-xl font-bold pl-5'><h6>{props.description}</h6></div>
            </div>
        </>
    )
}

export default CategoryCard