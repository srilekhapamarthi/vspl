// Steps to insert current vessels to firebase
// 1) check whether the user is logged in.
//   1-a) If user is logged in, then submit the entry form.
//     1-a-1) collect all the input fields using DOM , form a json and submit it to firebase.
//   1-b) If user is not logged in, then dont submit the entry form.redirect him to a login page.
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var vesselName = document.getElementById('vessel-name').nodeValue;
      var cargoType = document.getElementById('cargo-type').nodeValue;
      var activity = document.getElementById('activity').nodeValue;
      var account = document.getElementById('account').nodeValue;
      var agent = document.getElementById('agent').nodeValue;
      var targetQty = document.getElementById('tar_q').nodeValue;
      var todayQty = document.getElementById('tod_q').nodeValue;
      var cumul = document.getElementById('cumulative').nodeValue;
      var bal = document.getElementById('balance').nodeValue;
    } else {
      // User is signed out.
      // ...
    }
  });