import React from 'react';
import { UpdateFollower } from 'react-mouse-follower';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Router from './router';
import Header from './components/Header';
gsap.registerPlugin(useGSAP, ScrollTrigger);
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: 'white',
          zIndex: 10,
          followSpeed: 2,
        }}
      >
        <Header></Header>
        <Router />
      </UpdateFollower>
    </main>
  );
};

export default App;
