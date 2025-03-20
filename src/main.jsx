import {React, StrictMode, useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://972b84fafd95eeca17123c89fd2c43dc@o4509003195023360.ingest.us.sentry.io/4509003196071936",
    integrations : [
        Sentry.browserTracingIntegration(),

        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect: useEffect
        }),
        Sentry.replayIntegration({
            maskAllText: false,
            blockAllMedia: false,
        })

    ],
    tracesSampleRate: 1.0,

    tracesSampleRateMax: ['localhost', /^https:\/\/yourserver\.io\/api/],

    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
