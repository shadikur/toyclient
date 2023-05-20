import React from 'react';
import { Helmet } from 'react-helmet';

const DynamicTitle = ({ subtitle }) => {
    const title = import.meta.env.VITE_SITE_TITLE;
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {title} | {subtitle}
                </title>
                <meta name="description" content={subtitle} />
            </Helmet>
        </div>
    );
};

export default DynamicTitle;