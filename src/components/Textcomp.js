import React, { useState } from 'react'

export default function Textcomp(props) {
    const { placeholder, title, showalert } = props;
    const [text, setText] = useState('');
    const handleText = (e) => {
        setText(e.target.value);
    }
    const handleClearText = () => {
        setText("");
        if (text !== "") {
            showalert("Input Cleared", 'success');
        }
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        if (text !== "") {
            showalert("Text Copied to Clipboard", 'success');
        }
    }

    const noOfWords = text.split(/\s/).filter((ele) => {
        return ele.length !== 0;
    }).length;
    const min = Math.floor((0.48 * noOfWords) / 60);
    const sec = Math.round((0.48 * noOfWords) % 60);
    return (
        <div className="my-4 container">
            <h3 className='mb-4 text-primary'>{title}</h3>
            <textarea className="form-control" id="myBox" value={text} onChange={handleText} placeholder={placeholder} rows="8"></textarea>
            <div className='mt-3'>
                <button onClick={handleCopyText} className='btn btn-primary'>Copy Text</button>
                <button onClick={handleClearText} className='btn btn-primary mx-3'>Clear Text</button>
            </div>
            <div className='my-4'>
                <h3 className='mb-4 text-primary'>Analysis of your text</h3>
                <p>{noOfWords} Words {text.replace(/\s/g, "").length} Letters</p>
                <p>Average reading time {min < 10 ? '0' + min : min} min {sec < 10 ? '0' + sec : sec} sec</p>
                <h4>Preview Text</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}
