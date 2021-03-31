import React, { useState } from "react";
import Cred from "./Cred";
import Greet from "./Greet";

// function DispMsg(event){
//   let name= document.getElementById('name');
//   let pass= document.getElementById('pass');
//   // let showMsg = document.getElementById('greet')
//   const [msg,setMsg] = useState("LL");
//   console.log("clicked");
//   for (const obj in Cred){
//     if (name==Cred[obj].name && pass==Cred[obj].password){
//     // if (true){
//       // setMsg(name);
//       console.log('if run');
//       return <>
//       <div className="text-center">
//       {/* <button type="submit" className="btn btn-danger btn-lg"> */}
//       <button onClick={DispMsg} className="btn btn-danger btn-lg">
//         SUBMIT
//       </button>
//       </div>
//       <div className="text-center">
//          <h3 id="greet">{msg}</h3>
//            </div>
//       </>
//     }
//     else{
//       console.log('else run')
//       return <>
//       <div className="text-center">
//       {/* <button type="submit" className="btn btn-danger btn-lg"> */}
//       <button onClick={DispMsg} className="btn btn-danger btn-lg">
//         SUBMIT
//       </button>
//       </div>
//       <div className="text-center">
//          <h3 id="greet">{msg}</h3>
//            </div>
//       </>
//     }

// return (<div className="text-center">
// {/* <button type="submit" className="btn btn-danger btn-lg"> */}
// <button onClick={DispMsg} className="btn btn-danger btn-lg">
//   SUBMIT
// </button>
//   <div className="text-center">
//   <h3 id="greet">{msg}</h3>
//     </div>
//  </div>)
//     }
//     else{
//       return (<div className="text-center">
//       {/* <button type="submit" className="btn btn-danger btn-lg"> */}
//       <button onClick={DispMsg} className="btn btn-danger btn-lg">
//         SUBMITTTTTT
//       </button>
//      </div>)
//     }

//  console.log(Cred[i].name+ "=> "+Cred[i].password);
// }

// if (tmp==true){
// return (<div className="text-center">
//      {/* <button type="submit" className="btn btn-danger btn-lg"> */}
//      <button onClick={DispMsg} className="btn btn-danger btn-lg">
//        SUBMIT
//      </button>
//      <div className="text-center">
//      <h3 id="greet">{msg}</h3>
//        </div>
//     </div>)
// }   else {
//   return (<div className="text-center">
//      {/* <button type="submit" className="btn btn-danger btn-lg"> */}
//      <button onClick={DispMsg} className="btn btn-danger btn-lg">
//        SUBMITTTTTT
//      </button>
//     </div>)
// }
// Cred.map(function CheckLogin(cred){

//   if (name==cred.name && pass==cred.password)
//   {
//     setMsg("Good Morning" + name);
//     // showMsg.innerHTML(msg);
//     // event.preventDefault();
//     return <><div className="text-center">
//     {/* <button type="submit" className="btn btn-danger btn-lg"> */}
//     <button onClick={DispMsg} className="btn btn-danger btn-lg">
//       SUBMIT
//     </button>
//     </div>
//     <div className="text-center">
//     <h3 id="greet">{msg}</h3>
//       </div></>
//   }
//   else{
//     return <><div className="text-center">
//     {/* <button type="submit" className="btn btn-danger btn-lg"> */}
//     <button onClick={DispMsg} className="btn btn-danger btn-lg">
//       SUBMIT
//     </button>
//     </div></>
//   }
// })
// }

const App = (e) => {
  const [msg, setMsg] = useState("");
const Check = () => {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;

if (name==="" || pass===""){
  return setMsg("Please fill all details !");
}

  for (const obj in Cred) {
    // console.log(name + pass);
    // console.log(Cred[obj].name + Cred[obj].password);
    if (name === Cred[obj].name && pass === Cred[obj].password) {
      return (
        setMsg(Greet() + Cred[obj].name)
        );
    }
    setMsg("Invalid Credential !!!");
  }
};
  return (
    <>
      <div className="container">
        <div className="jumbotron my-5">
          <h1 id="heading" className="display-4 text-center">
            Login
          </h1>
          <form>
          <div className="row form-group">
            <label className="col-2 bg-warning mx-3 font-weight-bolder input-group-text">
              Username:
            </label>
            <input type="text" id="name" className="form-control col-8 lead" />
          </div>
          <div className="row form-group">
            <label className="col-2  bg-warning mx-3 font-weight-bolder input-group-text">
              Password:
            </label>
            <input
              type="password"
              id="pass"
              className="form-control col-8 lead"
            />
          </div>
          <hr className="my-4" />
          <div className="text-center">
            {/* <button type="submit" onClick={Check} className="btn btn-danger btn-lg"> */}
            <button type="button" onClick={Check} className="btn btn-danger btn-lg">
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
  );
};

export default App;

// const data = {name:"john",password:"miller"};

// let name;
// let greet;
// let cssStyle = {};

// Check credential and return correct greeting
// function CheckLogin(self) {
//   let head = document.getElementById('heading');
//   let Cname = document.getElementById("name");
//   let pass = document.getElementById("pass");
//   head.innerHTML = Cname;
//   if (Cname === data.name && pass === data.password){
//     head.innerHTML = Cname;
//   }
// else{
//   head.innerHTML = "NEW";
// }

// For deciding correct greeting
// function Greet() {
//   let head = document.getElementById("heading");
//   let curDate = new Date();
//   curDate = curDate.getHours();
//   let tmp = {};
//   if (curDate >= 7 && curDate <= 11) {
//     tmp = {greet:"Good Morning",color:"green"};
//   } else if (curDate >= 12 && curDate <= 17) {
//     tmp = {greet:"Good Afternoon",color:"orange"};
//   } else if (curDate >= 18 && curDate <= 21) {
//     tmp = {greet:"Good Evening",color:"grey"};
//   } else {
//     tmp = {greet:"Good Night",color:"black"};
//   }
//   cssStyle = cssStyle.color(tmp.color);
//   greet =  "Good";
//   head.innerHTML = tmp.greet;

// }
