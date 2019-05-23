import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderSubmit(language) {
        return language ==="english" ? "Submit" : "Enviar"
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`} >
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
                </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer >
                {color => this.renderButton(color)}
                 {/* we always provide ONE child, which will ALWAYS be a function */}
                 {/* that component will take that child function and automatically invoke it */}
                 {/* {(value) => value ==='english' ? 'Name' : "Nombre"} */}    
            </ColorContext.Consumer> 
        )
    }       
} 

// instead of using:
// static contextType = LanguageContext, we can write the following, 
// outside of the class declaration

// Button.contextType = LanguageContext;

export default Button;