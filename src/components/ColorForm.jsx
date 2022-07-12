import React, { useState } from 'react';

const ColorForm = (props) => {
    const [color, setColor] = useState("")
    const [size, setSize] = useState(null)
    const {onNewBox} = props

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewBox({color : color, size: size})
        setColor("")
        setSize("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Color <input type="text" name='color'
                placeholder="Enter your color here"
                onChange={(e) => setColor(e.target.value)}
                value={color}
            ></input>
                <h3>Size <input type="number" name='size'
                    placeholder="Enter your size here"
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                ></input></h3>
                <input type="submit" value="Add" /></h3>
        </form>
    );
};


export default ColorForm;