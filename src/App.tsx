import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppRoutes from "./routes/AppRoutes";
import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
