import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation, Switch } from 'react-router-dom';
import {
  FrameStyle,
  ContentFrame,
  NavBar,
  NavBarText,
  NavButton,
  PageContainer,
  PageLoader,
  Logo
} from './App.styles';
import GlobalFonts from './fonts/fonts';
import { Remarkable } from 'remarkable';
import Gallery from './components/Gallery';

// @todo take out and make a proper 404 page component
const NotFound = () => {
  return <div>H-h-here is notin, eyem vewy sowwy ;_;</div>;
}

const Default = () => {
  const pathname = useLocation();
  const newPathname = pathname.pathname;

  let currentMd:string;

  // need to capitalize the second letter of the path
  // the first letter being "/"
  const capitalize = (s: string) => {
    return s.charAt(1).toUpperCase() + s.slice(2)
  }

  // checking if pathname is different from "/"
  // not the best way, probs should be redone
  if (newPathname !== "/") {
    currentMd = '/articles/' + capitalize(newPathname) + '.md';
  } else {
    currentMd = '/articles/MainPage.md';
  }

  const [mdactive, setMdactive] = useState('');

  useEffect(() => {
    fetch(currentMd).then(function (a) {
      return a.text().then(function (b) {
        setMdactive(b);
      });
    });
  }, [currentMd]);
  
  const md = new Remarkable();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: md.render(mdactive) }}
    >
    </div>);
};

function App() {

  return (
    <Router>
      <FrameStyle>
        <GlobalFonts />
        <ContentFrame>
          <NavBar>
            <NavBarText>
              <NavButton to="/" exact>
                Home
              </NavButton>
              <NavButton to="/devblog">
                Devblog
              </NavButton>
              <NavButton to="/gallery">
                Art
              </NavButton>
              <NavButton to="/about">
                About
              </NavButton>
              <NavButton to="/contribute">
                Contribute
              </NavButton>
            </NavBarText>
          </NavBar>

          <PageContainer>
            <Logo/>
            <PageLoader>
              <Switch>
                <Route path="/" exact component={Default}/>
                <Route path="/devblog" component={Default} />
                <Route path="/about" component={Default} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contribute" component={Default} />
                <Route component={NotFound} />
              </Switch>
            </PageLoader>
          </PageContainer>
        </ContentFrame>
      </FrameStyle>
    </Router>
  );
}

export default App;
