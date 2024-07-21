import axios from 'axios';

const JSON_URL = '/json/example_data.json';

export const fetchPlaces = async (useJson = true) => {
  if (useJson) {
    try {
      const response = await axios.get(JSON_URL);
      // console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  } else {
    return "No Data";
  }
};
