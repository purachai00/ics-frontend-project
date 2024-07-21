/* eslint-disable react/prop-types */
// src/components/PlaceItem.jsx
import { CalendarDaysIcon, StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const PlaceItem = ({ place }) => {
  return (
    <Link to={`/place/${place.id}`}>
      <div className="card bg-base-100 shadow-xl max-w-xs mx-auto">
        <div className="card-body p-4 flex flex-col rounded-lg">
          <div className="flex flex-row">
            <div className="flex-shrink-0 mr-4">
              <img
                src={place.profile_image_url}
                alt={place.name}
                className="h-14 w-16 rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-bold mb-2">{place.name}</h2>
              <div className="flex justify-between items-center">
                <p className="text-xs flex items-center">
                  <CalendarDaysIcon className="w-4 h-4 mr-1" />
                  {place.operation_time.length > 0
                    ? `${place.operation_time[0].time_open} AM - ${place.operation_time[0].time_close} PM`
                    : "No data"}
                </p>
                <p className="text-blue-900 text-xs flex items-center">
                  <StarIcon className="w-4 h-4 mr-1" />
                  {place.rating}
                </p>
              </div>
            </div>
          </div>
          {place.images && place.images.length > 0 && (
            <div className="mt-2 overflow-hidden rounded-lg shadow-lg">
              <div className="grid grid-cols-3">
                {place.images.slice(0, 3).map((image, index) => (
                  <div key={index} className="w-full h-auto">
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PlaceItem;
