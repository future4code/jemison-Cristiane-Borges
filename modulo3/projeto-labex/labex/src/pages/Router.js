import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdmHomePage from "./AdminHomePage";
import AplicationFormPage from "./ApplicationFormPage";
import CreatTripPage from "./CreateTripPage";
import HomePage from "./HomePage";
import ListtripsPage from "./ListTripsPage";
import TripDetailsPage from "./TripDetailsPage";

function Router() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/adm" element={<AdmHomePage />} />
          <Route path="/inscricao" element={<AplicationFormPage />} />
          <Route path="/trip" element={<CreatTripPage />} />
          <Route path="/tripPage" element={<ListtripsPage />} />
          <Route path="/details" element={<TripDetailsPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default Router;