import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import { auth } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    db.collection("room").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  console.log("User In App State", user);

  return (
    <div className="App">
      <Router>
        {
        !user ? 
        <Login setUser={setUser} /> 
        :
          <Container>
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">
                  <AppRoot>
                    <img className="Logo-spin" src="https://i.imgur.com/oHhRbZ1.png" />
                    <RootHeading>Create Or Explore Channel</RootHeading>
                  </AppRoot>
                </Route>
              </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.div`
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 260px auto;
`

const AppRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const RootHeading = styled.h1`

`