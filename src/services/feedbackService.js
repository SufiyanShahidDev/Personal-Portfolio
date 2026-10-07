import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured } from "../firebase/config";

export const saveFeedback = async (feedback) => {
  if (!isFirebaseConfigured || !db) {
    throw new Error("Firebase is not configured. Add your Firebase values to the .env file first.");
  }

  await addDoc(collection(db, "feedback"), {
    ...feedback,
    createdAt: serverTimestamp()
  });
};
