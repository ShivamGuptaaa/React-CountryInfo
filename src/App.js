import React, { useState } from "react";
import LoginForm from "./login/LoginForm";
import Cred from "./login/Cred";
import Tmp from "./tmp/Tmp"
import Navbar from "./Navbar"
import CountryInfo from "./CountryInfo"
// import {Route,Switch} from "react-router-dom";
import "./index.css";

const App = () => {
  const Msg = () => {
    return (
      <div className="text-center mt-2">
        <h3 id="greet">{user.name}</h3>
      </div>
    );
  };

  const [user, setUser] = useState({ name: "", password: "" });
  const userDetail = (detail) => {
    for (let obj in Cred) {
      if (
        detail.name.toLowerCase() === Cred[obj].name.toLowerCase() &&
        detail.password === Cred[obj].password
      ) {
        setUser({ name: detail.name, password: detail.password });
        break;
      } else {
        setUser({name:"",password:""});
        console.log("Details didn't matched");
      }
    }
  };

  const handleLogout=()=>{
    setUser({name:"",password:""});
  }

  return (
    <>
      {/* <Switch>
<Route exact path="/" component={Login} />
<Route path="/tmp" component={Tmp} />

</Switch> */}
<Navbar username={user.name} logout={handleLogout}/>
{(user.name!=="")?<CountryInfo/>:<LoginForm userDetail={userDetail} />}
      
    </>
  );
};
export default App;
 