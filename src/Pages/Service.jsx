import React from 'react';
import { Myservices } from '../common/Helper';

function Service() {
    return (
        <section className="p-6 md:p-12 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl h-full">
            {/* Header */}
            <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
                    My Services
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                    Here are some of the core services I offer — from frontend design to backend development and security.
                </p>
            </div>

            {/* Service Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Myservices.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>

                        {/* Tools/Tags */}
                        {service.tools && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {service.tools.map((tool, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition-all">
                    Contact Me for Custom Services
                </button>
            </div>
        </section>
    );
}

export default Service;
