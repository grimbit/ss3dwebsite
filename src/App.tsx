import React, { useState, useEffect } from 'react';
import {
  FrameStyle,
  ContentFrame,
  NavBar,
  NavBarText,
  NavButton,
  PageContainer,
  Gtext,
  PageLoader,
  Logo
} from './App.styles';
import GlobalFonts from './fonts/fonts';
import { Remarkable } from 'remarkable';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
function App() {
  const [mdactive, setMdactive] = useState('');
  const [displaypage, setDisplaypage] = useState('/articles/MainPage.md');

  useEffect(() => {
    fetch(displaypage).then(function (a) {
      return a.text().then(function (b) {
        setMdactive(b);
      });
    });
  }, [displaypage]);
  const md = new Remarkable();

  return (
    <Router>
      <FrameStyle>
        <GlobalFonts />
        <ContentFrame>
          <NavBar>
            <NavBarText>
              <NavButton
                onClick={() => setDisplaypage('/articles/MainPage.md')}
              >
                <Gtext>HOME</Gtext>
              </NavButton>
              <NavButton onClick={() => setDisplaypage('/articles/Devblog.md')}>
                <Gtext>DEVBLOG</Gtext>
              </NavButton>
              <Route path="./components/Gallery" component={Gallery} />
              <NavButton>
                <Gtext>ART</Gtext>
              </NavButton>
              <NavButton onClick={() => setDisplaypage('/articles/About.md')}>
                <Gtext>ABOUT</Gtext>
              </NavButton>
              <NavButton
                onClick={() => setDisplaypage('/articles/Contribute.md')}
              >
                <Gtext>CONTRIBUTE</Gtext>
              </NavButton>
            </NavBarText>
          </NavBar>

          <PageContainer>
            <Logo></Logo>
            <PageLoader>
              <div
                dangerouslySetInnerHTML={{ __html: md.render(mdactive) }}
              ></div>
            </PageLoader>
          </PageContainer>
        </ContentFrame>
      </FrameStyle>
    </Router>
  );
}

export default App;
