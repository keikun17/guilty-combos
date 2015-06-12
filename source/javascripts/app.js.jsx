//= require react/react-with-addons
//= require react-router
//= require guilty_combos_app

// var GuiltyCombosApp = require('./GuiltyCombosApp');
// var React = require('react');
// var Router = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={GuiltyCombosApp}>
    <Route name="/" handler={GuiltyCombosApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
