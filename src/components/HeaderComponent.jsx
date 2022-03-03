import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {}

    }
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div>
                        <a className='navbar-brand'>Sakila DB</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li>
                            <a href='Actors'>Actor List   </a>
                        </li>
                        <li>
                            <a href='Languages'>Language List</a>
                        </li>
                    </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;