import React, {useState} from 'react' //State

export default function TextForm(props) {

    // State 

    const [count, setCount] = useState(0);
    const [text, setText] = useState('Enter text here');

    // set text 
    // text = "Enter text" wrong way to set text 
    // setText("Enter new text"); correct way to set text

    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text);

        let newText = text.toUpperCase();

        setText(newText);
    }

    const handleLoClick = () =>{
        console.log("Lowercase was clicked" + text);

        let newText = text.toLowerCase();

        setText(newText);
    }

    // const handleClearClick = () =>{
    //     console.log("Clear Text" + text);

    //     let newText = text.();

    //     setText(newText);
    // }

    const handleCopy = () => {
        console.log("This is a copy");
        var text = document.getElementById("text");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[]+/);
        setText(newText.join(" "));
    }

    return (
        <>
        <div className='container' style = {{color: props.mode === 'dark'?'white':'yellow'}}>
            <h2>{props.heading} - {text}</h2>
            <div className="mb-3">
                {/* <label for="exampleInputEmail1" className="form-label">Text Box</label> */}
                <textarea type="text" className="form-control" id="text" rows="8" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'grey':'yellow'}} ></textarea>
            </div>
            <button type="submit" className="btn btn-info mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button type="submit" className="btn btn-info mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button type="submit" className="btn btn-info mx-2" onClick={handleCopy}>Copy</button>
            <button type="submit" className="btn btn-info mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className='container my3'>
            <h2 className="my-4">Your text summary</h2>
            <p>Words: {text.split(" ").length}, Characters: {text.length}</p>
            <p>{0.008 * text.split("").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
