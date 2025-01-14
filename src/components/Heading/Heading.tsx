"use client";
import React, { useState } from "react";
import Button from '@mui/material/Button';

interface HeadingProps {
  initialTitle?: string;
}

function Heading({ initialTitle = 'I am a heading' }: HeadingProps) {
  const [title, setTitle] = useState(initialTitle);

  return (
    <div>
        <h1>{title}</h1>
        <Button variant="contained" onClick={() => setTitle('New Title')}>Change Title</Button>
    </div>
  );
}

export default Heading;
