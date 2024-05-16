import React, { useState, useEffect, useCallback } from 'react';
import { Profile, SignIn, SignUp, Form1, Form2,Feed } from '../src/Components/Component_list';

function App() {
  const [Render_check, UpdateRenderCheck] = useState('profile');
  const [ComponentToRender, setComponentToRender] = useState(<Profile UpdateRenderCheck={UpdateRenderCheck} />);

  const helper = useCallback(() => {
    switch (Render_check) {
      case 'profile':
        setComponentToRender(<Profile UpdateRenderCheck={UpdateRenderCheck} />);
        break;
      case 'SignIn':
        setComponentToRender(<SignIn UpdateRenderCheck={UpdateRenderCheck} />);
        break;
      case 'SignUp':
        setComponentToRender(<SignUp UpdateRenderCheck={UpdateRenderCheck} />);
        break;
      case 'Form1':
        setComponentToRender(<Form1 UpdateRenderCheck={UpdateRenderCheck} />);
        break;
      case 'Form2':
        setComponentToRender(<Form2 UpdateRenderCheck={UpdateRenderCheck} />);
        break;
      case 'Feed':
        setComponentToRender(<Feed UpdateRenderCheck={UpdateRenderCheck} />);
        break;
      default:
        setComponentToRender(<p>Some error occurred</p>);
        break;
    }
  }, [Render_check, UpdateRenderCheck]);

  useEffect(helper, [helper]);

  return (
    <div className="App">
      {ComponentToRender}
    </div>
  );
}

export default App;
