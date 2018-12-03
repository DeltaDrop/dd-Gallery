import React from 'react';
import ReactDom from 'react-dom';
import Gallery from './components/Gallery.jsx';
import ProductGallery from './components/ProductGallery.jsx';

/* A simple container for the Gallery and/or Product Gallery */
/* Not really necessary, if you're wondering */
const GalleryContainer = () => {
  return (
    <div>
      <ProductGallery />
    </div>
  );
};

ReactDom.render(<GalleryContainer />, document.getElementById('gallery'));
