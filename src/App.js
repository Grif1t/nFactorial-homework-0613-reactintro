import {format} from 'date-fns';
import './App.css';


const App = () =>{
  const date = format(new Date(), "dd.MM.yy HH:MM");
  return (
    <div className = 'App'>
      <div className='header'>
          <div className='icon'></div>
          <div className='box'></div>
          <div className='timeTable'>{date}</div>
      </div>
      <div className= 'container'>
      <div className='imgBox' id = "Antarctic">
          <div className="text"> HEY</div>
      </div>

      <div className='imgBox' id = "flashlight">
          <div className="text"> LET'S </div>
      </div>

      <div className='imgBox' id = "women">
          <div className="text"> GIVE </div>
      </div>

      <div className='imgBox' id = "foxpic">
          <div className="text"> ALL </div>  
      </div>
      <div className='imgBox' id = "clouds">
          <div className="Text"> YOU CAN</div>
      </div>
    </div >
    </div>
  );
};

export default App;
