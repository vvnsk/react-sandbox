import Header from './components/Header';
import Speakers from '../Speakers/Speakers';
import './App.css';
import Layout from './components/Layout';
import { AuthProvider } from '../../common/contexts/AuthContext';

function App() {

  return (
    <AuthProvider initialLoggedInUser="Ronald">
      <Layout startingTheme="light">
        <div>
          <Header />
          <Speakers />
        </div>
      </Layout>
    </AuthProvider>
  );
}

export default App;
