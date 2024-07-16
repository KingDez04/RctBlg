import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

const App = () => {

  return(
    <Router>
        <div className='App'>
          <NavBar />
          <div className='content'>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/blogs/:id" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;