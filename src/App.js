import { useEffect, useState } from 'react';
import classes from './App.module.css';
import axios from 'axios';
import PhotoItem from './components/PhotoItem';

function App() {
  const [dataNASA, setDataNASA] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('https://api.nasa.gov/planetary/apod?api_key=Ajvrq2LlgIHkGKscdef5CdwzvO2kNSA3Q5ezWMDD&start_date=2021-12-31');
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
    <>
      <header className={classes.header}>
        <h1>Spacestagram</h1>
        <a href="https://juanvmaya.github.io/personal-portfolio/" target="_blank" rel="noopener noreferrer" className={classes.navLink}>Check Personal Portfolio</a>
      </header>
      <div className={classes.app}>
        {loading && <p>Loading...</p>}
        {!loading && processedPhotosList}
      </div>
      <footer className={classes.footer}>
        <h3 className={classes.footerText}>Brought to you by Nasa's APOD: Astronomy Picture of the Day API</h3>
        <p className={classes.footerText}>Thanks NASA!</p>
      </footer>
    </>
  );
}

export default App;
