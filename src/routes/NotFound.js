import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Random from '../functions/Random';
import api from '../api';

function NotFound() {
  const [images, setImages] = useState([]);
  const [myImage, setMyImage] = useState('');


  useEffect(() => {
    const fetchImages = async () => {

      await api.getAllImages().then(images => {
        setImages(images.data.data);
        setMyImage(Random(images.data.data));
      });
    }
    fetchImages();
  }, []);

  const handleChange = () => {
    setMyImage(Random(images));
  };

  return (
    <section className="not-found-section">
      <div className="site-logo col-lg-3 col-md-3">
        <Link to='/'>
          <img src={process.env.PUBLIC_URL + `/assets/img/logo.png`} alt={`Logo`} />
        </Link>
      </div>
      <div className="image-404">
        <img src={`${process.env.PUBLIC_URL + myImage.imgPath}`} alt="" onClick={handleChange} />
      </div>
      <div className="text-404">
        <h4>{myImage.errTitle}</h4>
        <p>{myImage.errText}</p>
      </div>
    </section>
  );
}

export default NotFound;