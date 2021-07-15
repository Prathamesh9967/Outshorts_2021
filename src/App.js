import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import NavInshort from './components/NavInshort';
import Newscontent from './components/NewsContent/Newscontent';
// import apikey from './data/config'

function App() {

  const [Category, setCategory] = useState("General");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadmore, setloadmore] = useState(20);

  const newsapi = async () => {
    try{
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${Category}&pageSize=${loadmore}`
        );
      setnewsArray(news.data.articles);
      setnewsResults(news.data.totalResults)
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
   newsapi();
   // eslint-disable-next-line
  }, [newsResults , Category , loadmore]);

  return (
    <div className="App">
     <NavInshort setCategory = { setCategory } />

     <Newscontent setloadmore={setloadmore} loadmore={loadmore} newsArray={newsArray} newsResults={newsResults} />

     <Footer />
    </div>
  );
}

export default App;
