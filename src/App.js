
import LatestBlocks from './components/LatestBlocks';
import { Route, Routes } from 'react-router-dom'
import ContextProvider from './contextAPI/ContextProvider'
import BlocksDetails from './components/BlocksDetails/BlocksDetails';
import TransactionList from './components/TransactionList/TransactionList';


function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<LatestBlocks />} />
        <Route path="/block/:blockNumber" element={<BlocksDetails />} />
        <Route path="/address/:address" element={<LatestBlocks />} />
        <Route path="/txns/block/:blockNumber" element={<TransactionList />} />
        {/* //should have query params */}
      </Routes>
    </ContextProvider>

  );
}

export default App;
