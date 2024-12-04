import React, {useState} from 'react' //State

export default function TextForm(props) {

    // State 

    const [count, setCount] = useState(0);
    const [text, setText] = useState('Enter text here');

    // set text 

    // setText("Enter new text");

    return (
        <div>
            <h1>{props.heading} - {text}</h1>
            <div className="mb-3">
                {/* <label for="exampleInputEmail1" className="form-label">Text Box</label> */}
                <textarea type="text" className="form-control" id="text" rows="8" value={text}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Convert To UpperCase</button>
        </div>
    )
}
