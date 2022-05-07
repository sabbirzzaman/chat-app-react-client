import React from 'react'
import styled from 'styled-components'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatInput from './ChatInput'

function Chat({ user }) {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        <StarBorderIcon />
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide announcements and work based matters
                    </ChannelInfo>
                </Channel>

                <ChannelDetails>
                    <PersonAddIcon />
                    <HelpOutlineIcon />
                </ChannelDetails>
            </Header>

            <ChatArea>
                
            </ChatArea>
            <ChatInput/>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`
const Header = styled.div`
    padding: 0px 20px;
    display: flex;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    justify-content: space-between;
`
const ChatArea = styled.div`
    background: #F5F6F1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

const Channel = styled.div`

`

const ChannelName = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: #1d1c1d;
    display: flex;
    align-items: center;

    svg {
        margin-left: 5px;
        width: 15px;
    }
`

const ChannelInfo = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: rgba(29, 28, 29, 0.7);
`
const ChannelDetails = styled.div`
    display: flex;
    align-items: center;

    svg{
        margin-left: 10px;
    }
`