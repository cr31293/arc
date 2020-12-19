import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/theme';
import Header from './components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={()=> <div>home</div>} />
          <Route exact path="/services" component={()=> <div>services</div>} />
          <Route exact path="/customsoftware" component={()=> <div>customsoftware</div>} />
          <Route exact path="/mobileapps" component={()=> <div>mobileapps</div>} />
          <Route exact path="/websites" component={()=> <div>websites</div>} />
          <Route exact path="/revolution" component={()=> <div>revolution</div>} />
          <Route exact path="/about" component={()=> <div>about us</div>} />
          <Route exact path="/contact" component={()=> <div>contact us</div>} />
          <Route exact path="/estimate" component={()=> <div>estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
