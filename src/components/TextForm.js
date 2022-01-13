import React, {useState} from 'react'          //use State refers to state variable(here text)

// introducing hooks ---hooks helps us to  use class features without creating class in actual

export default function TextForm(props) {
    
    const [text, setText]= useState('Enter text here(this is default value)');
    //text="new text";     //wrong way to change text
    //setText("new text")  //right way to modify the text

    const handleUpClick =()=>{
        console.log("the value changed is ", text); //this will be displayed on console 
        let newtext= text.toUpperCase();
        setText(newtext);    //this will change the textinside textbox
        props.showAlert("converted to uppercase","success")
    }

    const handleLowClick =()=>{
        // console.log("the value changed is ", text); //this will be displayed on console 
        let newtext= text.toLowerCase();
        setText(newtext);    //this will change the textinside textbox
        props.showAlert("converted to lowerCase","success")

    }

    const handleClear=()=>{
        let newtext="";
        setText(newtext);
    }



    const handleOnChange =(event)=>{              //this is event listener
        console.log("on change ");        //when your try to change text inside text box
        setText(event.target.value);        //this wil help us to change our text
    }                                  
    
    return (     
        <>
        {/* imported from bootstrap//     {{- one for javascript variable and other for object declaration */}        
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 >{props.heading}</h1>  
            <div class="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#042743':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
            </div>
            
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-success mx-2" onClick={handleLowClick}>convert to lowercase</button>
            <button className="btn btn-success" onClick={handleClear}>clear</button>
            
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#042743'}} >
            <h1>your text summary here</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            {/* text.split will form an array of words */}

            <h2>preview</h2>
            <p>{text.length>0?text:"Enter your text above to preview it here"}</p>

        </div>

        
        </>
    )
}