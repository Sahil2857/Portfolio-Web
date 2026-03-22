"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export function LenisProvider({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {children as any}
        </ReactLenis>
    );
}
