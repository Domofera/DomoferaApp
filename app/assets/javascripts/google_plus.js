var helper = (function() {
  var authResult = undefined;

  return {
    /**
    * Hides the sign-in button and connects the server-side app after
    * the user successfully signs in.
    *
    * @param {Object} authResult An Object which contains the access token and
    *   other authentication information.
    */
    onSignInCallback: function(authResult) {
      $('#authResult').html('Auth Result:<br/>');
      for (var field in authResult) {
        $('#authResult').append(' ' + field + ': ' + authResult[field] + '<br/>');
      }
      if (authResult['access_token']) {
        // The user is signed in
        this.authResult = authResult;
        helper.connectServer();
        // After we load the Google+ API, render the profile data from Google+.
        gapi.client.load('plus','v1',this.renderProfile);
      } else if (authResult['error']) {
        // There was an error, which means the user is not signed in.
        // As an example, you can troubleshoot by writing to the console:
        console.log('There was an error: ' + authResult['error']);
        $('#authResult').append('Logged out');
        $('#authOps').hide('slow');
        $('#gConnect').show();
      }
      console.log('authResult', authResult);
    },
    /**
    * Retrieves and renders the authenticated user's Google+ profile.
    */
    renderProfile: function() {
      var request = gapi.client.plus.people.get( {'userId' : 'me'} );
      request.execute( function(profile) {
        $('#profile').empty();
        if (profile.error) {
          $('#profile').append(profile.error);
          return;
        }
        $('#profile').append(
          $('<p><img src=\"' + profile.image.url + '\"></p>'));
          $('#profile').append(
            $('<p>Hello ' + profile.displayName + '!<br />Tagline: ' +
            profile.tagline + '<br />About: ' + profile.aboutMe + '</p>'));
            if (profile.cover && profile.coverPhoto) {
              $('#profile').append(
                $('<p><img src=\"' + profile.cover.coverPhoto.url + '\"></p>'));
              }
            });
            $('#authOps').show('slow');
            $('#gConnect').hide();
          },
          /**
          * Calls the server endpoint to disconnect the app for the user.
          */
          disconnectServer: function() {
            // Revoke the server tokens
            $.ajax({
              type: 'POST',
              url: window.location.href + '/disconnect',
              async: false,
              success: function(result) {
                console.log('revoke response: ' + result);
                $('#authOps').hide();
                $('#profile').empty();
                $('#visiblePeople').empty();
                $('#authResult').empty();
                $('#gConnect').show();
              },
              error: function(e) {
                console.log(e);
              }
            });
          },
          /**
          * Calls the server endpoint to connect the app for the user. The client
          * sends the one-time authorization code to the server and the server
          * exchanges the code for its own tokens to use for offline API access.
          * For more information, see:
          *   https://developers.google.com/+/web/signin/server-side-flow
          */
          connectServer: function() {
            console.log(this.authResult.code);
            $.ajax({
              type: 'POST',
              url: window.location.href + '/connect?state={{ STATE }}',
              contentType: 'application/octet-stream; charset=utf-8',
              success: function(result) {
                console.log(result);
                helper.people();
              },
              processData: false,
              data: this.authResult.code
            });
          },
          /**
          * Calls the server endpoint to get the list of people visible to this app.
          */
          people: function() {
            $.ajax({
              type: 'GET',
              url: window.location.href + '/people',
              contentType: 'application/octet-stream; charset=utf-8',
              success: function(result) {
                helper.appendCircled(result);
              },
              processData: false
            });
          },
          /**
          * Displays visible People retrieved from server.
          *
          * @param {Object} people A list of Google+ Person resources.
          */
          appendCircled: function(people) {
            $('#visiblePeople').empty();

            $('#visiblePeople').append('Number of people visible to this app: ' +
            people.totalItems + '<br/>');
            for (var personIndex in people.items) {
              person = people.items[personIndex];
              $('#visiblePeople').append('<img src="' + person.image.url + '">');
            }
          },
        };
      })();

      /**
      * Perform jQuery initialization and check to ensure that you updated your
      * client ID.
      */
      $(document).ready(function() {
        $('#disconnect').click(helper.disconnectServer);
        if ($('[data-clientid="YOUR_CLIENT_ID"]').length > 0) {
          alert('This sample requires your OAuth credentials (client ID) ' +
          'from the Google APIs console:\n' +
          '    https://code.google.com/apis/console/#:access\n\n' +
          'Find and replace YOUR_CLIENT_ID with your client ID and ' +
          'YOUR_CLIENT_SECRET with your client secret in the project sources.'
        );
      }
    });

    /**
    * Calls the helper method that handles the authentication flow.
    *
    * @param {Object} authResult An Object which contains the access token and
    *   other authentication information.
    */
    function onSignInCallback(authResult) {
      helper.onSignInCallback(authResult);
    }
