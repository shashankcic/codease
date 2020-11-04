import React, { Component } from 'react';
import { CircularProgressWithLabel } from '../components/CircularStatic';
import $ from 'jquery';

class Element extends Component {
  componentDidMount() {
    $('.panel-link').on('click', function (e) {
      $('.panel-link').removeClass('active');
      var $this = $(this);
      if (!$this.hasClass('active')) {
        $this.addClass('active');
      }
      e.preventDefault();
    });
  }
  render() {
    return (
      <section className="elements-page spad pb-0">
        <div className="container">
          <div className="element">
            <h2 className="e-title">Buttons</h2>
            <a href="/" className="site-btn mr-3 mb-3 mb-md-0">Send Message</a>
            <a href="/" className="site-btn btn-dark mr-3 mb-3 mb-md-0">Send Message</a>
            <a href="/" className="site-btn btn-fade">Send Message</a>
          </div>
          {/* Element */}
          <div className="element">
            <h2 className="e-title">Accordions & Tabs</h2>
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                {/* Accordions */}
                <div id="accordion" className="accordion-area">
                  <div className="panel">
                    <div className="panel-header" id="headingOne">
                      <button className="panel-link" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">Praesent neque metus, accumsan in sagittis eu, mattis vitae</button>
                    </div>
                    <div id="collapse1" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="panel-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-header" id="headingTwo">
                      <button className="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Neque metus, accumsan in sagittis eu, mattis</button>
                    </div>
                    <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="panel-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-header active" id="headingThree">
                      <button className="panel-link active" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">Vivamus sollicitudin nisi sit amet dolor varius, et porta</button>
                    </div>
                    <div id="collapse3" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                      <div className="panel-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* Tabs */}
                <div className="tab-element">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Praesent neque metus</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Neque metus</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Vivamus sollici</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    {/* single tab content */}
                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                    </div>
                    <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                    </div>
                    <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Element */}
          <div className="element">
            <h2 className="e-title">Loaders</h2>
            <div className="row">
              <div className="col-lg-3 col-sm-6 cp-item">
                <CircularProgressWithLabel className="circle-progress" value={75} size={200} thickness={2.5} text="New Students" />
              </div>
              <div className="col-lg-3 col-sm-6 cp-item">
                <CircularProgressWithLabel className="circle-progress" value={83} size={200} thickness={2.5} text="New Teachers" />
              </div>
              <div className="col-lg-3 col-sm-6 cp-item">
                <CircularProgressWithLabel className="circle-progress" value={25} size={200} thickness={2.5} text="Creativity "/>
              </div>
              <div className="col-lg-3 col-sm-6 cp-item">
                <CircularProgressWithLabel className="circle-progress" value={95} size={200} thickness={2.5} text="Prestige" />
              </div>
            </div>
          </div>
          {/* Element */}
          <div className="element">
            <h2 className="e-title">Milestones</h2>
            <div className="row">
              <div className="col-lg-3 col-sm-6 fact-item">
                <h2>1200</h2>
                <p>New Students</p>
              </div>
              <div className="col-lg-3 col-sm-6 fact-item">
                <h2>15k</h2>
                <p>Grad Students</p>
              </div>
              <div className="col-lg-3 col-sm-6 fact-item">
                <h2>234</h2>
                <p>Qualified Teachers</p>
              </div>
              <div className="col-lg-3 col-sm-6 fact-item">
                <h2>3792</h2>
                <p>Amazing Courses</p>
              </div>
            </div>
          </div>
          {/* Element */}
          <div className="element">
            <h2 className="e-title">Icon Boxes</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box">
                <h5><span>01.</span>Amazing Teachers</h5>
                <p>Donec molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus ele ifend, et auctor lorem.</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <h5><span>02.</span>Training Center</h5>
                <p>Molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus ele ifend, et auctor lorem hendrerit. </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <h5><span>03.</span>Training Center</h5>
                <p>Itincidunt tellus sit amet aliquet. Proin auctor nisi ut purus ele ifend, et auctor lorem hendrerit. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Element;