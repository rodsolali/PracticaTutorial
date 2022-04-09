
import { Injectable } from '@angular/core';
import { Estudiante } from './../models/estudiante';
import {AngularFirestore} from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private firestore: AngularFirestore) { }

  createStudent(student:Estudiante){
    return this.firestore.collection('estudiante').add(student);
  }

  getStudents () {
    return this.firestore.collection('estudiante').snapshotChanges ();
  }
}
