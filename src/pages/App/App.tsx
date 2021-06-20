import Header from './components/Header';
import Speakers from '../Speakers/Speakers';
import './App.css';
import Layout from './components/Layout';

function App() {

  return (
    <Layout startingTheme="light">
      <div>
        <Header />
        <Speakers />
      </div>
    </Layout>
  );
}

export default App;
