import React, {useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { IMG_URL } from './utils/constants';
import { signOut } from 'firebase/auth';
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/redux/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const signOutHandler = () => {
    signOut(auth).then(() => {

      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        const payload = {
          uid: uid,
          email: email,
          displayName: displayName
        }
        dispatch(addUser(payload));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10'>
      <div className='flex justify-between'>
        <img src={IMG_URL} alt="logo" className='w-44' />
        {
          user && (
            <div className='p-4 font-bold text-white'>
              <span className='mr-4'>{user?.displayName}</span>
              <button className='cursor-pointer mr-4' onClick={signOutHandler}>Sign Out</button>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Header