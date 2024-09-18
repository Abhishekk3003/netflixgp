import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utilis/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../Utilis/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const[isSignInForm,setIsSignInForm] = useState(true)
    const [errMessage,setErrorMessage] = useState(null)
    const navigate = useNavigate()

    const email = useRef(null) 
    const password = useRef(null)

    const handleButtonClick = () => {
      // validate the form data
      const message = checkValidData(email.current.value,password.current.value)
      setErrorMessage(message)

      if(message) return;
      
      if(!isSignInForm){
        // sign up logic
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
         // Signed up 
        const user = userCredential.user;
        navigate("/browse")
          // ...
  })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    // ..
  });

      }
      else{
        // sign in logic 
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse")
        // ...
  })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" +  errorMessage)
  });


      }
      
    }

    const toggleSignInForm = () => {
         setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-20 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
             {!isSignInForm &&
            <input
            type='text' 
            placeholder='User Name' 
            className='p-4 my-4 w-full bg-gray-600'/>}
            <input
            ref={email}
            type='text'
            placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-600'/>

            <input 
            ref={password}
            type='Password' 
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-700'/>

            <p className='text-red-500 font-bold text-lg py-4 '>{errMessage}</p>

            <button
            className='p-4 my-4 bg-red-700 w-full rounded-lg'
            onClick={handleButtonClick} >{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer'
            onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Allready User Sign In Now"}</p>

        </form>
    </div>
  )
}

export default Login