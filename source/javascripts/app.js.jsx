
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

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
