import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <header>
                <Navbar />
            </header>
            <main className='mt-40'>
                {children}
            </main>
            <footer>

            </footer>
        </Fragment>
    )
}

export default Layout
