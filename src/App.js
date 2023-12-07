import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Products_list from './Products_list';

function App() {
  function handleClick(data) {
    console.log("Helooo im clicked " + data);
    // alert("im alert opened");
  }
  return (
    <div>
      <Header />
      <Products_list />
      {/* <button className='btn' onClick={handleClick}>Click</button> */}
      <button className='btn' onClick={(event) => {
        console.log("event", event);
        console.log("event.target", event.target);
        console.log("event.target.value", event.target.value);
        handleClick("Uvasri")
      }}>Click</button>
    </div>
  );
}

export default App;
