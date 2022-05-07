import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
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
                
            </MainChannels>

            <ChannelContainer>
                <NewChannelItems>
                    <div>Channel</div>
                    <AddIcon />
                </NewChannelItems>

                <ChannelsList>
                    
                </ChannelsList>
            </ChannelContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #1264a3;
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
        background: #19496e;
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
        background: #19496e;
        transition: .3s;
    }

    svg {
        width: 20px;
    }
`

const ChannelContainer = styled.div`
    color: #FFFFFF;
    margin-top: 10px;
`

const NewChannelItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
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
        background: #19496e;
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
        background: #19496e;
        transition: .3s;
    }

`