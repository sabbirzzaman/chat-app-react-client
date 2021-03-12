import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Login(props) {
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
          {props.user.name}
        </Name>
        <UserImage>
          <img src={props.user.photo}/>
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
    background: #3b53ed;
    color: #EBE7EB;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
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
    background-color: #6375e9bd;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    align-item: center;

    input {
      width: 100%;
      border: none;
      background: transparent;
      padding: 4px 8px;
      color: #FFFFFF;
    }
    
    input:focus {
      outline: none;
      border-radius: 4px;
      background: #6375e9bd;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    
    input:hover {
      cursor: pointer;
      background: #6375e9bd;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      border-radius: 4px;
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
    
    img {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      border: 1px solid #6375e9bd;
      width: 100%;
      border-radius: 50%;
    }
`;
