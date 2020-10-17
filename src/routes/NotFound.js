import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Random from '../functions/Random';

function NotFound({images}) {
  const [myImage, setMyImage] = useState(Random(images));

  useEffect(() => {
    setMyImage(Random(images));
  }, [images]);

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