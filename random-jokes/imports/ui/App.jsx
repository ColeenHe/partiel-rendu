import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home   from '/imports/ui/Pages/Home';
import Signin from '/imports/ui/Pages/Signin';
import Signup from '/imports/ui/Pages/Signup';
import Room from '/imports/ui/Pages/Room';
import Blaguealeatoire from '/imports/ui/Pages/Blaguealeatoire';
import Joke from '/imports/ui/Pages/Joke';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}   />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/room" component={Room} />
        <Route path="/blaguealeatoire" component={Blaguealeatoire} />
        <Route path="/joke" component={Joke} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;