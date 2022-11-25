import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

function App() {
  const allProducts = [
    {
        name: "Logitech Speakers",
        price: 49.99,
        description: "These logitech speakers are a great entry level speaker that accepts a bluetooth and wired connection to your computer."
    },
    {
        name: "SteelSeries Speakers",
        price: 109.99,
        description: "These high end steelseries speakers are top of the line speakers with true sound effect technology."
    },
    {
        name: "Cup & String",
        price: 2.99,
        description: "These speakers are bottom of barrel quality and will not get you good sound quality, go and purchase a real set of speakers please."
    },
];

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen allProducts={allProducts}/>}/>
        <Route path="/details/:index" element={<DetailScreen allProducts={allProducts}/>}/>
        <Route path="/cart" element={<h1>Cart</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
