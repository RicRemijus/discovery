import React from 'react';
import './Testimonies.css';

const Testimonies = () => {
  return (
    <div className='t-wrapper'>
      <h2 className="t-title">What Our Customers Are saying</h2>
      <div className="t-container innerWidth paddings">
        <div className="t-box">
          <div className="t-detail">
            <div className="t-photo">
              <img src="./img/c.jpg" alt="" />
              <p className="t-name">Ciroma Chuks Ade</p>
            </div>
          </div>
          <div className="star-rating">
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
          </div>
          <p className="t-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure placeat! Et, labore fugiat! Perferendis repudiandae voluptatem ea accusantium obcaecati!</p>
        </div>
        <div className="t-box">
          <div className="t-detail">
            <div className="t-photo">
              <img src="./img/c1.jpg" alt="" />
              <p className="t-name">Lisa Oberman</p>
            </div>
          </div>
          <div className="star-rating">
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
          </div>
          <p className="t-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure placeat! Et, labore fugiat! Perferendis repudiandae voluptatem ea accusantium obcaecati!</p>
        </div>

        <div className="t-box">
          <div className="t-detail">
            <div className="t-photo">
              <img src="./img/c4.jpg" alt="" />
              <p className="t-name">John Doe</p>
            </div>
          </div>
          <div className="star-rating">
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
          </div>
          <p className="t-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure placeat! Et, labore fugiat! Perferendis repudiandae voluptatem ea accusantium obcaecati!</p>
        </div>

        <div className="t-box">
          <div className="t-detail">
            <div className="t-photo">
              <img src="./img/c3.jpg" alt="" />
              <p className="t-name">Amina Farouk</p>
            </div>
          </div>
          <div className="star-rating">
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
          </div>
          <p className="t-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure placeat! Et, labore fugiat! Perferendis repudiandae voluptatem ea accusantium obcaecati!</p>
        </div>

        <div className="t-box">
          <div className="t-detail">
            <div className="t-photo">
              <img src="./img/c2.jpg" alt="" />
              <p className="t-name">Oliver Manuel</p>
            </div>
          </div>
          <div className="star-rating">
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
            <span className="checked">⭐</span>
          </div>
          <p className="t-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure placeat! Et, labore fugiat! Perferendis repudiandae voluptatem ea accusantium obcaecati!</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonies;