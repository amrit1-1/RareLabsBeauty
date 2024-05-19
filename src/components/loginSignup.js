import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { NameContext, LogInContext } from "../App";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const FNAME_REGEX = /^[a-zA-Z]{3,15}$/;
const SNAME_REGEX = /^[a-zA-Z]{3,15}$/;
const EMAIL_REGEX = /^(?=.{1,81}$)[\w\.-]+@[\w\.-]+\.\w{2,4}$/;

const LoginSignup = () => {
    // Autofocuses to user field or an error field if there's an error
    const userRef = useRef();
    const errRef = useRef();

    // Tied to user input
    const [user, setUser] = useState("");
    // Tied to whether the name validates or not
    const [validName, setValidName] = useState(false);
    // Whether we have focus on the input field or not
    const [userFocus, setUserFocus] = useState(false);

    // Same for first name except grabs first name from context
    const value = useContext(NameContext);
    let [fName, setFName] = value;
    const [validFName, setValidFName] = useState(false);
    const [fNameFocus, setFNameFocus] = useState(false);

    // Same for surname
    const [sName, setSName] = useState("");
    const [validSName, setValidSName] = useState(false);
    const [sNameFocus, setSNameFocus] = useState(false);

    // Same for email
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    // Same for password
    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // Same for match password
    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    // For possible error message if one exists
    const [errMsg, setErrMsg] = useState("");

    // To set the log in info
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    //To set whether the login is a success or not
    const otherValue = useContext(LogInContext);
    let [loggedIn, setLoggedIn] = otherValue;

    // Applied to username to validate it
    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    },[user])

    // Applied to first name to validate it
    useEffect(() => {
        const result = FNAME_REGEX.test(fName);
        setValidFName(result);
    },[fName])

    // Applied to second name to validate it
    useEffect(() => {
        const result = SNAME_REGEX.test(sName);
        setValidSName(result);
    },[sName])

    // Applied to email to validate it
    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    },[email])

    // Validates password and compares to 'confirm password'
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    // Clears error message when user changes the details
    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd])

    // Handles the user info when the user submits it
    const handleSubmit = async (e) => {
        setLoggedIn("signing in");
    }

    // Handles the user input when the user submits it
    // Ensures the log in info matches the info the user registered with
    const logIn = async (e) => {
        if (user === usernameInput && pwd === passwordInput) {
            setLoggedIn("logged in");
        } else {
            setLoggedIn("invalid");
        }
    }

    return (
        <>
        {(loggedIn === "logged in") ? (
            <>
            <h1 className="welcome">Welcome, {fName}!</h1>
            <p>You are part of our Silver rewards tier!</p>
            <Link className="explore" to="/shop">Shop</Link>
            <br />
            <button className="second-button" onClick={() => {setLoggedIn("not logged in")}}>Sign Out</button>
            </>
        ): null}

        {(loggedIn === "not logged in") ?(
            <div>
            {/*Displays error message*/}
            <p ref={errRef} aria-live="assertive">{errMsg}</p>
            <h1 className="welcome">Register</h1>
            <form onSubmit={handleSubmit}>
                {/*Input field for the users first name*/}
                <div>
                <label htmlFor="firstName">
                    First Name:
                </label>
                <input 
                    text="text"
                    id="firstName"
                    autoComplete="off"
                    onChange={(e) => setFName(e.target.value)}
                    required
                    onFocus={() => setFNameFocus(true)}
                    onBlur={() => setFNameFocus(false)}
                />
                {/*Only shows requirements when you start typing */}
                {fNameFocus && fName && !validFName ? (
                    <p>Must have 3 to 15 characters.</p>
                ): null}
                </div>

                {/*Input field for the users second name*/}
                <div>
                <label htmlFor="surname">
                    Surname:
                </label>
                <input 
                    text="text"
                    id="surname"
                    autoComplete="off"
                    onChange={(e) => setSName(e.target.value)}
                    required
                    onFocus={() => setSNameFocus(true)}
                    onBlur={() => setSNameFocus(false)}
                />
                {/*Only shows requirements when you start typing */}
                {sNameFocus && sName && !validSName ? (
                    <p>Must have 3 to 15 characters.</p>
                ): null}
                </div>

                {/*Input field for the users username*/}
                <div>
                <label htmlFor="username">
                    Username:
                </label>
                <input 
                    text="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                {/*Only shows requirements when you start typing */}
                {userFocus && user && !validName ? (
                    <p>
                        5 to 23 characters. <br />
                        Must begin with a letter. <br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>
                ): null}
                </div>

                {/*Input field for the users username*/}
                <div>
                <label htmlFor="email">
                    Email:
                </label>
                <input 
                    type="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />
                {/*Only shows requirements when you start typing */}
                {emailFocus && email && !validEmail ? (
                    <p>Invalid email.</p>
                ): null}
                </div>

                {/*Input field for the users password*/}
                <div>
                <label htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                {validPwd ? (
                    <p>valid</p>
                ): null}
                {validPwd || !pwd ? null : (
                    <p>invalid</p>
                )}
                {/*Only shows if input is on focus*/}
                {pwdFocus && !validPwd ? (
                    <p>
                        8 to 24 characters. <br />
                        Must include uppercase and lowercase letters, a number and a special character. <br />
                        Allowed special characters: !@#$%
                    </p>
                ): null}
                </div>

                {/*Input field for the user to confirm password*/}
                <div>
                    <label htmlFor="confirm_pwd">
                        Confirm Password:
                    </label>
                    <input 
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    {matchFocus && !validMatch ? (
                        <p>Passwords must match.</p>
                    ): null}
                </div>

                {/*Disables the button if any of the input fields are invalid*/}
                <button 
                    className={!validName || !validPwd || !validMatch || !validFName || !validSName ? "disabled-button": "button"} 
                    disabled={!validName || !validPwd || !validMatch || !validFName || !validSName ? true: false}>
                    Enter & Go To Sign In
                </button>
            </form>

            <p>Already registered?</p>
            <button className="button" onClick={() => {setLoggedIn("signing in")}}>Go to Sign In</button>
        </div>
        ): null }

        {(loggedIn === "invalid") ? (
            <>
            <h1 className="welcome">Not Found</h1>
            <p>We couldn't find an account with those details.</p>
            <button type="button" className="button" onClick={() => setLoggedIn("signing in")}>Back to Sign In</button>
            </>
        ): null}

        {(loggedIn === "signing in") ? (
            <>
            <div>
            <h1 className="welcome">Sign In</h1>
            <form onSubmit={logIn}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setUsernameInput(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPasswordInput(e.target.value)}
                    required
                />
                <button 
                className={usernameInput != "" && passwordInput != "" ? "button": "disabled-button"} 
                disabled={usernameInput != "" && passwordInput != "" ? false: true}>
                    Log In
                </button>
            </form>
            </div>

            <p>Not registered?</p>
            <button className="button" onClick={() => {setLoggedIn("not logged in")}}>Go to Sign Up</button>
        </>
        ): null}
        </>
    );
}

export default LoginSignup;