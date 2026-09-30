import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Landing           from '../pages/Landing';
import Login             from '../pages/Login';
import Register          from '../pages/Register';
import Dashboard         from '../pages/Dashboard';
import Profile           from '../pages/Profile';
import EditProfile       from '../pages/EditProfile';
import CreateTrip        from '../pages/CreateTrip';
import BrowseTrips       from '../pages/BrowseTrips';
import TripDetails       from '../pages/TripDetails';
import CompanionMatching from '../pages/CompanionMatching';
import AITravelTwin      from '../pages/AITravelTwin';
import Discovery         from '../pages/Discovery';
import Chat              from '../pages/Chat';
import Expenses          from '../pages/Expenses';
import Notifications     from '../pages/Notifications';
import SavedPlaces       from '../pages/SavedPlaces';
import Reviews           from '../pages/Reviews';
import Settings          from '../pages/Settings';
import NotFound          from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/"        element={<Landing />} />
    <Route path="/login"   element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard"          element={<Dashboard />} />
      <Route path="/profile"            element={<Profile />} />
      <Route path="/profile/edit"       element={<EditProfile />} />
      <Route path="/create-trip"        element={<CreateTrip />} />
      <Route path="/browse-trips"       element={<BrowseTrips />} />
      <Route path="/trips/:id"          element={<TripDetails />} />
      <Route path="/companion-matching" element={<CompanionMatching />} />
      <Route path="/ai-travel-twin"     element={<AITravelTwin />} />
      <Route path="/discovery"          element={<Discovery />} />
      <Route path="/chat"               element={<Chat />} />
      <Route path="/expenses"           element={<Expenses />} />
      <Route path="/notifications"      element={<Notifications />} />
      <Route path="/saved-places"       element={<SavedPlaces />} />
      <Route path="/reviews"            element={<Reviews />} />
      <Route path="/settings"           element={<Settings />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export default AppRoutes;
