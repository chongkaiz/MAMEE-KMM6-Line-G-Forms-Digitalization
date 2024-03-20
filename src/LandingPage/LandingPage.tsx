import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex } from '@mantine/core';

import './LandingPage.css'

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    async function LandingPage() {
      const now = new Date().valueOf();
      const waitTime = Math.max(0, -(new Date().valueOf() - now) + 1500);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      navigate('/home');
    }
    LandingPage();
  }, []);

  return (
    <Flex
      pos='relative'
      h="100vh"
      gap='0'>
      <Flex
        w='100%'
        justify='center'
        align='center'
        bg='#FFE900'>
        <img className='mamee-logo'
          alt="MAMEE logo" src="\src\assets\Mamee.png" />
      </Flex>
      <Flex
        gap="md"
        align="flex-end"
        pos='absolute'
        bottom='1em'
        right='1em'>
        <div className='text'>Powered by:</div>
        <img className='synclogic-logo'
          alt="SyncLogic logo" src="\src\assets\SyncLogic LOGO.png" />
      </Flex>
    </Flex>
  );
}
