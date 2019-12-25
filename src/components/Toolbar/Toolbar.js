import React from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom'; 

import Auth from '../Auth/Auth';

import './Toolbar.scss';

const Toolbar = () => {
    return (
        <div className="Toolbar">
            <Auth />
            <div className='dropdown'>
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Котегории</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <p class="dropdown-item" href="#"><Link to={'/Ужосы'}>Ужосы</Link></p>
                    <p class="dropdown-item" href="#"><Link to={'/Триллеры'}>Триллеры</Link></p>
                    <p class="dropdown-item" href="#"><Link to={'/Дромы'}>Дромы</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;

// const selectedCountry = match.params.selectedCountry;
