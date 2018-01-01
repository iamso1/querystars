import Layout from '../components/layout';
import Header from '../components/header';
import Querystar from '../components/querystar/querystar';

export default () => (
  <div>
    <Layout>
      <Header />
      <div>
        <p>Welcome to use this service!</p>
      </div>
      <Querystar />
    </Layout>
  </div>
);
