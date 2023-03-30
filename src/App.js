
import LatestBlocks from './components/LatestBlocks';
import { Route, Routes } from 'react-router-dom'
import ContextProvider from './contextAPI/ContextProvider'
import BlocksDetails from './components/BlocksDetails/BlocksDetails';
import TransactionList from './components/TransactionList/TransactionList';
import Navbar from './components/Header/Header';
import styles from './App.module.css'

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <div className={styles['custom-container']}>
        <Routes>
          <Route path="/" element={<LatestBlocks />} />
          <Route path="/block/:blockNumber" element={<BlocksDetails />} />
          <Route path="/address/:address" element={<LatestBlocks />} />
          <Route path="/txns/block/:blockNumber" element={<TransactionList />} />
          {/* //should have query params */}
        </Routes>
      </div>
    </ContextProvider>

  );
}

export default App;
