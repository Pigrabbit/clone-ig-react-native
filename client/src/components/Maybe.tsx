import React from 'client/node_modules/react';

interface Props {
  isVisible: boolean;
  children: React.ReactNode;
}

export const Maybe: React.FC<Props> = ({ isVisible, children }) => (
  <>{isVisible ? children : null}</>
);
