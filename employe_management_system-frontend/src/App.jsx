import './App.css';
import HeaderComponents from './components/HeaderComponents';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';

function App() {
    return (
        <BrowserRouter>
            <HeaderComponents />
            <Routes>
                <Route path='/' element={<ListEmployeeComponent />} />
                <Route path='/employees' element={<ListEmployeeComponent />} />
                <Route path='/add-employee' element={<EmployeeComponent />} />
                <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;












// import './App.css';

// import HeaderComponents from './components/HeaderComponents';
// import ListEmployeeComponent from './components/ListEmployeeComponent'; // Ensure the name matches
// import SylvestreList from './components/SylvestreList';
// import HelloWorld from './assets/HelloWorld';
// import FooterComponent from './components/FooterComponent';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import EmployeeComponent from './components/EmployeeComponent';



// function App() {
//     return (
//         <> <BrowserRouter>
//         <HeaderComponents/>
//             {/* <HelloWorld/> */}
//             <Routes>
//                 {/* //http://localhost:3000*/}
// <Route path='/' element = {<ListEmployeeComponent/>} ></Route>
//             {/* //http://localhost:3000/employees */}
//             <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
//             {/* //http://localhost:3000/add-employee */}
//             <Route path='/add-employee' element={<EmployeeComponent/> }></Route>
//                {/* //http://localhost:3000/edit-employee/1 */}
//                <route path='edit-employee/:id' element={<EmployeeComponent/>}></route>

//             </Routes>
//             {/* <ListEmployeeComponent /> */}
//             {/* <SylvestreList/> */}
//             <FooterComponent/>
//             </BrowserRouter>
//         </>
//     );
// }

// export default App;