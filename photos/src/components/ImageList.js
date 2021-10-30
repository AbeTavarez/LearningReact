import React from "react";
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = ({ images }) => {
  const imagesArr = images.map( image => (
    <ImageCard key={image.id} image={image}/>
  ));

  return <div className="image-list">
      {imagesArr}
  </div>
};

export default ImageList;
