import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DrawRoof from "./DrawRoof";
import CustomMap from "./CustomMap";

import { useLoadScript } from "@react-google-maps/api";

function App() {
  const { isLoaded } = useLoadScript({
    id: "script-loader",
    version: "weekly",
    googleMapsApiKey: "",
    libraries: ["places", "drawing"]
  });

  return (
    <div className="App">{isLoaded && <div>{<DrawRoof></DrawRoof>}</div>}</div>
  );
}

export default App;
