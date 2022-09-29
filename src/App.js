

import './App.css';
import Activities from './Components/Activites/Activities';
import Heder from './Components/Heder/Heder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <div >
      <Heder></Heder>
      <Activities></Activities>
      

    </div>
  );
}

export default App;
