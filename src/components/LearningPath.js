import React from 'react';
import { Link } from 'react-router-dom';

function LearningPath({learningPath}) {

  return (
    <div className="col-lg-4 col-md-6">
      <div className="categorie-item shadow-4 br3">
        <div className="ci-thumb set-bg link dt hide-child br2 cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + learningPath.img})`}}>
          <span className="white dtc v-mid w-100 h-100 child bg-black-40 pa5 ph3 fl content-center">
            <Link to={'/category/' + learningPath.name + '/Beginner'} className="o-90 f5 center tc grow no-underline br-pill ph3 pv2 ma2 flex justify-center w-50 white items-center bg-secondary">Beginner</Link>
            <Link to={'/category/' + learningPath.name + '/Intermediate'} className="o-90 f5 center tc grow no-underline br-pill ph3 pv2 ma2 flex justify-center w-50 white items-center bg-secondary">Intermediate</Link>
            <Link to={'/category/' + learningPath.name + '/Advanced'} className="o-90 f5 center tc grow no-underline br-pill ph3 pv2 ma2 flex justify-center w-50 white items-center bg-secondary">Advanced</Link>
            <Link to={'/category/' + learningPath.name + '/Miscellaneous'} className="o-90 f5 center tc grow no-underline br-pill ph3 pv2 ma2 flex justify-center w-50 white items-center bg-secondary">Miscellaneous</Link>
          </span>
        </div>
        <div className="ci-text">
          <h5>{learningPath.name}</h5>
          <p className='truncate'>{learningPath.description}</p>
        </div>
        <Link to={'/category/' + learningPath.name} className="f4 br1 link dim ph3 pv2 mb2 dib white flex justify-center center w-100 white items-center hover-bg-white bg-purple">Learn {learningPath.name}</Link>
      </div>
    </div>
  );
}

export default LearningPath;