import React from 'react'
import {
    Link,  useLocation
  } from "react-router-dom";
  import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  let navigate = useNavigate();

  // let location = useLocation();
  const handleLogout=() =>{
    localStorage.removeItem('token')
      navigate("login")
  }

  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">MyNotes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link  ${navigate.pathname==="/home"?"active":""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${navigate.pathname==="/about"?"active":""}`} to="/about">About</Link>
              </li>
              
              
            </ul>
            {!localStorage.getItem('token')?  
            <form className="d-flex">
              <Link className="btn btn-outline-light mx-1" to="/login" type="submit">Login</Link>
              <Link className="btn btn-outline-light mx-1" to="/signup" type="submit">Signup</Link>
            </form> : <button className="btn btn-outline-light mx-1" onClick={handleLogout} >logout</button>    }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar















// import React from 'react'
// import {
//     Link, useLocation
//   } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';


// const Navbar = () => {
//   let navigate = useNavigate();

//   let location = useLocation();
// const handleLogout=() =>{
//   localStorage.removeItem('token')
//   navigate("login")
// }

//   return (
//     <>
    
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/home">Navbar</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link  ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
//               </li>
              
              
//             </ul>
//             {!localStorage.getItem('token')?
//             <form className="d-flex">
//             <Link className="btn btn-outline-light mx-1" to="/login" type="submit">Login</Link>
//               <Link className="btn btn-outline-light mx-1" to="/signup" type="submit">Signup</Link>
//             </form>:<button className="btn btn-outline-light mx-1" onClick={handleLogout} >logout</button>    }
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar