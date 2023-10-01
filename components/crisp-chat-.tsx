'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('fc6f67d1-b7b7-43c8-ad4a-c8a85266ed72');
  }, []);

  return null;
};
