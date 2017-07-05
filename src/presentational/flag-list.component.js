import React from 'react';
import { Link } from 'react-router';
import CountryFlag from '../presentational/flag.component';
import '../country.css';
import DevTools from '../DevTools';

const CountryFlagList = (props) => (
    <div className="countries-list">
        {props.countries.map(country => {
            return (
                <div className="single-country" key={country.id}>
                    <Link className='logo' to={'countries/country/' + country.id}>
                        <CountryFlag country={country} />
                    </Link>
                    <button onClick={props.deleteCountry.bind(null, country.id)}>DELETE</button>
                    <DevTools />
                </div>

            )
        })}
    </div>
);

export default CountryFlagList;
