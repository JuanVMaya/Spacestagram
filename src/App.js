import { useEffect, useState } from "react";
import classes from "./App.module.css";
import axios from "axios";
import PhotoItem from "./components/PhotoItem";
import LoadingDisplay from "./components/LoadingDisplay";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2022-07-20`; // Kept API key from the source code even though it is a public API.

function App() {
  const [dataNASA, setDataNASA] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(API_URL);
        const localStorageLikes = JSON.parse(localStorage.getItem("nasaLikes"));
        response.map((photo) => {
          if (photo.date in localStorageLikes) {
            return (photo.likeStatus = localStorageLikes[photo.date]);
          }
          return (photo.likeStatus = false);
        });
        setDataNASA(response);
      } catch (error) {
        window.alert(
          `Error fetching data from NASA API \n The error is: ${error.message} \n Please try refresing the page.`
        );
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const changeLikeStatus = (date, likeStatus) => {
    const newData = dataNASA.map((item) => {
      if (item.date === date) {
        item.likeStatus = !likeStatus;
        const localStorageLikes = JSON.parse(localStorage.getItem("nasaLikes"));
        localStorage.setItem(
          "nasaLikes",
          JSON.stringify({ ...localStorageLikes, [date]: item.likeStatus })
        );
      }
      return item;
    });
    setDataNASA(newData);
  };

  const processedPhotosList = dataNASA.map((item) => (
    <PhotoItem
      key={item.date} //The date is unique as there is only one picture per day
      title={item.title}
      url={item.url}
      explanation={item.explanation}
      date={item.date}
      copyright={item.copyright}
      likeStatus={item.likeStatus}
      changeLikeStatus={changeLikeStatus}
    />
  ));

  return (
    <>
      <header className={classes.header}>
        <h1
          onClick={() => window.location.reload(false)}
          className={classes.title}
        >
          Spacestagram
        </h1>
        <a
          href="https://juanvmaya.github.io/personal-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navLink}
        >
          Check Personal Portfolio
        </a>
      </header>
      <div className={classes.main}>
        {loading && <LoadingDisplay />}
        {!loading && processedPhotosList}
      </div>
      <footer className={classes.footer}>
        <h3 className={classes.footerText}>
          Brought to you by Nasa's APOD: Astronomy Picture of the Day API
        </h3>
        <p className={classes.footerText}>Thanks NASA!</p>
        <a
          href="https://github.com/JuanVMaya/spacestagram#spacestagram-image-sharing-from-the-final-frontier"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.footerText}
        >
          Check Github Repo
        </a>
      </footer>
    </>
  );
}

export default App;
