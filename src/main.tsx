import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './Root.js';
import {
  RecoilRoot,
} from 'recoil';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </React.StrictMode>,
)
