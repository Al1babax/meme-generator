import Nav from './components/nav.jsx';
import Body from './components/body.jsx';
import React from 'react';

function App() {
  const [firstName, setFirstName] = React.useState("")
    
  function handleChange(event) {
      console.log(event)
  }

  return (
    <div className="bg-slate-300 w-full h-screen">
      {/* <Nav />
      <Body /> */}
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
