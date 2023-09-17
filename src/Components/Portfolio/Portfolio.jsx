import React, { useEffect, useState } from 'react'
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Portfolio() {

  const elements = [
    {
      id: 1,
      imgUrl: 'https://routeegy.github.io/startFramework/assets/images/poert1.png'
    },
    {
      id: 2,
      imgUrl: 'https://routeegy.github.io/startFramework/assets/images/port2.png'
    },
    {
      id: 3,
      imgUrl: 'https://routeegy.github.io/startFramework/assets/images/port3.png'
    },
    {
      id: 4,
      imgUrl: 'https://routeegy.github.io/startFramework/assets/images/poert1.png'
    },
    {
      id: 5,
      imgUrl: 'https://routeegy.github.io/startFramework/assets/images/port2.png'
    },
    {
      id: 6,
      imgUrl: 'https://routeegy.github.io/startFramework/assets/images/port3.png'
    },

  ]

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };


  useEffect(() => {

  }, [])

  return (
    // <div className="container">
      <div className="portfolio">
        <h1>PORTFOLIO COMPONENT</h1>

        <div className="icon-div">
            <div className='stick'></div>
            <FontAwesomeIcon icon={faStar} />
            <div className='stick'></div>
        </div>

        <div className="container">
          <div className="images row">
            {elements.map((ele) => (
              <div className="img-div col-lg-4 col-md-6" key={ele.id}>
                <div className="overlay" onClick={() => openModal(ele.imgUrl)}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <img src={ele.imgUrl} className="w-100" alt="" />
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className="custom-modal">
              <div className="modal-content">
                <button onClick={closeModal}>Close</button>
                <img className='my-3' src={selectedImage} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    // </div>
  )
}