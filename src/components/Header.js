import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Login() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />

          <SearchContainer>
            <Search>
              <input type="text" placeholder="Search" />
            </Search>
          </SearchContainer>

        <HelpOutlineIcon />
      </Main>

      <UserContainer>
        <Name>
          Name
        </Name>
        <UserImage>
          <img src={'https://i.imgur.com/6VBx3io.png'} alt="" />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
    background: #19496e;
    color: #EBE7EB;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
    display: flex;
    margin-left: 16px;
    margin-right: 16px;

    svg {
      width: 22px;
      color: #FFFFFF;
    }
`;

const SearchContainer = styled.div`
    min-width: 500px;
    margin-right: 16px;
    margin-left: 16px;
`;

const Search = styled.div`
    background-color: #3d7199;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    align-item: center;

    input {
      width: 100%;
      border: none;
      background: #1264a3;
      border-radius: 4px;
      padding: 4px 8px;
      color: #FFFFFF;
    }
    
    input:focus {
      outline: none;
      background: #3d7199;
    }
    
    input:hover {
      cursor: pointer;
      background: #3d7199;
      transition: .3s;
    }

    input::placeholder {
      color: #FFFFFF;
    }
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;;
    right: 0;
`;

const Name = styled.div`
    color: #ffffff;
    padding-right: 16px;
`;
const UserImage = styled.div`
    width: 28px;
    height: 28px;
    cursor: pointer;
    
    img {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      border: 1px solid #6375e9bd;
      width: 100%;
      border-radius: 50%;
    }
`;
