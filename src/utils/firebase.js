import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZlFMxfS37RVjNF3Hu5WTCu0hZBSUSJjk",
  authDomain: "nshop-test.firebaseapp.com",
  projectId: "nshop-test",
  storageBucket: "nshop-test.appspot.com",
  messagingSenderId: "716700128757",
  appId: "1:716700128757:web:4ab9f4259d1ed27b3c7cbc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;