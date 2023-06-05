import React from 'react'
import './Header2.css'
import Logo from './../../static/Header/wisdora.png'

const Header2 = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
  <div class="container">
  <a class="navbar-brand" href="#">
      <img src={Logo} alt="Wisdora" width="30" height="24"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            What We Do
          </a>
          <ul class="dropdown-menu">
            <li>
                <a class="dropdown-item" href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem numquam, natus totam saepe quis ipsa facere amet, architecto sint id officia nam voluptatum molestiae.
               </a></li>
               <li class="nav-item dropend">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Custom Solutions
          </a>
          <ul class="dropdown-menu">
            <li>
                <a class="dropdown-item" href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem numquam, natus totam saepe quis ipsa facere amet, architecto sint id officia nam voluptatum molestiae.
               </a></li>
            <li>
                <a class="dropdown-item" href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem numquam, natus totam saepe quis ipsa facere amet, architecto sint id officia nam voluptatum molestiae.
               </a></li>
            <li>
                <a class="dropdown-item" href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem numquam, natus totam saepe quis ipsa facere amet, architecto sint id officia nam voluptatum molestiae.
               </a></li>
       
         
          </ul>
        </li>
            <li>
                <a class="dropdown-item" href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem numquam, natus totam saepe quis ipsa facere amet, architecto sint id officia nam voluptatum molestiae.
               </a></li>
       
         
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Who We Are
          </a>
          <ul class="dropdown-menu">
            <li>
                <a class="dropdown-item" href="#">
               About Us
               </a></li>
               
             
               
       
         
          </ul>
        </li>
       
      </ul>
 
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Let's Meet
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</nav></>

  )
}

export default Header2