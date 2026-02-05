import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Docs } from './pages/Docs';

export default function App() {
  return (
    <Routes>
      <Route
        path="/docs"
        element={
          <Layout>
            <Docs />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
}
