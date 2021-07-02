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
        <h1>Welcome {session.user?.name}</h1>
        <a href="/api/auth/signout">
          <button>Sign out</button>
        </a>
      </>
    );
  }

  return (
    <>
      <h1>Who are you?</h1>
      <a href="/api/auth/signin">
        <button>Sign in</button>
      </a>
    </>
  );
}
