import React, {useState} from "react";
import styled from "styled-components";
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from '@material-ui/icons/AttachFile';

function ChatInput({ sendMessage }) {

  const [input, setInput] = useState('');

  const send = (e) => {
    e.preventDefault();
    if(!input) return;
    sendMessage(input);
    setInput('');
  }

  return (
    <Container>
      <InputContainer>
        <form>
          <InputStyle>
            <FormatBoldIcon />
          </InputStyle>

          <input value={input} type="submit" onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Type a message" />

          <AttachFile>
            <AttachFileIcon />
          </AttachFile>

          <SendButton onClick={send} >
            <SendIcon />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
    background: #F5F6F1;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 24px;
    padding-top: 10px;
`;

const InputContainer = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    form {
      display: flex;
      height: 42px;
      align-items: center;
      padding-left: 10px;
      color: #C2C4C4;
      
      input{
          background: #FFFFFF;
          font-size: 14px;
          flex: 1;
          border: none;
        }

        input:focus{
          outline: none;
          color: #535761;
        }
        
        input:focus::-webkit-input-placeholder {
          color: #535761;
        }
        
        input::placeholder{
          color: #C2C4C4;
        }
    }
`

const AttachFile = styled.div`
    cursor: pointer;
    color: #535761;
    display: flex;
    align-content: center;
    margin-right: 8px;
    padding: 5px;
    border-radius: 4px;

    :hover {
      background: #1264a3;
      color: #FFFFFF;
      transition: .3s;
    }
`
const InputStyle = styled.div`
    cursor: pointer;
    color: #535761;
    display: flex;
    align-content: center;
    margin-right: 8px;
    padding: 5px;
    border-radius: 4px;

    :hover {
      background: #1264a3;
      color: #FFFFFF;
      transition: .3s;
    }
`

const SendButton = styled.button`
    margin-right: 10px;
    cursor: pointer;
    color: #FFFFFF;
    display: flex;
    align-content: center;
    background: #1264a3;
    border-radius: 4px;
    padding: 5px;
    border: none;

    :hover {
    }
    
    :focus {
      outline: none;
    }
`;