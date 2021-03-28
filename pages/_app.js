import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* The reason you can wrap the layout in here, is because inside layout.js we pass {props.children} , 
      allowing to use components wraped up*/}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
