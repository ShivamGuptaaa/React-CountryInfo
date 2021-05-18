import React,{useState} from 'react';

const LoginForm = ({userDetail}) => {

const [user, setUser] = useState({name:"",password:""});

const handleSubmit = (e) =>{
e.preventDefault();
userDetail(user);
// setUser({name:"",password:""});
}

    return (
        <>
      <div className="container">
        <div className="jumbotron my-5">
          <h1 id="heading" className="display-4 text-center">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="row form-group">
              <label className="col-2 bg-warning mx-3 font-weight-bolder input-group-text">
                Username:
              </label>
              <input
                type="text"
                id="name"
                className="form-control col-8 lead"
                onChange= {(e)=>{
                    setUser({...user,name:e.target.value})
                }}
                value= {user.name}
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
                    setUser({...user,password:e.target.value})
                }}
                value = {user.password}
              />
            </div>
            <hr className="my-4" />
            <div className="text-center">
              <button type="submit" className="btn btn-danger btn-lg">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </>
    )
}

export default LoginForm;
