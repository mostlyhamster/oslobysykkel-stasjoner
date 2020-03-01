import React from 'react';

import StationListItem from './StationListItem';

const StationsList = (props) => {
    return (
        <ul aria-label="Liste over Oslo bysykkel stasjoner">
            <StationListItem ></StationListItem>
            <StationListItem ></StationListItem>
        </ul>
    );
};

export default StationsList;