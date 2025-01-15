"use client";
import React from "react";
import Button from '@mui/material/Button';

interface ButtonProps {
  title?: string;
}

function CustomMUIButton({ title = 'I am a button' }: ButtonProps) {
  return (
    <div>
      <Button variant="contained">{title}</Button>
    </div>
  );
}

export default CustomMUIButton;
