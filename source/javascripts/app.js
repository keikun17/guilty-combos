'use strict';

var GuiltyCombosApp = require('./GuiltyCombosApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={GuiltyCombosApp}>
    <Route name="/" handler={GuiltyCombosApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
