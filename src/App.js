import { Header, Product, Chart, Table } from './components';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header/>
      <div className='product-container'>
        <Product/>
        <Chart/>
        <Table/>
      </div>
    </div>
  );
}

export default App;
