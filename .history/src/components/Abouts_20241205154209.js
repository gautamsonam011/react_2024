import React, {useState} from 'react'

export default function Abouts(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'red',
    //     backgroundColor: 'black',
    // })
    const [btntext, setBtnText] = useState("Ligth Mode");

    // const toggleStyle = () => {
    //    if (myStyle.color === 'red'){
    //     setMyStyle({
    //         color: 'black',
    //         backgroundColor: 'red',
    //         border: '2px solid red'
    //     })
    //     setBtnText("Dark Mode")
        
    //    }
    //    else {
    //     setMyStyle({
    //         color: 'red',
    //         backgroundColor: 'black',
    //     })
    //     setBtnText("Ligth Mode")
    //    }
    // }

    let myStyle = {
        color: props.mode === 'dark'?'white':'rgb(229 229 72)',
        backgroundColor: props.mode === 'dark'?'rgb(229 229 72)':'white'
    }

    return (
        <>
        <div className="container" style={myStyle}>
            <h2 className="my-3">About Page</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}> 
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container my-4">
        <button type="button" class="btn btn-info" >{btntext}</button>
        </div>
        
        </>
    )
}
