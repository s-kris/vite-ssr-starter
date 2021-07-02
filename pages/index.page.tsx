import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/client';
import React from 'react';

export { Page };

const modules = [
  'ViteJS',
  'Vite-Plugin-SSR',
  'TypeScript',
  'React',
  'Next-Auth',
  'Chakra-UI',
  'ESLint',
  'Prettier',
  'Husky',
  'Commitlint',
];

const Root = styled(Flex)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const GradText = styled(Heading)`
  background-color: #f3ec78;
  background-image: linear-gradient(
    45deg,
    rgba(62, 161, 219, 1) 11.2%,
    rgba(93, 52, 236, 1) 100.2%
  );
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

function Page() {
  const [session, loading] = useSession();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <Root>
        <GradText fontSize="8xl">Welcome {session.user?.name}</GradText>
        <Link href="/api/auth/signout" _hover={{ textDecor: 'none' }}>
          <Button colorScheme="purple" mt={10}>
            Sign out
          </Button>
        </Link>
        <Text mt={5}>Your details are not stored on our server</Text>
      </Root>
    );
  }

  return (
    <Root>
      <GradText fontSize="7xl">Vite SSR Starter</GradText>
      <Flex flexWrap="wrap" p={5} mt={5} mb={10} textAlign="center">
        {modules.map((m) => (
          <Text key={m} p={1}>
            {m}
          </Text>
        ))}
      </Flex>
      <Link href="/api/auth/signin" _hover={{ textDecor: 'none' }}>
        <Button colorScheme="purple">Test Next-Auth</Button>
      </Link>
    </Root>
  );
}
