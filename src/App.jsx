// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PlaceList from './components/PlaceList';
import PlaceDetail from './components/PlaceDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PlaceList />} />
          <Route path="/place/:id" element={<PlaceDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
