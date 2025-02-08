import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { TrainingCard } from '../interfaces/traning-card.interface';
import { ProgramCard } from '../interfaces/program-card.interface';
import { ContentCard } from '../interfaces/content-card.interface';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getTrainingCards(): Observable<TrainingCard[]> {
    return this.firestore
      .collection<TrainingCard>('online-coach')
      .valueChanges();
  }

  getProgramCards(): Observable<ProgramCard[]> {
    return this.firestore.collection<ProgramCard>('programs').valueChanges();
  }

  getContentCards(): Observable<ContentCard[]> {
    return this.firestore.collection<ContentCard>('contents').valueChanges();
  }

  getCardById(collection: string, id: string): Observable<any> {
    return this.firestore.collection(collection).doc(id).valueChanges();
  }

  addCard(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  updateCard(collection: string, id: string, data: any) {
    return this.firestore.collection(collection).doc(id).update(data);
  }

  deleteCard(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).delete();
  }
}
