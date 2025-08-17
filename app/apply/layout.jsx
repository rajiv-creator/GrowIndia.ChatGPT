'use client';
import { Suspense } from 'react';

export default function ApplyLayout({ children }) {
  return (
    <Suspense fallback={<div />}>
      {children}
    </Suspense>
  );
}
