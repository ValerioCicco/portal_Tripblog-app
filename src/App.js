import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import TripsPreview from "./components/Trips/TripsPreview";
import Trip from "./components/Trips/Trip";
import NewTrip from "./components/TripForm/NewTrip";
import EditTrip from "./components/TripForm/EditTrip";
import NewUser from "./components/UserForm/NewUser";
import EditUser from "./components/UserForm/EditUser";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/trips" element={<TripsPreview />} />
          <Route path="/trips/:id" element={<Trip />} />
          <Route path="/trips/new" element={<NewTrip />} /> 
          <Route path="/trips/edit/:id" element={<EditTrip />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/new" element={<NewUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
