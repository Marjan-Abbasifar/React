
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import StudentTable from './StudentTable';
import CreateStudent from './CreateStudent'
import EditStudent from './EditStudent'
import ViewDetails from './EditStudent';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StudentTable/>}></Route>
      <Route path='/student/create' element={<CreateStudent/>}></Route>
      <Route path='/student/edit/:studetntid' element={<EditStudent/>}></Route> 
      <Route path='/student/view/:studetntid' element={<ViewDetails/>}></Route> 
      
      
    </Routes>
    </BrowserRouter>
  
  

  );
}

export default App;