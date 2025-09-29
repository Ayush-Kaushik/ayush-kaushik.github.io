import { createContext, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    projectId: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
export const AnalyticsContext = createContext(null);

export const AnalyticsProvider = ({ children }) => {
    const analytics = useRef(null);

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        analytics.current = getAnalytics(app);
        console.log('Firebase Analytics initialized');
    }, []);

    return (
        <AnalyticsContext.Provider value={{ analytics: analytics.current }}>
            {children}
        </AnalyticsContext.Provider>
    );
};