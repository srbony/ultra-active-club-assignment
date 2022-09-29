

import './App.css';
import Activities from './Components/Activites/Activities';
import Heder from './Components/Heder/Heder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Answer from './Components/Answer/Answer';

function App() {


  return (
    <div >
      <Heder></Heder>
      <Activities></Activities>
      <Answer></Answer>


    </div>
  );
}

export default App;
