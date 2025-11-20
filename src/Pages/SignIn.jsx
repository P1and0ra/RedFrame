import React from 'react';
import Heroes from '../components/Heroes/Heroes';
import { NetflixLogo } from '../assets';
import Navbar from '../components/Navbar/Navbar';
function SignIn() {
  return (
    <div>
        <div>
          <Navbar variant="auth" />
        </div>
          <Heroes />
    </div>
  );
}

export default SignIn;