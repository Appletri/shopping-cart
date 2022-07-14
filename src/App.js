import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ScrollToTop from './components/Helper/ScrollToTop';
import { useState } from 'react';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Shop from './components/Shops/Shop';
import Checkout from './components/Checkout/Checkout';

function App() {
  const [items, setItems] = useState([])

  
  const addItems = (e) => {
    e.preventDefault();
    const newItems = [...items];
    const name = document.querySelector('.name');
    const image = document.querySelector('.item-image');
    const size = document.querySelector('.selected');
    const quantity = document.querySelector('.quantity');
    const price = document.querySelector('.price');

    //checks to see if a size and quanity have been selected
    if(e.target.className === 'add') {
      newItems.push({
        name: name.innerHTML,
        size: size.innerHTML,
        quantity: quantity.value,
        price: price.innerHTML,
        image: image.src
      })

    //merges similar items
    for (let i = 0; i < (newItems.length - 1); i++) {
      if (newItems[newItems.length - 1].name === newItems[i].name && 
        newItems[newItems.length - 1].size === newItems[i].size) {
          newItems[i].quantity = 
          `${parseInt(newItems[i].quantity) + parseInt(newItems[newItems.length - 1].quantity)}`
          newItems.pop();    
        }
      }
    }    
    setItems(newItems);   
  }


  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar name="SWUVSA" items={items} />
      </header>
      <div className='content'>
        <ScrollToTop>
          <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Shop/:id' element={<ProductsPage add={addItems}/>} />
            <Route path='/Checkout' element={<Checkout cart={items} />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
            <Route path='/*' element={<home />} />
          </Routes>
        </ScrollToTop>
      </div>
      <Footer />
    </div>    
  </BrowserRouter>
  );
}

export default App;
