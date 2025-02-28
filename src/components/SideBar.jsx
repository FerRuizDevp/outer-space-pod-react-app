import { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  const { handleToggleModal, data } = props
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isMobile ? "mobile" : "desktop"}`}>
        <div className='sidebarContents'>
            <h2>{data?.title}</h2>
            <div className="descriptionContainer">
              <p className="descriptionTitle">{data?.date}</p>
              <p>{data?.explanation}</p>
            </div>
            <button onClick={handleToggleModal} className="arrow-btn">
              <i className='fa-solid fa-arrow-right'></i>
            </button> 
        </div>
      </div>
      {/* Background Overlay */}
      <div onClick={handleToggleModal} className='bgOverlay'></div>
    </>
  );
};

export default Sidebar;
