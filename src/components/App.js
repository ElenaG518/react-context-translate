import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';


class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                {/* <div>Select a language
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag mx" onClick={() => this.onLanguageChange('spanish')}/>
                </div> */}
                <LanguageStore>              
              <LanguageSelector  />

                {/* must use keyword value to send value of data we want to share */}
                {/* Provider is a React component created automatically by the context system */}
                {/* there is no limit as to the type of value that can be sent to Provider */}
                {/* <LanguageContext.Provider value={this.state.language}> */}
                    <ColorContext.Provider value='red'>
                        <UserCreate />
                    </ ColorContext.Provider>
                {/* </LanguageContext.Provider> */}
                </LanguageStore>
            </div>
        );
    }
}

export default App;