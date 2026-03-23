import React from 'react'

function Navbar() {
  return (
    <div className="bg-gray-600">
      <div>
        <img src="../../src/assets/logo_dark.svg" alt="" />
      </div>
      <nav>
        <li>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Our Work</a>
          <a href="#">Contact Us</a>
        </li>
      </nav>
      <div className="">
        <button>
          <a href=""></a>
        </button>
        <button>
          <a href="#">Connect</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar