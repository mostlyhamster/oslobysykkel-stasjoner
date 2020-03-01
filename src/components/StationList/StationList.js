import React from 'react';

import './StationList.css';

import StationListItem from './StationListItem';

import { useDataApi } from '../../hooks/useDataApi';

const StationsList = (props) => {
    /*React.useEffect(() => {
        fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json")
        .then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            console.log(data)
        })
    },[])*/
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