import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import app from "./firebase"


export async function registerUser(email: string, password: string, userData: any) {
  try {
    const auth = getAuth(app)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    const db = getFirestore(app)
    await setDoc(doc(db, "users", userCredential.user.uid), {
      ...userData,
      createdAt: new Date().toISOString()
    })

    return { success: true, user: userCredential.user }
  } catch (error: any) {
    console.error("Registration error:", error);
    return { 
      success: false, 
      error: error.code === 'auth/network-request-failed' 
        ? 'Network error. Please check your internet connection.' 
        : error.message 
    }
  }
}

export async function loginUser(email: string, password: string, userType: string) {
  try {
    const auth = getAuth(app)
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    
    const db = getFirestore(app)
    const userDoc = await getDoc(doc(db, "users", userCredential.user.uid))
    
    if (!userDoc.exists()) {
      return { success: false, error: "User data not found" }
    }
    
    const userData = userDoc.data()

    if (userData?.userType !== userType) {
      return { success: false, error: "Invalid account type" }
    }

    return { success: true, user: userCredential.user }
  } catch (error: any) {
    console.error("Login error:", error);
    return { 
      success: false, 
      error: error.code === 'auth/network-request-failed' 
        ? 'Network error. Please check your internet connection.' 
        : error.message 
    }
  }
}