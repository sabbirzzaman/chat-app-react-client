import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from "react-router-dom";
import firebase from 'firebase'

function Chat({ user }) {

    let { channelId } = useParams()

    const [channel, setChannel] = useState([]);
    const [messages, setMessages] = useState([]);

    const getMessage = () => {
        db.collection('room')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapShot)=>{
            let messages = snapShot.docs.map((doc)=>doc.data());
            console.log(messages)
            setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId) {
            let payload = {
                text: text, 
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name, 
                userImage: user.photo,
            }
            db.collection('room').doc(channelId).collection('messages').add(payload);
        }
    }

    const getChannel = () => {
        db.collection('room')
        .doc(channelId)
        .onSnapshot((snapShot)=>{
            setChannel(snapShot.data());
        })
    }

    useEffect (()=>{
        getChannel();
        getMessage();
    }, [channelId])


    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel.name}
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
                {
                    messages.length > 0 &&
                    messages.map((data, index)=>(
                        <ChatMessage 
                        text={data.text}
                        name={data.user}
                        image={data.userImage}
                        timestamp={data.timestamp}
                        />
                    ))
                }
            </ChatArea>
            <ChatInput sendMessage={sendMessage} />
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