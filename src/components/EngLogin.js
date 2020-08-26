import React from 'react';
import {Link} from 'react-router-dom';

class EngLogin extends React.Component {
    render() {
        return(
            <>
                <form className="inputForm">
                    <input type="text" className="input" placeholder="ID" />
                    <input type="text" className="input" placeholder="PASSWORD" />
                    <input type="button" className="loginBtn" value="LOGIN" />
                    <label htmlFor="" className="loginState">
                        <input type="checkbox" name="로그인 상태 유지" id="" />
                        Stay Signed In
                    </label>
                    <label htmlFor="" className="ipSecurity">
                        IP Security
                        <input type="checkbox" name="IP보안" id="" />
                    </label>
                </form>
                <hr className="line" />
                <h2 className="easyLogin">Easier sign in</h2>
                <div className="easyWay">
                    <ul className="easyWayBtns">
                        <li className="qrCode"><Link to="/engqr">QR code</Link></li>
                        <li className="disposable"><Link to="/engdisposable">Disposable number</Link></li>
                    </ul>
                    <ul className="findAccount">
                        <li><a href="/">Find ID</a></li>
                        <li><a href="/">Find password</a></li>
                        <li><a href="/">Sign up</a></li>
                    </ul>
                </div>
            </>
        );
    };
};

export default EngLogin;