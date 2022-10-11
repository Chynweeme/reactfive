import './App.css';
// import {Routes, Route, Navigate, Outlet} from "react-router-dom";
// import {Home} from "./pages/Homepage/Home"
// import Login from "./components/Login/index"
// import Signup from "./components/Signup/Signup"
// import Product from "./components/Product/Product"
// import Navbar from "./components/Navbar/navbar"
// import { useState } from "react";


// const Layout =()=>(
//   <>
//   <Navbar />
//   <Outlet />
//   </>
// )


function App() {
//the function below(onButtonclick) helps me download my cv. First I have to put the cv in the public file
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Chinwendu_Emenike.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Chinwendu_Emenike.pdf';
            alink.click();
        })
    })
}
//end of command that helps me download my cv



  // const[currency,setCurrency]=useState(0)

  // function exchanger(){
   
  // }

  //function convert(){
  //  setCurrency(currency*715)
  //}

  //function numberWithCommas(currency) {
  //  return currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //  }
  return(
    // <div className='maincontainer'>
      /* <div className="container">
         <h1>Currency Converter</h1>
      <form>
            <div className='usdpart'> */
              /* <h3>USD</h3>
              <input type='number' onChange={(e) =>setCurrency(e.target.value)} placeholder='Insert currency in USD' />
            </div>

            <div>
            <h3>NAIRA</h3>
            {numberWithCommas(currency)}
            </div>
        </form> */
        /* <button onClick={convert}>Convert</button> */

        //This one here helps me download my cv
        <div className='cv'>
          <h1>Click this button to download my cv!</h1> <br />
        <button onClick={onButtonClick}>
                    Download CV
                </button>
        </div>
       //end of command for downloading cv

      /* </div> */

    // </div>
  )
  
  }
  
  export default App;
  
  
  
  // const user = true;This should be inside funcion and above return

  // <div className="App">
  //   <Routes>
  //     <Route element={<Layout />}>
  //         <Route path="/" element={<Home />}></Route>
  //         <Route path="/home" element={<Home />}></Route>
  //         <Route path="/login" element={<Login />}></Route>
  //         <Route path="/signup" element={<Signup />}></Route>
  //         <Route path="/product" element={user? <Product /> : <Navigate to="/login" /> }></Route>
  //     </Route>
  //   </Routes>
  // </div>