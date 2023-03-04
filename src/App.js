
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse'
import './side.css'



function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-auto col-sm-2 bg-dark d-flex flex-column justifify-content-between min-vh-100"> 
        <div className="mt-2">
          <a className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline" role="button"> 
           <span className="fS-4"> Menu</span>
          </a>

          <hr className='text-white d-none d-sm-block'></hr>
           <ul class="nav nav-pills flex-column" id="parentM">
            <li class="nav-item my-1">
              <a href="#" class="nav-link text-white" aria-current="page">
               <i className="bi bi-speedometer2"></i>
               <span className="ms-2 d-none d-sm-inline">Home </span>
               
                </a>
            </li>

            <li class="nav-item my-1">
              <a href="#submenu" class="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
               <i className="bi bi-grid"></i>
               <span className="ms-2 d-none d-sm-inline">Planos</span>
               <i className="bi bi-arrow-down-short ms-3"></i>
                </a>

                <ul class="nav collapse ms-2 flex-column" id="submenu" data-bs-parent="#parentM">
                    <li class="nav-item">
                        <a class="nav-link  text-white" href="#" aria-current="page">Plano 1</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link  text-white" href="#">Plano 2</a>
                    </li>

                    <li class="nav-item  my-1">
              <a href="#" class="nav-link text-white" aria-current="page">
               <i className="bi bi-people"></i>
               <span className="ms-2 d-none d-sm-inline"> </span>
               
                </a>
            </li>
                    
                </ul>
            </li>
           

            <li class="nav-item  my-1">
              <a href="#" class="nav-link text-white" aria-current="page">
               <i className="bi bi-house"></i>
               <span className="ms-2 d-none d-sm-inline"> Contato </span>
               
                </a>
            </li>


           </ul>
        </div>
      <div class="dropdown open">
        <a class="btn border-none dropdown-toggle text-white" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i className="bi bi-person fs-5"></i>
            <span className='fS-4 ms-3 d-none d-sm-inline'> Admin </span>
            </a>
        <div class="dropdown-menu" aria-labelledby="triggerId">
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" href="#">ok</a>
        </div>
      </div>
      
    </div>
      </div>
    </div>
  );
}

export default App;
