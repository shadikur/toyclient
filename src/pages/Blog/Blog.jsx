import React from 'react';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';

const Blog = () => {
    return (
        <div>
            <DynamicTitle
                subtitle={`Blog - The aricles you love`}>
            </DynamicTitle>
            <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Questions &amp; Answers
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
                            Answer to the questions of Assignment 11
                        </p>
                    </div>
                    <div className="divider bg-white"></div>
                    <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-white">
                                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                </p>
                                <p className="mt-4 text-base text-gray-400">
                                    An access token is a short-lived credential that grants a user access to protected resources or APIs, while a refresh token is a long-lived token used to obtain a new access token when the current one expires. Access tokens are typically stored securely on the client-side, such as in memory or secure cookies, while refresh tokens should be stored in a more secure manner, such as in an HTTP-only secure cookie or local storage with proper security measures.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-white">
                                    Compare SQL and NoSQL databases?
                                </p>
                                <p className="mt-4 text-base text-gray-400">
                                    SQL databases are based on a structured model with predefined schemas, enforce data integrity, and use SQL for querying. NoSQL databases are non-relational, have flexible schemas, and use various data models. SQL databases are suitable for complex relationships and ACID compliance, while NoSQL databases excel in scalability and handling unstructured data. The choice depends on specific application requirements.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-white">
                                    What is express js? What is Nest JS (google it)?
                                </p>
                                <p className="mt-4 text-base text-gray-400">
                                    Express.js is a minimalistic and flexible web application framework for Node.js. It provides a set of features and tools to build web applications and APIs easily. It focuses on simplicity, allowing developers to create server-side applications quickly.
                                    NestJS is a progressive, TypeScript-based web application framework built on top of Node.js and Express.js. It follows the modular and scalable architectural patterns of Angular, making it suitable for building robust and scalable server-side applications. NestJS leverages decorators, dependency injection, and other features to simplify development and improve code organization.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-white">
                                    What is MongoDB aggregate and how does it work?
                                </p>
                                <p className="mt-4 text-base text-gray-400">
                                    MongoDBs aggregation framework is a powerful tool for performing complex data analysis and manipulation operations on the data stored in MongoDB. It allows you to perform tasks such as filtering, grouping, sorting, transforming, and combining data in a flexible and efficient manner.

                                    The aggregation pipeline is the core component of MongoDBs aggregation framework. It consists of a sequence of stages, where each stage applies a specific operation to the input documents and passes the result to the next stage. The stages can be used to perform various operations like matching, projecting, grouping, sorting, and more, allowing you to perform advanced data manipulations and computations on your MongoDB data.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Blog;