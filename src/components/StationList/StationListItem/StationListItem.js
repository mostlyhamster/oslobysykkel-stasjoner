import React from 'react';

import './StationListItem.css';

const StationListItem = (props) => {
    const {info, status} = props;

    const buildAvailableBikes = () => {
        if (status.num_bikes_available === 0) {
            return <span className="station-list__info-text "><span className="station-list__text--red">Ingen</span> ledige sykler.</span>
        } else if (status.num_bikes_available < 4) {
        return <span className="station-list__info-text">Kun <span className=" station-list__text--orange">{status.num_bikes_available} </span>sykler igjen.</span>
        } else {
            return <span className="station-list__info-text "><span className="station-list__text--green">{status.num_bikes_available} </span>ledige sykler.</span>
        }
    }

    const buildAvailableDocks = () => {
        if (status.num_docks_available === 0) {
            return <span className="station-list__info-text "><span className="station-list__text--red">Ingen</span> tilgjengelige låser.</span>
        } else if (status.num_docks_available < 4) {
        return <span className="station-list__info-text">Kun <span className=" station-list__text--orange">{status.num_docks_available} </span>tigjengelige låser igjen.</span>
        } else {
            return <span className="station-list__info-text "><span className="station-list__text--green">{status.num_docks_available} </span>tilgjengelige låser.</span>
        }
    }
    return (
        <li className="station-list__list-item" key={info.station_id}>
            <h3>{info.name} <span><em>{info.address}</em></span></h3>
            <p></p>
            <p>
                {buildAvailableDocks()}
            </p>
            <p>
                {buildAvailableBikes()}
            </p>
        </li>
    );
};
export default StationListItem;