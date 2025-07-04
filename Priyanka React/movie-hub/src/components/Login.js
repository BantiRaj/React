import React, { useState, useRef } from "react";
import { BACKGROUND_IMG_URL } from "./utils/constants";
import Header from "./Header";
import { isFormValid } from "./utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/redux/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const [isSign, setIsSignin] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();


    const onClickHandler = () => {
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        const error = isFormValid(email, password);
        setErrorMsg(error);

        //if there is any validation error it will show the message and return
        if (error) return;

        if (!isSign) {
            let name = nameRef.current.value;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                        const {uid, email, displayName } = auth.currentUser;
                        const payload = {
                            uid: uid,
                            email: email,
                            displayName: displayName
                          }
                        dispatch(addUser(payload));
                    }).catch((error) => {

                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(`${errorCode}: ${errorMessage}`);
                });
        } else {
            //sign in logic
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(`${errorCode}: ${errorMessage}`);
                });

        }
    }

    return (
        <div>
            <Header />
            <div className="absolute bg-cover">
                <img src={BACKGROUND_IMG_URL} alt="logo"></img>
            </div>

            <div>
                <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 my-36 bg-black opacity-80 mx-auto right-0 left-0 text-white rounded-lg">
                    {!isSign ? (
                        <h1 className="font-bold text-3xl">Sign Up</h1>
                    ) : (
                        <h1 className="font-bold text-3xl">Sign In</h1>
                    )}

                    {!isSign && (
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="p-3 m-4 w-full bg-[#131414] border-2 border-gray-500"
                            ref={nameRef}
                        ></input>
                    )}

                    <input
                        type="text"
                        placeholder="Enter email address"
                        className="p-3 m-4 w-full bg-[#131414] border-2 border-gray-500"
                        ref={emailRef}
                    ></input>
                    <input
                        type="password"
                        placeholder="Enter email address"
                        className="p-3 m-4 w-full bg-[#131414] border-2 border-gray-500"
                        ref={passwordRef}
                    ></input>
                    <h6 className="ml-4 text-red-600" >{errorMsg}</h6>
                    <button className="p-3 m-4 bg-[#d9232e] w-full" onClick={() => onClickHandler()}>Sign In</button>
                    {!isSign ? (
                        <p className="m-4 cursor-pointer" onClick={() => setIsSignin(true)}>
                            Already Account Sign In now.
                        </p>
                    ) : (
                        <p
                            className="m-4 cursor-pointer"
                            onClick={() => setIsSignin(false)}
                        >
                            New to Netflix? Sign up now.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
