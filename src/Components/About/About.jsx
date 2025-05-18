import React from 'react';
const About = () => {
    return (
        <div className='p-2 lg:p-12 space-y-4'>
            <div className='w-full text-center bg-pink-300 rounded-2xl p-2 lg:p-12 space-y-4'>
                <div className='text-2xl'> What is Firebase?</div>
                <div className=' border-t border-dashed border-white '>
                    <div className='text-blue-500'>Answer</div>
                    <div> Firebase is a Backend-as-a-Service (BaaS) platform developed by 
                        Google that helps developers build and scale apps quickly without
                         managing traditional backend infrastructure..</div>
                </div>
                <div className=' border-t border-dashed border-white '>Added at 2025-05-25</div>
            </div>
            <div className='w-full text-center bg-pink-300 rounded-2xl p-2 lg:p-12 space-y-4'>
                <div className='text-2xl'> what are Firebase's key features?</div>
                <div className=' border-t border-dashed border-white '>
                    <div className='text-blue-500'>Answer</div>
                    <div>Realtime Database & Cloud Firestore: NoSQL databases for syncing data in real-time.

Firebase Authentication: Supports email/password, social login (Google, Facebook), and more.

Firebase Hosting: Fast and secure hosting for web apps.

Cloud Functions: Run backend code in response to events (serverless).

Cloud Storage: Store and serve large files like images and videos.

Firebase Analytics, Crashlytics, and Performance Monitoring for app quality and user insights.</div>
                </div>
                <div className=' border-t border-dashed border-white '>Added at 2025-05-25</div>
            </div>
            <div className='w-full text-center bg-pink-300 rounded-2xl p-2 lg:p-12 space-y-4'>
                <div className='text-2xl'> 3. How does Firebase Authentication work and what providers does it support?</div>
                <div className=' border-t border-dashed border-white '>
                    <div className='text-blue-500'>Answer</div>
                    <div>Firebase Authentication manages user sign-in and identity verification. It handles authentication workflows and user session management, with built-in UI support.

                     Supported Providers:1.Email/Password 2.Phone Number

                    OAuth Providers: Google, Facebook, Twitter, GitHub, Microsoft, Apple

                    Anonymous Authentication

                   Custom Authentication via secure token</div>
                </div>
                <div className=' border-t border-dashed border-white '>Added at 2025-05-25</div>
            </div>

        </div>
    );
};

export default About;