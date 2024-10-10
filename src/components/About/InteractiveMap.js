import React, { useEffect } from 'react';
import '@arcgis/core/assets/esri/themes/light/main.css';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import PopupTemplate from '@arcgis/core/PopupTemplate';

const InteractiveMap = () => {
  useEffect(() => {
    // Initialize the map
    const map = new Map({
      basemap: 'satellite',
    });

    const view = new MapView({
      container: 'map',
      map,
      center: [-3.7038, 40.4168], // Madrid
      zoom: 5,
    });

    // City data
    const cities = {
      Salamanca: {
        coords: [-5.6635, 40.9704],
        info: 'Salamanca is known for its ornate sandstone architecture and the historic University of Salamanca.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/68436-Salamanca_%2849093713952%29_edited.jpg/1280px-68436-Salamanca_%2849093713952%29_edited.jpg',
      },
      Granada: {
        coords: [-3.5986, 37.1773],
        info: 'Granada is famous for its Alhambra, a sprawling hilltop fortress complex.',
        image: 'path/to/granada.jpg',
      },
      Madrid: {
        coords: [-3.7038, 40.4168],
        info: "Madrid is Spain's central capital, known for its royal palace and Prado museum.",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Palaciorealycatedraldelaalmudena_retouched.jpg/1280px-Palaciorealycatedraldelaalmudena_retouched.jpg',
      },
      Wellington: {
        coords: [174.7762, -41.2865],
        info: 'Wellington is the capital of New Zealand, known for its windy weather and vibrant culture.',
        image: 'path/to/wellington.jpg',
      },
      Medellin: {
        coords: [-75.5812, 6.2442],
        info: "Medellín is known as the 'City of Eternal Spring' due to its pleasant weather.",
        image: 'https://scontent.fwlg4-1.fna.fbcdn.net/v/t31.18172-8/812810_482416441816845_1179692687_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=YwLmlr1B2DQQ7kNvgGePEZS&_nc_ht=scontent.fwlg4-1.fna&oh=00_AYDEJECcNmpsZnbDRxyHjh5m4Hs6Vvu4AtA90mugFQDFoQ&oe=66EFEA06',
      },
      LosAngeles: {
        coords: [-118.2437, 34.0522],
        info: 'Los Angeles is known for its Mediterranean climate, ethnic diversity, and the entertainment industry.',
        image: 'path/to/losangeles.jpg',
      },
      Pheonix: {
        coords: [-116.2437, 34.0522],
        info: 'Los Angeles is known for its Mediterranean climate, ethnic diversity, and the entertainment industry.',
        image: 'path/to/losangeles.jpg',
      },
    };

    const zoomToCity = (cityName) => {
      const city = cities[cityName];

      // Step 1: Zoom out
      view.goTo({ zoom: 6 })
        .then(() => view.goTo({
          center: new Point({
            longitude: city.coords[0],
            latitude: city.coords[1],
          }),
        }))
        .then(() => view.goTo({ zoom: 12 }))
        .then(() => {
          // Step 4: Add the city graphic and open the popup
          const cityGraphic = new Graphic({
            geometry: new Point({
              longitude: city.coords[0],
              latitude: city.coords[1],
            }),
            symbol: new SimpleMarkerSymbol({
              style: 'circle',
              color: 'blue',
              size: '12px',
            }),
            popupTemplate: new PopupTemplate({
              title: cityName,
              content: `<div class="city-info">
                          <h5>${cityName}</h5>
                          <p>${city.info}</p>
                          <img src="${city.image}" alt="${cityName}" style="width:100%;height:auto;">
                        </div>`,
            }),
          });

          view.graphics.removeAll();
          view.graphics.add(cityGraphic);
          view.openPopup({
            features: [cityGraphic],
            location: cityGraphic.geometry,
          });
        })
        .catch((error) => {
          console.error('An error occurred during zooming:', error);
        });
    };

    // Expose zoomToCity to the global scope for button usage
    window.zoomToCity = zoomToCity;

    // Default to Madrid on page load
    zoomToCity('Madrid');

    // Cleanup function
    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div className="interactive-map-container">
      <div className="sidebar">
        <h2 className="sidebar-title">City Information</h2>
        <div id="info" className="info-section" />
        <button type="button" className="map-button" onClick={() => window.zoomToCity('Salamanca')}>Salamanca</button>
        <button type="button" className="map-button" onClick={() => window.zoomToCity('Granada')}>Granada</button>
        <button type="button" className="map-button" onClick={() => window.zoomToCity('Madrid')}>Madrid</button>
        <button type="button" className="map-button" onClick={() => window.zoomToCity('Wellington')}>Wellington</button>
        <button type="button" className="map-button" onClick={() => window.zoomToCity('Medellin')}>Medellín</button>
        <button type="button" className="map-button" onClick={() => window.zoomToCity('LosAngeles')}>Los Angeles</button>
        <button type="button" className="map-button" onClick={() => window.zoomToCity('Pheonix')}>Pheonix</button>
      </div>
      <div id="map" className="map-container" style={{ height: '100vh', width: '100%' }} />
    </div>
  );
};

export default InteractiveMap;
