import React from 'react'
import { Link } from 'react-router-dom'
import Page2 from '../../components/pages/page2'
import Carousel from './carousel'
import NavBar from './yersNav'



const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark w-100 ">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>MoveisTV</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto border border-dark  rounded d-flex ">
            <Page2 />
            </div>
          </div>
        </div>
        
      </nav>
      <Carousel/>
      <NavBar/>
    </div>
  )
}

export default Header