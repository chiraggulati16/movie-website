import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import AppContainer from './navigation/navigation';

function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
      </Provider>
  );
}

export default App;
