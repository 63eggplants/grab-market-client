import './App.css';
import MainPageComponent from './main/index';
import ProductPage from './product/index';
import UploadPage from './upload/index';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={'/'}>
          <MainPageComponent />
        </Route>
        <Route exact={true} path={'/products/:id'}>
          <ProductPage />
        </Route>
        <Route exact={true} path={'/upload'}>
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
