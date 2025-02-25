"use client"

import React from 'react';

interface ButtonComponentProps {
  text: string;
}

export const Button: React.FC<ButtonComponentProps> = ({ text, ...experienceProps }) => {
  return <button {...experienceProps}>{ text }</button>;
};
