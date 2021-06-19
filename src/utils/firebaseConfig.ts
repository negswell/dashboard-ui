import firebase from 'firebase';
import '@firebase/auth';

/** Firebase Config */
const firebaseConfig = {
  apiKey: 'AIzaSyAse0Wv0ZvTMFplV00CuDTTViiW44a7sTo',
  authDomain: 'employee-review-dashboard.firebaseapp.com',
  projectId: 'employee-review-dashboard',
  storageBucket: 'employee-review-dashboard.appspot.com',
  messagingSenderId: '691275542336',
  appId: '1:691275542336:web:856707771de028f84194a5',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
