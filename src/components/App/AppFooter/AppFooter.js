import React from 'react';

import './AppFooter.css';

const AppFooter = (props) => {
    const backToTop = () => {
        console.log("top")
        window.scrollTo( 0,0);
    }
    return (
        <div className="app__footer">
            <p><button onClick={backToTop} className="app-footer__button--normal">Tilbake til toppen</button></p>
        </div>
    );
};

export default AppFooter;