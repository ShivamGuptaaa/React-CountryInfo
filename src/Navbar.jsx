import React from 'react';
import Greet from './login/Greet';
// import {Link} from 'react-router-dom';

const Navbar = ({username,logout}) => {

    const uname_style = {
        color:"cyan"
    }


const Content = () =>{
    if (username!==""){
        return (<>
        <li className="nav-item mx-auto">
          <div className="row"><h3>{Greet()}</h3><h3 className="mx-2" style={uname_style}>{username}</h3></div>
        </li>
        <li><button className="btn btn-warning mx-5" onClick={logout}>LOGOUT</button></li>
        </>)
}
else{
   return <button className="nav-link active rounded btn-success" aria-current="page">Login</button>
}
}

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            
        <Content/>
        </ul>
        </div>
    )
}

export default Navbar
