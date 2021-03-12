import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name : result.user.displayName,
                photo : result.user.photoURL
            }
            props.setUser(newUser);
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <Container>
            <Content>
                <SlackLogo src="https://i.imgur.com/oHhRbZ1.png" />
                <h1>Sign In Slack To Slack</h1>
                <SignInButton onClick = { () => signIn() }>
                    Sign in With Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    background: #FFFFFF;
    padding: 100px;
    border-radius: 8px;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-top: 20px;
    }
`

const SlackLogo = styled.img`
    width: 100px;
    background: #1264a3;
    padding: 20px;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const SignInButton = styled.button`
    cursor: pointer;
    margin-top: 50px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    background: #1264a3;
    border: none;
    border-radius: 4px;
    color: #FFFFFF;

    :hover {
        background: #19496e;
    }

    :focus {
        outline: none;
    }
`