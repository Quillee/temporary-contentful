"use client"

import React from 'react';
import styled from 'styled-components';

interface ButtonComponentProps {
  text: string;
}

type BtnVariant = { variant: 'primary' | 'secondary' };
const StyledButton = styled.button<BtnVariant>`
  background-color: ${({ variant }) => (variant === 'secondary' ? 'gray' : 'red')};
  border-radius: 4px;
  border: ${({ variant }) => (variant === 'secondary' ? 'red' : 'gray')};
`;

export const Button: React.FC<ButtonComponentProps & BtnVariant> = ({ text, variant, ...experienceProps }) => {
  return <StyledButton variant={variant} {...experienceProps}>{ text }</StyledButton>;
};
