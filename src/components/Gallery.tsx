import React from 'react';
import { PageLoader } from '../App.styles';
import { GalleryImage } from './Gallery.styles';


function Gallery() {
  const templates = require.context('./images/', true, /\.(png|jpe?g)$/);

    const renderItems = () => {
        return  templates.keys().map((elem, i) => (
            // @todo insert alt here
            <GalleryImage key={elem} src={templates(elem).default} alt="" />
        ))
    };

  return (
    <PageLoader>
      hi this gallery page
      {renderItems()}
    </PageLoader>
  );
}

export default Gallery;
