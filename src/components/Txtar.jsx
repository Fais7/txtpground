import React, { useState } from 'react';
// import Switch from '@mui/material/Switch';
import UseSwitchesCustom from './Swtchtggle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SummarizeIcon from '@mui/icons-material/Summarize';

const Txtar = (props) => {
    let [text, setText] = useState("");
    let hndleuppr = () => {
        let ntext = text.toUpperCase();
        setText(ntext);
    }
    let hndlelwr = () => {
        let ntext = text.toLowerCase();
        setText(ntext);
    }
    let hndlefcap = () => {
        let ntext = text;
        let ar = ntext.split(" ");
        let atext = "";
        for (let i of ar) {
            atext = atext + i.substring(0, 1).toUpperCase() + i.substring(1) + " ";
        }

        setText(atext);
    }
    let hndleclr = () => {
        text = '';
        setText(text);
    }
    let hndlecpy = () => {
        let text = document.getElementById("tx2");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }
    let hndleExtraSpc = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }



    return (
        <>
            <div className={`container-fluid bg-${props.mode} text-${props.mode}`}>
                <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">TEXT <PlayCircleFilledIcon />grOund</span>
                        <span className="navbar-brand"><UseSwitchesCustom toggleB={props.toggleB} /></span>
                    </div>
                </nav>
                <div className="container ">
                    {/* <Switch
                        onChange={props.toggleB}
                        inputProps={{ 'aria-label': 'controlled' }}
                    /> */}
                    <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading} <ArrowDownwardIcon /></h1>
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} value={text} id="tx2" placeholder="Please enter text here... " onChange={(event) => {
                        setText(event.target.value);
                    }} rows="8"></textarea>
                </div>
                <div className="container my-2">
                    <button disabled={text.length===0} className="btn btn-outline-warning my-1" onClick={hndleuppr}>ALL TO UPPERCASE</button>{" "}
                    <button disabled={text.length===0} className="btn btn-outline-warning my-1" onClick={hndlelwr}>All to Lowercase</button>{" "}
                    <button disabled={text.length===0} className="btn btn-outline-info my-1" onClick={hndlefcap}>All to FirstCaps</button>{" "}
                    <button disabled={text.length===0} className="btn btn-outline-success my-1" onClick={hndlecpy}>Copy all</button>{" "}
                    <button disabled={text.length===0} className="btn btn-outline-primary my-1" onClick={hndleExtraSpc}>Remove all spaces</button>{" "}
                    <button disabled={text.length===0} className="btn btn-outline-danger my-1" onClick={hndleclr}>Clear all</button>{" "}
                </div>
                <div className={`container my-2 text-${props.mode === 'light' ? 'dark' : 'light'} text-center`}>
                    <h2 className="text-center"> Text summary <SummarizeIcon /> </h2><hr />
                    <p><i>Words are: <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> and Characters are: <b>{text.length}</b>.</i></p>
                    <p><i>Minutes to read: <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b></i></p><hr />
                </div>
                <div className={`container my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h2>Preview your Text</h2>
                    <p>{text}</p>
                </div>
                <footer className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <div className="text-center p-3" >
                        © 2021 Copyright:  FAIS@L F@rhan. 
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Txtar;
