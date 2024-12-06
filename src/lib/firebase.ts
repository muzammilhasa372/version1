import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'demo.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'demo-project',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'demo.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789012',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:123456789012:web:demo'
};

// Initialize Firebase with error handling
let app;
let auth;
let googleProvider;
let facebookProvider;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
  facebookProvider = new FacebookAuthProvider();
} catch (error) {
  console.error('Firebase initialization error:', error);
  // Fallback to mock auth for development
  auth = {
    currentUser: null,
    signInWithEmailAndPassword: async () => {
      console.warn('Using mock auth - Firebase not properly configured');
      return Promise.resolve({ user: { uid: 'mock-uid', email: 'mock@example.com' } });
    }
  } as any;
  googleProvider = {} as any;
  facebookProvider = {} as any;
}

export { auth, googleProvider, facebookProvider };