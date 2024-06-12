import logo from './logo.svg';
import './App.css';

import ProductDetails from './components/products/productDetails'
import Leadmodule from './components/leadmodule/leadmodule';


function App() {
  return (
    <div className="App">
      <h1>products</h1>
      <ProductDetails/>
      <Leadmodule/>
    </div>
  );
}

export default App;
