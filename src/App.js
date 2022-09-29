import './App.css';
import Activities from './components/Activities/Activities';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';


function App() {

  return (
    <div className="App">

      <Header></Header>
      <Activities></Activities>
      <Blog></Blog>
    </div>

  );
}

export default App;
