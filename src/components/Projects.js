import React from 'react';
// import "./css/main.css";
import pic1 from  "../css/img/11.jpg";
import pic2 from  "../css/img/12.jpg";
import pic3 from  "../css/img/13.jpg";
import pic4 from  "../css/img/14.webp";

function Projects() {
  return (
    <section className="project--section" id='project'>
        <h3 className="section--heading">PROJECTS</h3>
        <div className="project--list">
          <div className="project--item">
            <div className="imgae--div">
              <img src={pic1} alt="" />
            </div>
            <div className="item--details">
              <h4 className="item--details--header">Lorem ipsum dolor.</h4>
              <p className="item--details--description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                eligendi perferendis odit. 
              </p>
            </div>
          </div>
          <div className="project--item">
            <div className="imgae--div">
              <img src={pic2} alt="" />
            </div>
            <div className="item--details">
              <h4 className="item--details--header">Lorem ipsum dolor.</h4>
              <p className="item--details--description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                eligendi perferendis odit. Quod doloribus, ipsam consectetur
                
              </p>
            </div>
          </div>
          <div className="project--item">
            <div className="imgae--div">
              <img src={pic3} alt="" />
            </div>
            <div className="item--details">
              <h4 className="item--details--header">Lorem ipsum dolor.</h4>
              <p className="item--details--description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                eligendi perferendis odit. Quod doloribus, ipsam consectetur
                
              </p>
            </div>
          </div>
          <div className="project--item">
            <div className="imgae--div">
              <img src={pic4} alt="" />
            </div>
            <div className="item--details">
              <h4 className="item--details--header">Lorem ipsum dolor.</h4>
              <p className="item--details--description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                eligendi perferendis odit. Quod doloribus, ipsam consectetur
                
              </p>
            </div>
          </div>
          <div className="project--item">
            <div className="imgae--div">
              <img src={pic1} alt="" />
            </div>
            <div className="item--details">
              <h4 className="item--details--header">Lorem ipsum dolor.</h4>
              <p className="item--details--description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                eligendi perferendis odit. Quod doloribus, ipsam consectetur
                
              </p>
            </div>
          </div>
          <div className="project--item">
            <div className="imgae--div">
              <img src={pic3} alt="" />
            </div>
            <div className="item--details">
              <h4 className="item--details--header">Lorem ipsum dolor.</h4>
              <p className="item--details--description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                eligendi perferendis odit. Quod doloribus, ipsam consectetur
                
              </p>
            </div>
          </div>
          <div className="project--item">
            <div className="imgae--div">
              <img src={pic2} alt="" />
            </div>
            <div className="item--details">
              <h4 className="item--details--header">Lorem ipsum dolor.</h4>
              <p className="item--details--description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                eligendi perferendis odit. Quod doloribus,
              </p>
            </div>
          </div>
          <div className="project--item">
            <div className="imgae--div">
              <img src={pic4} alt="" />
            </div>
            <div className="item--details">
              <h4 className="item--details--header">Lorem ipsum dolor.</h4>
              <p className="item--details--description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                eligendi perferendis odit. 
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects