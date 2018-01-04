import Layout from '../src/components/layout';
import Header from '../src/components/header';
import Querystar from '../src/components/querystar/querystar';

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
