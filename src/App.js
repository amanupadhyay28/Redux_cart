import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import store   from './store/store';
function App() {
  return (
   <div>
   <Provider store={store}>
      <Router>
    <Navbar/>
        <Routes>
          <Route path ='/' element={<Home/>}></Route>
          <Route path ='/cart' element={<Cart/>}></Route>
          
          
        </Routes>
      </Router>
      </Provider>
   </div>
    
  )
}

export default App;
