import React from 'react'
import styled from 'styled-components'

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <Avater>
                <img src={image} alt="Avater"/>
            </Avater>
            <MessageContainer>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContainer>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    :hover {
        background: #F0F1F5;
        transition: .3s;
    }
`

const Avater = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;

    img {
        width: 100%;
    }
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
`

const Name = styled.span`
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #1d1c1d;
    span {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #616061;
        margin-left: 8px;
    }
`

const Text = styled.span`
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #1d1c1d;
`