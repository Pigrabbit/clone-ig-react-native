import React from 'react';

interface Props {
  isVisible: boolean;
  children: React.ReactNode;
}

export const Maybe: React.FC<Props> = ({ isVisible, children }) => (
  <>{isVisible ? children : null}</>
);
