import React from 'react'
import heroImg from '../Img/123.png'
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

export default function Hero() {
  return (
    <div className='h-screen overflow-hidden relative'>
      <Image className="img1" src={heroImg} alt="hero" />

      
    </div>
  )
}
