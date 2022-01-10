import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

    state = {
        count: 0
    }

    styles = {
        fontSize: '50px',
        fontWeight: 'bold'
    }

    render() {
        return (
            <React.Fragment>
                <span style={this.styles} className="bg-black p-3 text-white m-2 rounded-md">{this.formatCount()}</span>
                <span>{this.formatCount()}</span>
                <div className="mt-2 sm:mt-2 sm:flex sm:justify-start lg:justify-start">
                    <div className="rounded-md shadow">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Increment
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                            Live demo
                        </a>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

}

export default Counter;
