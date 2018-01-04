import Layout from '../src/components/layout';
import Header from '../src/components/header';

export default () => (
  <div>
    <Layout>
      <Header />
      <main>
        <h1>About Me</h1>
        <p>This tool would help you to solve captcha</p>
        <article>
          <h2>Red Delicious</h2>
          <p>
            These bright red apples are the most common found in many
            supermarkets.
          </p>
        </article>
      </main>
    </Layout>
  </div>
);
