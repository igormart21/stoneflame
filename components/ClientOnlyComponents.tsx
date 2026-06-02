"use client";

import dynamic from "next/dynamic";

export const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });
export const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
export const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });
