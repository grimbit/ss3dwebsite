import React, { useEffect } from 'react';
import { PageLoader } from '../App.styles';
import { GalleryImage } from './Gallery.styles';

let gallerylist: any = [];

function Gallery() {
  const importAll = (r: any) => {
    return r.keys().map(r);
  };
  const fetchImages = () => {
    gallerylist = importAll(
      require.context('./images/', false, /\.(png|jpe?g|svg)$/)
    );
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <PageLoader>
      {gallerylist.map((image: any, index: any) => (
        <GalleryImage key={index} src={image}></GalleryImage>
      ))}
    </PageLoader>
  );
}

export default Gallery;
