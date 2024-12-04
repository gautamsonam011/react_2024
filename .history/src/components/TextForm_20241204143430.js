import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Text Box</label>
                <textarea type="text" className="form-control" id="text" rows="8"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    )
}