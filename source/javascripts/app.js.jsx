//= require react/react-with-addons
//= require react-router
//= require config
//= require GuiltyCombosApp

var content = document.getElementById('content');

var Routes = (
  <Route handler={GuiltyCombosApp}>
    <Route name="/" handler={GuiltyCombosApp}/>
  </Route>
);

var run = Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
