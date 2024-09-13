import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

// Import marker icon to fix default icon issue in Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set default icon for markers
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41], // Adjust the anchor so the icon is centered properly
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Search Component
const SearchControl = () => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchInput = L.DomUtil.create('input', 'search-input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search for location...';
    searchInput.className = 'px-4 py-2 w-64 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500';

    const searchButton = L.DomUtil.create('button', 'search-button');
    searchButton.innerHTML = 'Search';
    searchButton.className = 'px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none';

    const searchContainer = L.DomUtil.create('div', 'search-container');
    L.DomUtil.addClass(searchContainer, 'flex absolute top-4 left-4 z-100');

    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    L.DomUtil.addClass(searchContainer, 'leaflet-bar leaflet-control leaflet-control-custom');
    map.getContainer().appendChild(searchContainer);

    // Search functionality
    searchButton.addEventListener('click', async () => {
      const query = searchInput.value;
      if (query.trim()) {
        const results = await provider.search({ query });
        if (results.length > 0) {
          const { x, y, label } = results[0];
          map.setView([y, x], 14);
          L.marker([y, x], { icon: DefaultIcon }).addTo(map).bindPopup(label).openPopup();
        }
      }
    });
  }, [map]);

  return null;
};

const Location = () => {
  const locations = [
    { name: 'Emaar Dubai', position: [25.2048, 55.2708] },
    { name: 'Danube Diamonds', position: [25.0454, 55.2493] },
    { name: 'Sobha', position: [25.1531, 55.2515] },
  ];

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 p-6">
      <div className="w-full h-full bg-white shadow-lg rounded-lg overflow-hidden relative">
        <MapContainer center={[25.2048, 55.2708]} zoom={12} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Render the custom search control */}
          <SearchControl />

          {locations.map((location, index) => (
            <Marker key={index} position={location.position}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Location;
