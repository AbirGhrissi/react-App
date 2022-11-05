
import React, { useState } from 'react'; 
function Example() { 

 const [count, setCount] = useState(0); 
 return ( 
 <div> 
 <p>Vous avez cliqué {count} fois</p> 
 <button onClick={() => setCount(count + 1)}> 
 Cliquez ici 
 </button> 
 </div> 
 ); 
