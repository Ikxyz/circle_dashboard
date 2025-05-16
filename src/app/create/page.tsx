"use client";

import CreateCircleForm from './components/CreateCircleForm';
import { useActiveAccount } from 'thirdweb/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateCirclePage() {
  const activeAccount = useActiveAccount();
  const walletAddress = activeAccount?.address?.toString() || '';
  const router = useRouter();

  // If no wallet is connected, redirect to home page
  useEffect(() => {
    if (!walletAddress) {
      router.push('/');
    }
  }, [walletAddress, router]);

  if (!walletAddress) {
    return <div className="p-6 text-center">Please connect your wallet to create a circle</div>;
  }

  return <CreateCircleForm address={walletAddress} />;
}
