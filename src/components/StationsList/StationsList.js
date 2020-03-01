import React from 'react';

import StatiosListItem from './StationsListItem';

const StationsList = (props) => {
    return (
        <ul aria-label="Liste over Oslo bysykkel stasjoner">
            <StatiosListItem ></StatiosListItem>
            <StatiosListItem ></StatiosListItem>
        </ul>
    );
};

export default StationsList;