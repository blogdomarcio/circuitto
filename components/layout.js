import React from 'react'
import Header from './header'

const Layout = ({ children }) => {
    return (

        <>

            <div className='container mx-auto'>

                <Header />

                <div className='h-screen'>
                    {children}
                </div>



            </div>



        </>

    )
}

export default Layout
