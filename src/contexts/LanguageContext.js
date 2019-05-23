import React from 'react';

// For values that get shared we can use any type of valid javascript
//  value (string, array, object, number, etc)



// the consumer and Provider components are created automatically when we create a new context object.

//here we are exporting a new context object and giving it an intiial value of "english"
// export default React.createContext('english');

// if using store in context
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english'};

  onLanguageChange = language => {
    this.setState({language});
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

 