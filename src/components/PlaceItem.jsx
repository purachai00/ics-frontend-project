/* eslint-disable react/prop-types */
// src/components/PlaceItem.jsx
import { Link } from 'react-router-dom';

const PlaceItem = ({ place }) => {
  return (
    <Link to={`/place/${place.id}`}>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={place.profile_image_url} alt={place.name} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{place.name}</h2>
          <p>{place.address}</p>
          <p className="text-gray-600">Rating: {place.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlaceItem;
