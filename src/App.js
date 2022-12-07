import React, { useState } from 'react' // If importing from same place, you can do both in one go 

function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
        <div>
            <h1>{counter}</h1>
            <h4>{counter}</h4>
        </div>
    )
}

export default App;
