import React from 'react'
import notFound from '../../images/notFound.png'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className='text-center marginStyle'>
                <img src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/572a203e90336020328d5753/images/6501fc0005bf840172c6e903/file-WxGOJGo9V5.png" width={400} height={600} alt='NOT FOUND' />
                <h1>
                    <span className='text-danger fs-1'>Under Process</span><br /> Feature is Currently available on mobile only
                </h1>
            </div>
            <Footer />
        </>
    )
}

export default NotFound
