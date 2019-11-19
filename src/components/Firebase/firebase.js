import app from "firebase";

const config = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID

  apiKey: "AIzaSyCHNphtFqPpHjvb-KtplIIfXLMed5bg-0c",
  authDomain: "book-store-64eab.firebaseapp.com",
  databaseURL: "https://book-store-64eab.firebaseio.com",
  projectId: "book-store-64eab",
  storageBucket: "book-store-64eab.appspot.com",
  messagingSenderId: "853377381855",
  appId: "1:853377381855:web:c78e039fc13065c293406a"
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***

  //to sign up
  createUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //to sign in
  signInUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //to sign out
  signOutUser = () => this.auth.signOut();

  //to reset password
  resetUserPassword = email => this.auth.sendPasswordResetEmail(email);

  //to update password
  updateUserPassword = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  userBooks = uid => this.db.ref(`users/${uid}/`);
  users = () => this.db.ref("users");

  // *** Book API ***
  book = bid => this.db.ref(`books/${bid}`);
  books = () => this.db.ref(`books`);

  // *** Cart API ***
  cartitem = cid => this.db.ref(`cart/${cid}`);
  cart = () => this.db.ref(`cart`);
}

export default Firebase;
