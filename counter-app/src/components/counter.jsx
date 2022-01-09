import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <div className="mt-2 sm:mt-2 sm:flex sm:justify-start lg:justify-start">
                    <div className="rounded-md shadow">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Get started
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                            Live demo
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
