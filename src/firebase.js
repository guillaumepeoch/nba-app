import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_CsN6TAW4UBaWwz02lpsKCNZqKyfjyCw",
    authDomain: "nba-app-fe94c.firebaseapp.com",
    databaseURL: "https://nba-app-fe94c.firebaseio.com",
    projectId: "nba-app-fe94c",
    storageBucket: "nba-app-fe94c.appspot.com",
    messagingSenderId: "592077906893"
  };

  firebase.initializeApp(config);

  const firebaseLooper = function(object){
    const data = [];
    for(let param in object){
      data.push({
          ...object[param],
          id:param
      });
    }
    return data
  }

  const firebaseDB = firebase.database();

  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
  }
