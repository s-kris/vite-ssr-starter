import { Button, Heading } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import React from 'react';

export { Page };

function Page() {
  const [session, loading] = useSession();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        <Heading>Welcome {session.user?.name}</Heading>
        <a href="/api/auth/signout">
          <Button>Sign out</Button>
        </a>
      </>
    );
  }

  return (
    <>
      <Heading>Who are you?</Heading>
      <a href="/api/auth/signin">
        <Button>Sign in</Button>
      </a>
    </>
  );
}
