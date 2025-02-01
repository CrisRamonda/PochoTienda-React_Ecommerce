import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })
    return products
}

export const getProductsByCategory = async (prodCategory) => {
    const q = query(collection(db, "products"), where("category", "==", prodCategory))
    const products = []
    
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })
    return products
}