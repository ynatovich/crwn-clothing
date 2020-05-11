import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import { Route } from 'react-router-dom';

const HatsPage = () =>
  (
   <div>
    <h1>Hats Page</h1>
   </div> 
  );

  const MensPage = () =>
  (
   <div>
    <h1>Mens Page</h1>
   </div> 
  );

  const WomensPage = () =>
  (
   <div>
    <h1>Womens Page</h1>
   </div> 
  );

  const SneakersPage = () =>
  (
   <div>
    <h1>Sneakers Page</h1>
   </div> 
  );

  const JacketsPage = () =>
  (
   <div>
    <h1>Jackets Page</h1>
   </div> 
  );

class App extends React.Component {
  render() {
    return (
      <div>
        <switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop/hats' component={HatsPage}/>
          <Route exact path='/shop/mens' component={MensPage}/>
          <Route exact path='/shop/womens' component={WomensPage}/>
          <Route exact path='/shop/sneakers' component={SneakersPage}/>
          <Route exact path='/shop/jackets' component={JacketsPage}/>
        </switch>
      </div>
    );
  }
}
export default App;
