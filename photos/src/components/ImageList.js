import React from "react";

const ImageList = ({ images }) => {
  const imagesArr = images.map( image => (
    <img key={image.id} src={image.urls.small} alt={image.description}/>
  ));

  return <div>
      {imagesArr}
  </div>
};

export default ImageList;
