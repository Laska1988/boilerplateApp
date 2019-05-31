import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    

    render() {
        return (
            <div className="container">
                <text>[Investor] Deposit</text>
                <input type="text" className="form-control" name="seeddep" placeholder="Seed phrase" aria-label="seeddep" aria-describedby="basic-addon1"/>
                <text> <font size="2" color="grey">It is a demo in Waves testnet. Please keep your seed always carefully</font></text>
                <input type="text" className="form-control" name="amountdep" placeholder="WAVES - Amount" aria-label="amountdep" aria-describedby="basic-addon1"/>
                <input className="btn btn-primary" type="submit" value="Deposit" onClick={() => {alert("Button Deposit");}}/>
                
                <p><text> <font size="3" color="grey">Transaction:</font></text></p>
                

                <text>[Investor] Vote & Invest </text>
                <input type="text" className="form-control" name="seedvi" placeholder="Seed phrase" aria-label="seedvi" aria-describedby="basic-addon1"/>
                <text> <font size="2" color="grey">It is a demo in Waves testnet. Please keep your seed always carefully</font></text>
                <input type="text" className="form-control" name="amountvi" placeholder="WAVES - Amount" aria-label="amountvi" aria-describedby="basic-addon1"/>
                <input type="text" className="form-control" name="propaddr" placeholder="Proposal Address" aria-label="propaddr" aria-describedby="basic-addon1"/>
                <input className="btn btn-primary" type="submit" value="Invest" onClick={() => {alert("Button Invest");}}/>
                
                <p><text> <font size="3" color="grey">Transaction:</font></text></p>
                

                <text>[Startup] Get Funds & Invest </text>
                <input type="text" className="form-control" mame="seedgf"  placeholder="Seed phrase" aria-label="seedgf" aria-describedby="basic-addon1"/>
                <text><font size="2" color="grey">It is a demo in Waves testnet. Please keep your seed always carefully</font></text>
                <input type="text" className="form-control" name="amountgf" placeholder="WAVES - Amount" aria-label="amountgf" aria-describedby="basic-addon1"/>
                <input className="btn btn-primary" type="submit" value="Get Funds" onClick={() => {alert("Button Get Funds");}}/>
                
                <p><text><font size="3" color="grey">Transaction:</font></text></p>

            </div>
        )
    }
}

const but1 = document.getElementById('part1');
if(but1){
    ReactDOM.render(<App/>, but1);
}

/*
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
*/