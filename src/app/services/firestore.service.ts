import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  createDoc(data: Usuario, path: string, id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private firestore: AngularFirestore) { }



  creatDoc(data: any, path: string, id: string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }
  getId(){
    return this.firestore.createId();
  }
  getCollection<tipo>(path: string){
    const collection = this.firestore.collection<tipo>(path);
    return collection.valueChanges();
  }
  getDoc<tipo>(path: string, id: string){
    return this.firestore.collection(path).doc<tipo>(id).valueChanges()
  }
  updateDoc(path: string, id: string, data: any){
    return this.firestore.collection(path).doc(id).update(data)
  }
  
}
