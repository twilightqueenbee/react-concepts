import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";


export const createDocument=async (collectionName,data) => {
   try {
     const docRef=await addDoc(collection(db,collectionName),data)
   //   console.log("Document created sucessfully with Id : "+ docRef.id)
     return docRef.id
   } catch (error) {
    console.log("We are facing Error" + error)
   }
}

export const fetchDocuments=async (collectionName) => {
   try {
     const querySanpshot=await getDocs(collection(db,collectionName))
    const alldocs=[]
   querySanpshot.forEach((doc)=>{
    alldocs.push({id:doc.id,...doc.data()})
   })
   return alldocs
   } catch (error) {
    console.log(error)
   }
}


export const getUserById=async (id,collectionName) => {
  try {
    const userDocSanpShort=await getDoc(doc(db,collectionName,id))
    return {id:userDocSanpShort.id,...userDocSanpShort.data()}
  } catch (error) {
   console.log(error)
  }

}
export const updateDocument=async (collectionName,docId,data) => {
     try {
      const docRef=doc(db,collectionName,docId)
            await updateDoc(docRef,data)
            console.log("Document updated:", docId)
        } catch (error) {
            console.error("Error updating document:", error);
        }
}

export const deleteDocument=async (collectionName,docId) => {
    try {
      const docRef=doc(db,collectionName,docId)
      await deleteDoc(docRef)
    } catch (error) {
      console.log(error)
    }
}