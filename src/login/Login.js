import React,{useState} from 'react';
import Cred from "./Cred.jsx"
import Greet from "./Greet.jsx"
// import Tmp from "../tmp/Tmp"

let loggedIn = false;
const Login = () => {
    const [msg, setMsg] = useState("");
    let name,pass;
  
    const Check = (event) => {
      event.preventDefault();
      if (name === "" || pass === "") {
        return setMsg("Please fill all details !");
    }
  
      for (const obj in Cred) {
        if (name === Cred[obj].name && pass === Cred[obj].password) {
          event.target.name.value = "";
          event.target.pass.value = "";
          loggedIn = true;
          return setMsg(Greet() + Cred[obj].name)
        }
      }
      return setMsg("Invalid Credential !!!");
    }

return (
<>
      <div className="container">
        <div className="jumbotron my-5">
          <h1 id="heading" className="display-4 text-center">
            Login
          </h1>
          <form onSubmit={Check}>
            <div className="row form-group">
              <label className="col-2 bg-warning mx-3 font-weight-bolder input-group-text">
                Username:
              </label>
              <input
                type="text"
                id="name"
                className="form-control col-8 lead"
                onChange= {(e)=>{
                    name = e.target.value;
                }}
                value= {name}
              />
            </div>
            <div className="row form-group">
              <label className="col-2  bg-warning mx-3 font-weight-bolder input-group-text">
                Password:
              </label>
              <input
                type="password"
                id="pass"
                className="form-control col-8 lead"
                onChange = {(e)=>{
                    pass = e.target.value;
                }}
                value = {pass}
              />
            </div>
            <hr className="my-4" />
            <div className="text-center">
              <button type="submit" className="btn btn-danger btn-lg">
                SUBMIT
              </button>
            </div>
            <div className="text-center mt-2">
              <h3 id="greet">{msg}</h3>
            </div>
          </form>
        </div>
      </div>
      
    </>
)
}

export default Login;
export {loggedIn};