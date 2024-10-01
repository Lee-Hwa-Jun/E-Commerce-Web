"use client";

import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main className="w-full min-h-screen flex max-h-[1000px] justify-center bg-slate-100">
      <section className="max-w-[600px] w-full h-screen bg-white flex justify-center pb-[100px]">
        <div className="max-w-[364px] w-full">{children}</div>
      </section>
    </main>
  );
}
