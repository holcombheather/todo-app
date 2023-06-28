import React from 'react';
import SettingsProvider from './Context/Settings';

import Header from './Components/Header';
import Todo from './Components/Todo';
import List from './Components/List';
import Footer from './Components/Footer';


export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <Header />
        <Todo />
        <Footer />
      </SettingsProvider>
    );
  }
}
