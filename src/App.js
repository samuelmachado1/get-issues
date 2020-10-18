// import React, {useState, useEffect} from 'react';
// import './App.css';
// import axios from "axios";

// import Header from "./components/Header/index";
// import Requests from './views/Tables/index';


// const api = {
//   baseUrl: "https://api.github.com",
//   client_id: "012800a552fedc694bc7",
//   client_secret: "7668631c551bf22819edf80a6d66069999846f0a",
//   all: "closed"
// }


// function App() {
//  const [data, setData] = useState([]);
 
//   const componentDidMount = async () => {
//     // console.log("ENtrou -->");
//     // axios.get(api.baseUrl + "/search/repositories?q=language:Java&sort=stars&page=1&" + api.client_id + "&=" + api.client_secret )
//     // .then((res) => {
//     //   console.log("RES -->", res.data);
//     //   setData(res.data.items);
//     // })
//     await axios.get(api.baseUrl + "/repos/facebook/react/issues?state=closed&per_page=10")
//     .then((res) => {
//       setData(res.data.data);
//         console.log("RES -->", res);
//       });
//     }
//     useEffect(() => {
//       componentDidMount();
//     });
    
//     console.log("DATa", data)
//   return (
//     <div className="App">
//        <Header/>
//       <header className="App-header">
//         <Requests/>
//         ddd
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Router } from 'react-router-dom';


import Header from "./components/Header/index";
import TableModel from "./components/Table/index";
import Requests from "./components/Session/index";

import history from './services/history';
import { GlobalStyle } from './style';

const App = () =>  (
  
  <div className="App">
    <Router history={history}>
      <Header/>
      <header className="App-header">
        <Requests/>
        {/* <TableModel/> */}
      </header>
    </Router>
       
    </div>
);

export default App;
