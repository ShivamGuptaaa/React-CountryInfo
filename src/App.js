import React from 'react';

function App() {
   return <>
    <div className="container">
      <div className="jumbotron my-5">
        <h1 id="heading" className="display-4 text-center">Login</h1>
        <form>
          <div className="row form-group">
            <label
              id="name"
              className="col-2 bg-warning mx-3 font-weight-bolder input-group-text"
            >
              Username:
            </label>
            <input type="text" className="form-control col-8 lead" />
          </div>
          <div className="row form-group">
            <label
              id="pass"
              className="col-2  bg-warning mx-3 font-weight-bolder input-group-text"
            >
              Password:
            </label>
            <input type="password" className="form-control col-8 lead" />
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
}

export default App;


