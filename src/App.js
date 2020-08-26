import React from 'react';
import './App.css';
import Logo from './components/Logo';
import KorLogin from './components/KorLogin';
import EngLogin from './components/EngLogin';
import Footer from './components/Footer';
import Advertise from './components/Advertise';
import { HashRouter, Route } from 'react-router-dom';
import KorQr from './components/KorQr';
import EngQr from './components/EngQr';
import KorDisposable from './components/KorDisposable';
import EngDisposable from './components/EngDisposable';
import SignUp from './components/SignUp';

class App extends React.Component {
    state = {
        mode: 'Kor',
    };

    article = null;

    modeControl() {
        if (this.state.mode === 'Kor') {
            this.article = <Route path="/" exact={true} component={KorLogin} />;
        } else if (this.state.mode === 'Eng') {
            this.article = <Route path="/" exact={true} component={EngLogin} />;
        }
    }

    render() {
        this.modeControl();

        return (
            <div className="loginWrap">
                <header className="selectLanguage">
                    <select
                        name="Language"
                        id=""
                        onChange={function (e) {
                            e.preventDefault();
                            this.setState({ mode: e.target.value });
                        }.bind(this)}
                    >
                        <option value="Kor">한국어</option>
                        <option value="Eng">English</option>
                        <option value="한국어">한국어</option>
                        <option value="한국어">한국어</option>
                    </select>
                </header>

                <div className="App">
                    <Logo />
                    {/*네이버 로고*/}

                    <HashRouter>
                        {this.article}
                        <Route path="/korqr" exact={true} component={KorQr} />
                        <Route path="/engqr" exact={true} component={EngQr} />
                        <Route
                            path="/kordisposable"
                            exact={true}
                            component={KorDisposable}
                        />
                        <Route
                            path="/engdisposable"
                            exact={true}
                            component={EngDisposable}
                        />
                        <Route path="/signup" exact={true} component={SignUp} />
                    </HashRouter>

                    <Advertise />

                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
