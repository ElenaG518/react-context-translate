import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    //must be called contextType
    // static adds a property directly to the class Button itself
    static contextType = LanguageContext;

    
    
    render() {
        const text = this.context.language ==='english' ? 'Name' : 'Nombre';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }    
} 

export default Field;