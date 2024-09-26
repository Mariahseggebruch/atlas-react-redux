import { Header } from "./Header";
import { Footer } from "./Footer";
import { Board } from "./Board";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "../store"; // Make sure to import persistor from store

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Header />
          <Board />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
