import firebase from 'firebase'

let config = {
  apiKey: '<AIzaSyBMnGFqzGTHNSCPOLBn9QLPnmMFAJnQ_qs',
  authDomain: 'chonsgym.firebaseapp.com',
  databaseURL: 'https://chonsgym.firebaseio.com',
  storageBucket: 'chonsgym.appspot.com'
}
firebase.initializeApp(config)

const storage = firebase.storage()

export default storage
