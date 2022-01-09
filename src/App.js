import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PhotoItem from './components/PhotoItem';

function App() {
  const [dataNASA, setDataNASA] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('https://api.nasa.gov/planetary/apod?api_key=Ajvrq2LlgIHkGKscdef5CdwzvO2kNSA3Q5ezWMDD&start_date=2022-01-05');
        setDataNASA(response);
        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const processedPhotosList = dataNASA.map(item => (
    <PhotoItem 
    title={item.title}
    url={item.url}
    explanation={item.explanation}
    date={item.date}
    copyright={item.copyright}
    />
  ));

  return (
    <div>
      <div className="App">
        {loading && <p>Loading...</p>}
        {!loading && processedPhotosList}
      </div>
    </div >
  );
}

export default App;
