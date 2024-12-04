import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Text Box</label>
                    <input type="text" className="form-control" id="text" aria-describedby="text"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
