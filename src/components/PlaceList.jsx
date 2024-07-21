/* eslint-disable no-unused-vars */
// src/components/PlaceList.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlaces } from '../api/fetchPlace';
import PlaceItem from './PlaceItem';

const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchPlacesData = async () => {
      try {
        const data = await fetchPlaces();
        if (data) {
          setPlaces(data);
          setFilteredPlaces(data); // Initial filter to show all places
        }
      } catch (error) {
        setError(error);
        console.error('Error fetching places:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacesData();
  }, []);

  useEffect(() => {
    const filterPlaces = () => {
      let filtered = places;

      if (selectedType !== 'All') {
        filtered = filtered.filter(place => place.categories.includes(selectedType));
      }

      if (searchTerm) {
        filtered = filtered.filter(place =>
          place.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredPlaces(filtered);
    };

    filterPlaces();
  }, [selectedType, searchTerm, places]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading places.</p>;

  const paginatedPlaces = filteredPlaces.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);

  return (
    <div className="p-4">
 <div className="flex flex-col md:flex-row items-center mb-4">
        <h3 className="text-2xl font-bold mr-4 mb-4 md:mb-0">Place List</h3>
        <div className="flex flex-col md:flex-row gap-4 md:ml-auto w-full md:w-auto">
          <div className="w-full md:w-1/3">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              id="type"
              className="select select-bordered w-full"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="restaurant">Restaurant</option>
              <option value="bakery">Bakery</option>
              <option value="cafe">Cafe</option>
            </select>
          </div>
          <div className="w-full lg:w-96 md:w-2/3">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              id="search"
              type="text"
              className="input input-bordered w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedPlaces.map(place => (
          <PlaceItem key={place.id} place={place} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          className={`btn ${page === 1 ? 'btn-disabled' : 'btn-primary'}`}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          &lt; {/* Arrow Left */}
        </button>
        <span className="text-lg font-medium">{page}</span>
        <button
          className={`btn ${page === totalPages ? 'btn-disabled' : 'btn-primary'}`}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          &gt; {/* Arrow Right */}
        </button>
      </div>
    </div>
  );
};

export default PlaceList;
