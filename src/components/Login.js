import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import logo from '../images/logo.svg';
import bg from '../images/bg.jpg';

function Login(props) {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    photo: result.user.photoURL,
                };
                localStorage.setItem('user', JSON.stringify(newUser));
                props.setUser(newUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <Container>
            <Content>
                <SlackLogo src={logo} />
                <SignInButton onClick={() => signIn()}>
                    Continue with google
                </SignInButton>
            </Content>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.8px);
    -webkit-backdrop-filter: blur(9.8px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: relative;
`;

const SlackLogo = styled.img`
    width: 120px;
    position: absolute;
    top: -20px;
    background: #ffffffe0;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const SignInButton = styled.button`
    background-color: #4749a1;
    border: none;
    padding: 8px 30px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    text-transform: capitalize;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    :hover {
        background-color: #1c1e4f;
    }
`;
