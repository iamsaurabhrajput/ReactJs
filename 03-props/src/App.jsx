import React from 'react'
import Card from './components/Card'

const App = () => {
  return (<div className='man'>
     <Card user='Saurabh' age='20' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ469a8Jml2vIgTBIvxp9qulUM0dpyj8HsWciCyI_9IYw&s=10' color='Tap to ' />
     <Card user='Garav' age='25' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXz_uXJ3pWNzndxv4HtU9QZroaxEyo1AkC1iMoUHe6Uw&s=10'/>
     <Card user='Sandeep' age='19' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdgrW7mvB0b6eWPokgcEwzAltSn0qO9Zkxc9D1fYkTw&s=10'/>
     <Card user='Greesh' age='20' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj0r68jZH4eo3fYSF4w2kuacrnLWu69OP644HsnhNkw&s=10'/>
     </div>
  );
};

export default App;
