import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useMapActions } from "../hooks/useMapActions";

interface IMAP {
  map: google.maps.Map;
  maps: any;
}

export const Map: React.FC = () => {
  const [MAP, setMAP] = useState<IMAP>({} as IMAP);
  const [isExistRoute, setIsExistRoute] = useState(false);
  const { from, to, travelTime } = useTypedSelector((state) => state.map);
  const { setTravelTime, setSelectedOption } = useMapActions();

  const renderWay = () => {
    const { map, maps } = MAP;

    if (typeof maps.DirectionsRenderer === "function") {
      const directionsRenderer: google.maps.DirectionsRenderer =
        new maps.DirectionsRenderer();
      const directionsService: google.maps.DirectionsService =
        new maps.DirectionsService();

      directionsService
        .route({
          origin: from.location,
          destination: to.location,
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((res) => {
          directionsRenderer.setDirections(res);

          // stex karanq tevoxutyun@ vercnenq kam kilometr@, kam urish ban: videoyi mej 1:25 ropen a
          const durationSec = res.routes[0].legs[0].duration?.value;
          const km = res.routes[0].legs[0].distance?.value;

          // console.log(durationSec);
          console.log(km);

          if (durationSec) {
            setTravelTime(Math.ceil(durationSec / 60));
          }
        })
        .catch((err) => alert(err));

      directionsRenderer.setOptions({
        markerOptions: {
          clickable: false,
        },
      });
      directionsRenderer.setMap(map);
    }
  };

  useEffect(() => {
    if (
      from.location?.lat &&
      to.location?.lat &&
      MAP?.map &&
      MAP?.maps &&
      !isExistRoute
    ) {
      renderWay();
    }
  }, [from, to, MAP?.map, MAP?.maps, isExistRoute]);

  return (
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(process.env.REACT_APP_MAPS_KEY) }}
        defaultCenter={{
          lat: 41.054028,
          lng: 44.615734,
        }}
        defaultZoom={13}
        options={
          {
            // fullscreenControl: false,
            // zoomControl: false,
            // keyboardShortcuts: false,
            // clickableIcons: false,
            // scrollwheel: false,
          }
        }
        center={
          from.location?.lat
            ? {
                lat: from.location?.lat,
                lng: from.location?.lng,
              }
            : undefined
        }
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={setMAP}
      />
    </div>
  );
};
