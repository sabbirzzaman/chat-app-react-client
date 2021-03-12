import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { SidebarItems } from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';

function Sidebar(props) {

    const addChannel = () => {
        const promptName = prompt('Enter Channel Name.');
        if(promptName){
            db.collection('room').add({
                name: promptName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    GroupBros
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>

            <MainChannels>
                {
                    SidebarItems.map( item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>

            <ChannelConteiner>
                <NewChennelItens>
                    <div>Channel</div>
                    <AddIcon onClick={addChannel} />
                </NewChennelItens>

                <ChannelsList>
                    {
                        props.rooms.map( item =>(
                            <Channel>
                                # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelConteiner>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #465EFC;
`
const WorkspaceContainer = styled.div`
    height: 64px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: space-between;
    :hover {
        background: #3b53ed;
        transition: .3s;
    }
`

const Name = styled.div`
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
`

const NewMessage = styled.div`
    height: 36px;
    width: 36px;
    background: #FFFFFF;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    padding: 1px 0px;
    color: #FFFFFF;
    height: 28px;
    display: grid;
    grid-template-columns: 12% auto;
    align-items: unset;
    padding-left: 16px;
    cursor: pointer;
    :hover {
        background: #3b53ed;
        transition: .3s;
    }

    svg {
        width: 20px;
    }
`

const ChannelConteiner = styled.div`
    color: #FFFFFF;
    margin-top: 10px;
`

const NewChennelItens = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    heignt: 28px;
    padding-left: 16px;
    padding-right: 16px;

    div {
        cursor: pointer;
    }
    
    svg {
        cursor: pointer;
        padding: 3px;
        border-radius: 4px;
    }
    svg:hover {
        background: #3b53ed;
        transition: .3s;
    }
`

const ChannelsList = styled.div`
`


const Channel = styled.div`
    padding: 1px 0px;
    height: 28px;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
        background: #3b53ed;
        transition: .3s;
    }

`