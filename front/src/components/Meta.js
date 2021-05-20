import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({title, description, keywords }) => {
    return (
        <Helmet >
           <title>{title}</title> 
           <meta name='description' content={description} />
           <meta name='keywords' content={keywords} />

        </Helmet>
    )
}

Meta.defaultProps = { 
    title: 'Welcome To Varsy Lyf',
    description: 'We sell the best you need for varsity',
    keywords: 'electronic, buy electronics, cheap eletronics'
}

export default Meta
