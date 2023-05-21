import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const DynamicTitle = ({ subtitle }) => {
    const title = import.meta.env.VITE_SITE_TITLE;
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>
                        {title} | {subtitle}
                    </title>
                    <meta name="description" content={subtitle} />
                </Helmet>
            </HelmetProvider>
        </div>
    );
};

export default DynamicTitle;