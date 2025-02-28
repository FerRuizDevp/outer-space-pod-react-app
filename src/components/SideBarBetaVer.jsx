import React from 'react'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className='bgOverlay'></div>
        <div className='sidebarContents'>
            <h2>The Brutal Martian Landscape</h2>
            <div>
                <p>Description</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <button>
                <i className='fa-solid fa-arrow-right'></i>
            </button>
        </div>  
    </div>
  )
}

export default SideBar