import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/main.css'
import App from './App';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {GoogleOAuthProvider} from "@react-oauth/google";
import {RecoilRoot} from "recoil";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <React.StrictMode>
          <RecoilRoot>
              <Suspense fallback={<div></div>}>
                  <App />
              </Suspense>
          </RecoilRoot>
      </React.StrictMode>
  </GoogleOAuthProvider>
);
