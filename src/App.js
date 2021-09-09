import 'antd/dist/antd.css';
import './App.css';
import MainPageComponent from './main/index';
import ProductPage from './product/index';
import UploadPage from './upload/index';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function App() {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="logo" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push('/upload');
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
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
      <div id="footer"></div>
    </div>
  );
}

export default App;
