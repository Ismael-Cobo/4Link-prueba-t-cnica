import { Provider } from 'react-redux';
import './App.css';
import { Home } from './pages';
import { store } from './redux';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}

export default App
