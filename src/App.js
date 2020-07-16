import React, { Suspense } from "react";

import Home from "./Components/Home/Home";
import "./Components/Translate/i18n";

function App() {
  return (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  );
}

export default App;
