import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const signUp = 'signUp';
                        const signUpList = [];
                        const LS_item = JSON.parse(
                            localStorage.getItem(signUp),
                        );
                        if (LS_item !== null) {
                            signUpList.push(...LS_item);
                        }
                        const signUpObject = {
                            id: e.target.id.value,
                            pw: e.target.pw.value,
                        };
                        signUpList.push(signUpObject);
                        localStorage.setItem(
                            signUp,
                            JSON.stringify(signUpList),
                        );
                    }}
                    action="http://localhost:3000/"
                    // method="post"
                >
                    <input
                        name="id"
                        type="text"
                        placeholder="아이디"
                        className="input"
                    />
                    <input
                        name="pw"
                        type="password"
                        placeholder="비밀번호"
                        className="input"
                    />
                    <input
                        type="submit"
                        className="loginBtn"
                        value="회원가입"
                    />

                    <div>
                        <Link to="/" className="backToHome">
                            취소
                        </Link>
                    </div>
                    <ul>{this.liList}</ul>
                </form>
            </div>
        );
    }
}

export default SignUp;
