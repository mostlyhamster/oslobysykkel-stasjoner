import React from 'react';

import './StationList.css';

import StationListItem from './StationListItem';

import { useDataApi } from '../../hooks/useDataApi';

const StationsList = (props) => {

    const [stationInformation] = useDataApi(
        'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json',
        { stations: [] },
      );

    const [stationStatuses] = useDataApi(
        'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json',
        { stations: [] },
    );

    const findStationStatusByStationId = (stationId) => {
        return stationStatuses.data.stations.find(station => station.station_id === stationId)
    }

    stationInformation.data.stations.sort((a, b) => a.name > b.name)
      
    return (
        <>
        {(stationInformation.isError || stationStatuses.isError) && <div>Noe gikk galt ved henting av informasion om statsjoner</div>}

        {(stationInformation.isLoading || stationStatuses.isLoading) ? (
          <div>Laster informasjon om stasjoner...</div>
        ) : (
          <ul className="station-list__list">
            {stationInformation.data.stations.map(item => (
                <StationListItem 
                    key={item.station_id}
                    info={item} 
                    status={findStationStatusByStationId(item.station_id)} />
            ))}
          </ul>
        )}
        </>
    );
};

export default StationsList;