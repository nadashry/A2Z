import React from 'react'
import styels from './Academy.module.css'
import Consltant from './Consltant'
import Overview from '../Overview/Overview'

const Academy = () => {
    return (
        <div className={styels.container}>
            <div className={styels.heading}>
                <div className={styels.label}>
                    <h1>ELIE CHARBEL<br />
                        CEO & FOUNDER</h1>
                </div>
                <div className={styels.image}>
                    <img src='/images/Elie-academy-svg.webp' alt='/' />
                </div>

            </div>
            <Consltant/>
       <Overview/>
        </div>
    )
}

export default Academy