import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
    return (
        
        <div>

        <div style={{
            paddingTop: '25%',
            paddingLeft: '50%'
        }}>

         <Spinner animation='border' role='status' style={{  
                width: '100px',
                height: '100px',
                margin: 'auto',
                }}>
                <span className='sr-only'>Loading...</span>
            </Spinner>
        </div>
        </div>
    )
}

export default Loader
