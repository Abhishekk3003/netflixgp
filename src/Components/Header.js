import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../Utilis/firebase";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utilis/userSlice';

const Header = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const user = useSelector(store => store?.user);

   const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
     
      
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
   }
   useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email  } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            
          })
        );
        // navigate("/browse")
        
      } else {
        dispatch(removeUser());
        // navigate("/")
      }
    });

    return () => unsubscribe()
  }, []);
   

  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img 
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

{/* user && */}
      { <div className='flex p-2'>
        <img className='w-12 h-12' src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt='user'/>
        <button onClick={handleSignOut}>  (Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header