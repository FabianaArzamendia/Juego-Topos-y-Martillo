chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('topos.html', {
      'outerBounds': {
        'width': 400,
        'height': 400
      }
    });
  });
