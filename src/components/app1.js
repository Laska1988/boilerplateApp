import ReactDOM from "react-dom";
import React from 'react';

/*const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Button1" onClick={() => {alert("!!! Alert button onClick");}}/>
            </div>
        )
    }
}

const but1 = document.getElementById('part1');
if(but1){
    ReactDOM.render(<App/>, but1);
}


class But2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Button2" onClick={() => {alert("!!! Alert button onClick");}}/>
            </div>
        )
    }
}

const but2 = document.getElementById('app');
if(but2){
    ReactDOM.render(<App/>, but2);
}