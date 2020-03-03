import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afya';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDLDFaQcCkTj19OZ1nP0LOlmSBOFG0qQbQ",
      authDomain: "afya-8b206.firebaseapp.com",
      databaseURL: "https://afya-8b206.firebaseio.com",
      projectId: "afya-8b206",
      storageBucket: "afya-8b206.appspot.com",
      messagingSenderId: "13368432863",
      appId: "1:13368432863:web:cd016fc3cc6ad438a9716a",
      measurementId: "G-GQQ0Y21WH2"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
