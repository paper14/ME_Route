require.config({
  paths: {
    "jquery": "/jquery/dist/jquery.min",
    "bootstrap": "/bootstrap/dist/js/bootstrap.min",
    "react": "/react/react.min",
    "jsx": "/react/JSXTransformer"
  },
  shim: {
    "bootstrap": {
      deps: ['jquery']
    },
    "react": {
      deps: ['jsx']
    }
  }
});