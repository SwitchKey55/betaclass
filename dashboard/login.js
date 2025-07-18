<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Login – BetaClass</title>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: Arial, sans-serif; }
    .g-signin2 { display: block; margin: 20px auto; }
  </style>
</head>
<body>
  <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
  <script>
    function onSignIn(googleUser) {
      // Get the user's profile information
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your server!
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This should be kept server-side. Make sure you review the Google+ Sign-In documentation.

      // The ID token you need to validate
      var id_token = googleUser.getAuthResponse().id_token;
      console.log('ID Token: ' + id_token);

      // Redirect to the dashboard after successful login
      window.location.href = 'index.html';
    }
  </script>
</head>
<body>
</body>
</html>
