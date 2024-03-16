import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const UpbuttonClicked = () => {
        const newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("success", "Uppercase Done")

    }
    const LobuttonClicked = () => {
        const newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("success", "Lowercase Done")
    }
    const changeText = (event) => {
        setText(event.target.value)
    }
  return (
    <>
    <h2>{props.title}</h2>
    <div className="mb-3 my-3">
    <textarea className="form-control" value={text} onChange={changeText} id="mybox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={UpbuttonClicked} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={LobuttonClicked} >Convert to Lowercase</button>

    <div className="container my-3">
    <h3>Summary is - </h3>
    <p>Total words count is : {text.split(" ").length}</p>
    <p>Total characters count is : {text.length}, Magic value = {0.5 * text.split(" ").length}</p>
    </div>
    </>
  )
}
