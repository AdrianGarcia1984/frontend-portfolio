import React from 'react'

const Formulario = (props) => {

    const action = () => {

    }
    return (
        <div>
            <section className='form-crud sm:w-auto mt-2'>
                <form className='w-full max-w-sm mb-2' onSubmit={action} >
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="name">Nombre
                            </label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500' type="name" placeholder='nombre' 
                            // value={name} 
                            // onChange={e => setName(e.target.value)} 
                            id="name"></input>
                        </div>
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="name">Email
                            </label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500' type="email" placeholder='email' 
                            // value={email} 
                            // onChange={e => setEmail(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className='md:flex md:items-center'>
                        <div className='md:w-1/3'></div>
                        <div className='md:w-2/3'>
                            <button className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>Guardar</button>
                        </div>
                    </div>
                    <br />
                </form>
            </section>
        </div>
    )
}

export default Formulario