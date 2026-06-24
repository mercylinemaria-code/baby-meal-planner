"use client";

import dynamic from "next/dynamic";

const BabyMealPlanner = dynamic(() => import("../components/BabyMealPlanner"), { 
  ssr: false 
});

export default function Home() {
  return <BabyMealPlanner />;
}