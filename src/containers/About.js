import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import api from '../api';
import { Link } from 'react-router-dom'; 

function About() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      await api.getAllAuthors().then(response => {
        if (response.data.data.length > 0) {
          setAuthors(response.data.data);
        }
      })
    }
    fetchAuthors();
  }, [])

  return (
    <section className="about-section container">
      <div className="about-organisation row justify-content-center align-items-center">
        <div className="col-10 grid-item">
          <h4>
            About The Organisation
          </h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
          </p>
        </div>
      </div>
      <div className="goals-organisation row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 grid-item">
          <span>About Us</span>
          <br />
          <h4>Our goals</h4>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 grid-item">
          <Card>
            <CardMedia>
              <img src={`${process.env.PUBLIC_URL + '/assets/img/blog/1.jpg'}`} alt='' />
            </CardMedia>
          </Card>
        </div>
      </div>
      <div className="team-organisation row justify-content-center align-items-center">
        <div className="col-10 grid-item">
          <span>Meet Our Team</span>
          <br />
          <h4>The Team</h4>
        </div>
        {authors.map(author => <Link to={'/author/' + author._id} className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <Card>
              <CardMedia className="col-8 member-img-card">
                <img src={`${process.env.PUBLIC_URL + author.img}`} alt="Bhanu Mittal"  className="member-img" />
              </CardMedia>
              <CardContent>
                <h4>{author.name}</h4>
                <br />
                <span>{author.about}</span>
              </CardContent>
            </Card>
          </Link>
        )}
      </div>
      <div className="mission-organisation row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 grid-item">
          <Card>
            <CardMedia>
              <img src={`${process.env.PUBLIC_URL + '/assets/img/blog/2.jpg'}`} alt='' />
            </CardMedia>
          </Card>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 grid-item">
          <span>Why Founded</span>
          <br />
          <h4>Mission and Vision</h4>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
        </div>
      </div>
    </section>
  );
}

export default About;