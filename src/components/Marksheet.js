import React, { useRef } from 'react'

function Marksheet() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let telMarksInputRef = useRef();
    let hinMarksInputRef = useRef();
    let engMarksInputRef = useRef();
    let mathMarksInputRef = useRef();
    let sciMarksInputRef = useRef();
    let socMarksInputRef = useRef();

    let firstNameSpanResultRef = useRef();
    let lastNameSpanResultRef = useRef();
    let emailSpanResultRef = useRef();
    let passwordSpanResultRef = useRef();
    let telMarksSpanResult = useRef();
    let hinMarksSpanResult = useRef();
    let engMarksSpanResult = useRef();
    let mathMarksSpanResult = useRef();
    let sciMarksSpanResult = useRef();
    let socMarksSpanResult = useRef();
    let resultRef = useRef();

    let fullNameRegex = /^[A-Za-z\s]{2,30}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;


    let inputOnFocus = (inputRef) => {
        inputRef.current.style.backgroundColor = "white";
        inputRef.current.style.color = "black";
    }
    let inputOnBlur = (inputRef) => {
        inputRef.current.style.backgroundColor = "";
        inputRef.current.style.color = "";
    }
    let inputOnChange = (inputRef,spanRef) => {
        let marks = inputRef.current.value;
        if(marks >= 0 && marks <= 100) {
            spanRef.current.innerHTML = marks >= 35 ? "Pass" : "Fail";
        } else {
            spanRef.current.innerHTML = "Invalid";
        }
    }
    
    let validateName  = (inputRef,SpanRef) => {
        let nameResult = fullNameRegex.test(inputRef.current.value);
        if(nameResult == true) {
            SpanRef.current.innerHTML = "Valid Name" 
        }
        else {
            SpanRef.current.innerHTML = "Invalid Name" 
        }
    };
    let validateEmail = (inputRef,SpanRef) => {
        let emailResult = emailRegex.test(inputRef.current.value);
        if(emailResult == true){
            SpanRef.current.innerHTML = "Valid Email" 
        }
        else {
            SpanRef.current.innerHTML = "Invalid Email" 
        }
    };
    let validatePassword = (inputRef,SpanRef) => {
        let passwordResult = passwordRegex.test(inputRef.current.value);
        if (passwordResult == true) {
            SpanRef.current.innerHTML = "Valid Password" 
        }
        else{
            SpanRef.current.innerHTML = "Invalid Password" 
        }
    };


      return (
        <form>
            <h1>MarkSheet</h1>
           <div>
                <label>First name</label>
                <input ref={firstNameInputRef} 
                    onFocus={() => inputOnFocus(firstNameInputRef)}
                    onChange={ () => validateName(firstNameInputRef,firstNameSpanResultRef) }
                    onBlur={() => inputOnBlur(firstNameInputRef)}
                ></input>
                <span ref={firstNameSpanResultRef}></span>
            </div>
            <div>
                <label>Last name</label>
                <input ref={lastNameInputRef}
                    onFocus={ () => inputOnFocus(lastNameInputRef) }
                    onChange={ () => validateName(lastNameInputRef,lastNameSpanResultRef) }
                    onBlur={ () => inputOnBlur(lastNameInputRef) }
                 ></input>
                <span ref={lastNameSpanResultRef}></span>
            </div>
            <div>
                <label>Email</label>
                <input ref={emailInputRef}
                    onFocus={ () => inputOnFocus(emailInputRef) }
                    onChange={ () => validateEmail(emailInputRef,emailSpanResultRef) }
                    onBlur={ () => inputOnBlur(emailInputRef) }
                 ></input>
                <span ref={emailSpanResultRef}></span>
            </div>
            <div>
                <label>Password</label>
                <input type='password' ref={passwordInputRef}
                    onFocus={ () => inputOnFocus(passwordInputRef) }
                    onChange={ () => validatePassword(passwordInputRef,passwordSpanResultRef) }
                    onBlur={ () => inputOnBlur(passwordInputRef) }
                ></input>
                <span ref={passwordSpanResultRef}></span>
            </div>
           <div>
                <label>Telugu</label>
                <input type='number' ref={telMarksInputRef}
                    onFocus={() => inputOnFocus(telMarksInputRef)}
                    onChange={() => inputOnChange(telMarksInputRef, telMarksSpanResult)}
                    onBlur={() => inputOnBlur(telMarksInputRef)}
                ></input>
                <span ref={telMarksSpanResult}></span>
            </div>
            <div>
                <label>Hindi</label>
                <input type='number' ref={hinMarksInputRef}
                    onFocus={() => inputOnFocus(hinMarksInputRef)}
                    onChange={() => inputOnChange(hinMarksInputRef, hinMarksSpanResult)}
                    onBlur={() => inputOnBlur(hinMarksInputRef)}
                ></input>
                <span ref={hinMarksSpanResult}></span>
            </div>
            <div>
                <label>English</label>
                <input type='number' ref={engMarksInputRef}
                    onFocus={() => inputOnFocus(engMarksInputRef)}
                    onChange={() => inputOnChange(engMarksInputRef, engMarksSpanResult)}
                    onBlur={() => inputOnBlur(engMarksInputRef)}
                ></input>
                <span ref={engMarksSpanResult}></span>
            </div>
            <div>
                <label>Maths</label>
                <input type='number' ref={mathMarksInputRef}
                    onFocus={() => inputOnFocus(mathMarksInputRef)}
                    onChange={() => inputOnChange(mathMarksInputRef, mathMarksSpanResult)}
                    onBlur={() => inputOnBlur(mathMarksInputRef)}
                ></input>
                <span ref={mathMarksSpanResult}></span>
            </div>
            <div>
                <label>Science</label>
                <input type='number' ref={sciMarksInputRef}                
                    onFocus={() => inputOnFocus(sciMarksInputRef)}
                    onChange={() => inputOnChange(sciMarksInputRef, sciMarksSpanResult)}
                    onBlur={() => inputOnBlur(sciMarksInputRef)}
                ></input>
                <span ref={sciMarksSpanResult}></span>
            </div>
            <div>
                <label>Social</label>
                <input type='number' ref={socMarksInputRef}
                    onFocus={() => inputOnFocus(socMarksInputRef)}
                    onChange={() => inputOnChange(socMarksInputRef, socMarksSpanResult)}
                    onBlur={() => inputOnBlur(socMarksInputRef)}
                ></input>
                <span ref={socMarksSpanResult}></span>
            </div>

            <div>
               <button type='button' onClick={() => {
                        let firstName = firstNameInputRef.current.value;
                        let lastName = lastNameInputRef.current.value;
                        let telMarks = Number(telMarksInputRef.current.value);
                        let hinMarks = Number(hinMarksInputRef.current.value);
                        let engMarks = Number(engMarksInputRef.current.value);
                        let mathMarks = Number(mathMarksInputRef.current.value);
                        let sciMarks = Number(sciMarksInputRef.current.value);
                        let socMarks = Number(socMarksInputRef.current.value);

                        let result;

                        let totalMarks = telMarks + hinMarks + engMarks + mathMarks + sciMarks + socMarks;
                       
                            if (engMarks <35 || telMarks <35 || hinMarks <35 || mathMarks <35 || sciMarks <35 || socMarks <35
                            ){ 
                                result = "Failed"
        
                            }else{
                                result = "Passed"
                            }
                        
                        let perc = ((totalMarks / 600) * 100).toFixed(2);
                
                        resultRef.current.innerHTML = `${firstName} ${lastName} ${result} with total of ${totalMarks} marks, scoring (${perc}%)`;
                    }}
                >Calculate Result</button>
            </div>
            <div>
                <label ref={resultRef}></label>
            </div>
        </form>
  )
}

export default Marksheet
