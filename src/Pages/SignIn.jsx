import React from 'react';
import Heroes from '../components/Heroes/Heroes';
import { NetflixLogo } from '../assets';
function SignIn() {
  return (
    <div>
        <div style={{backgroundColor: 'black', padding: '20px'}}>
            <img src={NetflixLogo} alt="Netflix Logo" style={{width: '150px'}} />
        </div>
        <Heroes />
    </div>
  );
}

export default SignIn;