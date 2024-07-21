import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlaces } from '../api/fetchPlace';

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
          const foundPlace = places.find(place => place.id.toString() === id);
          setPlace(foundPlace || null);
        }
      } catch (error) {
        setError(error);
        console.error('Error fetching place details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlace();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading place details.</p>;
  if (!place) return <p className="text-center text-gray-500">Place not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
      <div className="mb-6">
        <img 
          src={place.images.length > 0 ? place.images[0] : '/default_image.jpg'} 
          alt={place.name} 
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Address:</p>
        <p className="text-gray-700">{place.address}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Rating:</p>
        <p className="text-yellow-500">{place.rating}</p>
      </div>
      <div>
        <p className="text-lg font-semibold">Description:</p>
        <p className="text-gray-700">{place.description || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default PlaceDetail;
