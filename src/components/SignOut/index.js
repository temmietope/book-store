import React from 'react';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
  <span onClick={firebase.signOutUser}>
    Sign Out
  </span>
);
export default withFirebase(SignOutButton);