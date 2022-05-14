import React from 'react';
import Nav from './nav';

const Layout = ({children})=>{
    return(
        <div className="container">
            <Nav />
            <main>
                {children}
            </main>
            <footer>
                build by Hasan
            </footer>
        </div>
    )
}
export default Layout;