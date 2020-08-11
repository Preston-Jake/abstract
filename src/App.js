import React, { useEffect, useState } from "react";
import "./App.css";
import UnsplashImage from "./UnsplashImage";
function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    fetch(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then((res) => res.json())
      .then((data) => setImages([...images, ...data]));
  }, []);
  
  return (
    <div className="App">
      <header>
        <h1>Unsplash Infinite</h1>
      </header>
        {images.map(image => {
          return <UnsplashImage key={image.id} url={image.urls.regular}/>
        })}
    </div>
  );
}

export default App;
