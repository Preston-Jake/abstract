import React from "react";
import "./UnsplashImage.css";
export default function UnsplashImage(url, key) {
  return <img src={url.url} key={key.key} alt="" />;
}
