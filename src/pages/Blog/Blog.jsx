import React from 'react';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';

const Blog = () => {
    return (
        <div>
            <DynamicTitle
                subtitle={`Blog - The aricles you love`}>
            </DynamicTitle>
        </div>
    );
};

export default Blog;