"use client"

import React from 'react';
import { getRandomHelloPhrase } from '@/lib/utils/phrases';
import useUser from '@/hooks/useUser';
import withAuth from '@/lib/withAuth';

const DashboardPage: React.FC =  () => {
  const username = useUser();
  const randomWelcomePhrase = getRandomHelloPhrase();

  return (
    <div>
      <h2>{randomWelcomePhrase}, {username}</h2>
    </div>
  );
};

export default withAuth(DashboardPage);