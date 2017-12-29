

//something like this for posting user / login

callApi: function() {
    let postUser = fetch('/api/login', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      },
      method: 'POST',
      cache: false
    });
  
    postUser.then(function (response) {
      response.json().then(function (foos) {
        // Put the results on a property
        // to be displayed in the view
        console.log('the foos:', foos);
      });
    });
  }