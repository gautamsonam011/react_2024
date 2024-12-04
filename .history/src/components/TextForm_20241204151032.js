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

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading} - {text}</h1>
            <div className="mb-3">
                {/* <label for="exampleInputEmail1" className="form-label">Text Box</label> */}
                <textarea type="text" className="form-control" id="text" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
        </div>
        <div className='container my3'>
            <h1 className="my-4">Your text summary</h1>
            <p></p>
        </div>
        </>
    )
}
