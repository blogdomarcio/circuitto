import React from 'react'

const Header = () => {
    return (
        <>

            <div className="md:flex ">
                <div className="md:w-1/4 w-full">

                    <img src='/logo.png' className='p-5 mx-auto' />



                </div>
                <div className="md:w-3/4 w-full">


                    <div className="w-full text-center bg-gray-300 p-12 mr-56 mt-4"> Publicidade Superior </div>



                </div>
            </div>

            <div className='p-2'>


                <div className='bg-gray-100 p-3 font-bold text-sm text-center md:text-lg lg:text-lg cursor-pointer '>  Cidades - Social - Política - Polícia - Entrevistas - Fale Consoco </div>


            </div>



        </>
    )
}

export default Header