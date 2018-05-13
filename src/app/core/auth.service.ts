import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth}from 'angularfire2/auth';
import{AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import{Observable} from 'rxjs/Observable';
import{switchMap} from 'rxjs/operators';


@Injectable()
export class AuthService {

  constructor() { }

}
