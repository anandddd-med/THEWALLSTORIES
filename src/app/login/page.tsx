'use client';

import { signIn } from 'next-auth/react';
import { GoogleIcon } from '@/components/auth/GoogleIcon';

export default function LoginPage() {
  async function handleGoogle() {
    await signIn('google', { callbackUrl: '/account' });
  }

  return (
    <div className="container-page py-14 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-display">Welcome back</h1>
      <p className="text-ink/60 text-sm mt-2 mb-8">Sign in to track orders, save posters and check out faster.</p>

      <button onClick={handleGoogle} className="btn btn-ghost w-full gap-2.5 justify-center border-line">
        <GoogleIcon />
        Continue with Google
      </button>

      <div className="my-8 flex items-center gap-3 text-xs text-ink/40">
        <div className="flex-1 h-px bg-line" /> New here? <div className="flex-1 h-px bg-line" />
      </div>

      <p className="text-sm text-ink/60 text-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleGoogle();
          }}
          className="text-accent hover:underline"
        >
          Create an account
        </a>{' '}
        — it takes 10 seconds.
      </p>
    </div>
  );
}
