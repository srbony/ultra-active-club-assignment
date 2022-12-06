

import './App.css';
import Activities from './Components/Activites/Activities';
import Heder from './Components/Heder/Heder';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Answer from './Components/Answer/Answer';

function App() {


  return (
    <div >
      <Heder></Heder>
      <Activities></Activities>
      <ToastContainer />
      <Answer></Answer>


    </div>
  );
}

export default App;
