import { initializeApp } from "firebase/app";
import { getAuth } from "Firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEZjlbk-eovwKRz6kpiHDHQcyv4OUMoLY",
  authDomain: "ema-john-e70c0.firebaseapp.com",
  projectId: "ema-john-e70c0",
  storageBucket: "ema-john-e70c0.appspot.com",
  messagingSenderId: "435254063444",
  appId: "1:435254063444:web:86e3f8b7cb179c5dad98c1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
