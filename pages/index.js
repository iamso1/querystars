import Layout from '../components/layout';
import Header from '../components/header';

export default () => (
  <div>
    <Layout>
      <Header />
      <div>
        <main>
          <h1>Home</h1>
          <p>This ocr tool would help you to solve captcha</p>

          <article>
            <h2>Red Delicious</h2>
            <p>
              These bright red apples are the most common found in many
              supermarkets.
            </p>
            <p>... </p>
            <p>... </p>
          </article>
        </main>
      </div>
    </Layout>
  </div>
);
