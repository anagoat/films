import React from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom'; 

import './Toolbar.scss';

const Toolbar = () => {
    return (
        <div className="Toolbar">
            <div className='dropdown'>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Котегории</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <p className="dropdown-item" href="#"><Link to={'/Ужосы'}>Ужосы</Link></p>
                    <p className="dropdown-item" href="#"><Link to={'/Триллеры'}>Триллеры</Link></p>
                    <p className="dropdown-item" href="#"><Link to={'/Дромы'}>Дромы</Link></p>
                </div>
            </div>
            <button type='button' className="btn btn-secondary"> 
                <Link to={'/Auth'}>Sign In</Link>
            </button>
        </div>
    );
};

export default Toolbar;