import React, { useEffect, useState } from 'react';

interface Location {
  latitude: number | null;
  longitude: number | null;
}

function getUserLocation(
  setLocation: React.Dispatch<React.SetStateAction<Location>>,
): void {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Handle position data here
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error(`Geolocation error: ${error.message}\n`);
      },
      {
        // Options object for enabling high accuracy
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    );
  } else {
    // Fallback coordinates if geolocation is not supported
    setLocation({ latitude: 213.920133921, longitude: 213.920133921 });
  }
}

const GeolocationComponent: React.FC = () => {
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });

  useEffect(() => {
    getUserLocation(setLocation);
  }, []);

  return (
    <div>
      {location.latitude !== null && location.longitude !== null ? (
        <p>
          You are not safe. We know where you are located: Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (<p>
          You are not safe. We know where you are located: Latitude: 38.897957, Longitude: -77.036560
        </p>)}
    </div>
  );
};

export default GeolocationComponent;