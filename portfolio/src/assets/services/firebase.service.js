// firebase.service.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firebaseConfig } from "./config.service"

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtiene una referencia a la colección "proyectos" en Firestore
const proyectosCollection = firebase.firestore().collection('Proyectos');

// Función para obtener todos los documentos de la colección "proyectos"
const obtenerProyectos = async () => {
  try {
    // Implementa la paginación para obtener los datos en lotes
    const snapshot = await proyectosCollection.limit(10).get();
    const proyectos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return proyectos;
  } catch (error) {
    console.error('Error al obtener proyectos:', error);
    // Proporciona más información al usuario
    throw new Error('No se pudieron obtener los proyectos. Por favor, inténtalo de nuevo más tarde.');
  }
};

export { obtenerProyectos };
