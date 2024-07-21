import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPlaces } from "../api/fetchPlace";
import { StarIcon } from "@heroicons/react/24/solid";

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const places = await fetchPlaces();
        if (places) {
          const foundPlace = places.find((place) => place.id.toString() === id);
          setPlace(foundPlace || null);
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching place details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlace();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error loading place details.</p>
    );
  if (!place)
    return <p className="text-center text-gray-500">Place not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{place.name}</h1>
      <div className="mb-4">
        <img
          src={place.profile_image_url}
          alt={place.name}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      {place.images && place.images.length > 0 && (
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {place.images.map((image, index) => (
            <div key={index} className="w-full h-auto">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      )}
      <div className="mb-4">
        <p className="text-lg font-semibold">Address:</p>
        <p className="text-gray-700">{place.address}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Rating:</p>
        <p className="text-yellow-500 flex flex-row items-center">{<StarIcon className="w-4 h-4 mr-1" />}{place.rating}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          Operation Hours:
        </h2>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border-b border-gray-300 px-4 py-2 text-left rounded-tl-lg">
                  Day
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  Open
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left rounded-tr-lg">
                  Close
                </th>
              </tr>
            </thead>
            <tbody>
              {place.operation_time.map((time, index) => (
                <tr
                  key={index}
                  className={`even:bg-gray-100 ${
                    index === place.operation_time.length - 1
                      ? "rounded-b-lg"
                      : ""
                  }`}
                >
                  <td className="border-t border-gray-300 px-4 py-2">
                    {time.day}
                  </td>
                  <td className="border-t border-gray-300 px-4 py-2">
                    {time.time_open}
                  </td>
                  <td className="border-t border-gray-300 px-4 py-2">
                    {time.time_close}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
