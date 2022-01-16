import { useEffect, useState } from 'react';
import classes from './App.module.css';
import axios from 'axios';
import PhotoItem from './components/PhotoItem';
import LoadingDisplay from './components/LoadingDisplay';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL= `https://api.nasa.gov/planetary/apod?api_key=${ API_KEY }&start_date=2021-10-01`; // Kept API key from the source code even though it is a public API.

function App() {
  const [dataNASA, setDataNASA] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(API_URL);
        setDataNASA(response);
      } catch (error) {
        window.alert(`Error fetching data from NASA API \n The error is: ${error.message} \n Please try refresing the page.`);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const changeLikeStatus = (date, likeStatus) => {
    const newData = dataNASA.map(item => {
      if (item.date === date) {
        item.likeStatus = !likeStatus;
      }
      return item;
    });
    setDataNASA(newData);
  }

  const processedPhotosList = dataNASA.map(item => (
    <PhotoItem
      key={item.date}
      title={item.title}
      url={item.url}
      explanation={item.explanation}
      date={item.date}
      copyright={item.copyright}
      likeStatus={typeof (item.likeStatus) === "undefined" ? false : item.likeStatus}
      changeLikeStatus={changeLikeStatus}
    />
  ));

  return (
    <>
      <header className={classes.header}>
        <h1 onClick={() => window.location.reload(false)} className={classes.title}>Spacestagram</h1>
        <a href="https://juanvmaya.github.io/personal-portfolio/" target="_blank" rel="noopener noreferrer" className={classes.navLink}>Check Personal Portfolio</a>
      </header>
      <div className={classes.main}>
        {loading && <LoadingDisplay />}
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
