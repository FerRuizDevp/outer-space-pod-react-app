import React from 'react'

function Footer(props) {
  const { showModal, handleToggleModal, data } = props

  return (
    <footer>
        <div className='bgGradient'>
        </div>
        <div>
            <p>APOD PROJECT</p>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModal}>
            <i className='fa-solid fa-circle-info'></i>
        </button>
    </footer>
  )
}

export default Footer