import React from 'react'
import Helmet from 'react-helmet'

const MetaLinks = () => {
    return (
        <>
            <Helmet>
                {/* Performance tip: hint to the browser to start the handshake for the fonts site */}
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com/"
                    crossorigin
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                />
            </Helmet>
        </>
    )
}

export default MetaLinks
