import React, { Component } from 'react';
import AppContext from "../AppContext";

class App extends Component {
    testFunc = () => {
        console.log('test');
    }
    render() {
        this.testFunc();
        return (
            <AppContext.Provider>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
            </AppContext.Provider>
        );
    }
}

export default App;
