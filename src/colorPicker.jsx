import React, {useState} from 'react';

function colorPicker(){
    const [color, setColor] = useState("#FFFFFF");
    
    function handleColorChange(event){
        setColor(event.target.value);
    } 
    return(<div className="color-picker-container">
        <h1>Mini Project: Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color</label>
        <input type="color" value={color} onChange={handleColorChange}/>
    </div>); 
} 
export default colorPicker