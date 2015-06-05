require.config({
  paths: {
    "jquery": "jquery/dist/jquery.min",
    "bootstrap": "bootstrap/dist/js/bootstrap.min"
  },
  shim: {
    "bootstrap": {
      deps: ['jquery']
    }
  }
});