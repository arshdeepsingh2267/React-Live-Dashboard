import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#fcdf03"}}>
                    <div className="container-fluid">

                        <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCoin'
                            style={{ width: "fit-content" }} onChange={this.props.handle_Submit}>
                            <option value="bitcoin">Select Coin</option>
                            <option value="avalanche-2">Avalanche (AVAX)</option>
                            <option value="binancecoin">Binance (BNB)</option>
                            <option value="bitcoin">Bitcoin (BTC) </option>
                            <option value="cardano">Cardano (ADA)</option>
                            <option value="decentraland">Decentraland (MANA)</option>
                            <option value="dogecoin">Dogecoin (DOGE)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="ripple">Ripple (XRP)</option>
                            <option value="solana">Solana (SOL)</option>
                            <option value="tether">Tether (USDT)</option>
                        </select>

                        <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}} href="/">Crypto 
                            Dashboard</a>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header