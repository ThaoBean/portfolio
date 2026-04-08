"use client";

import Link from "next/link";
import { Home, FolderOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className='relative flex min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4'>
      {/* Terminal Header */}
      <div className='mb-12 w-full max-w-2xl'>
        <div className='rounded-2xl border border-slate-700 bg-slate-900/50 px-4 py-3 backdrop-blur'>
          <div className='flex items-center gap-2'>
            <div className='flex gap-1.5'>
              <div className='h-3 w-3 rounded-full bg-red-500'></div>
              <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
              <div className='h-3 w-3 rounded-full bg-green-500'></div>
            </div>
            <span className='ml-2 text-sm text-slate-400'>
              <span className='text-blue-400'>
                {t("sections.notFound.statusHeader")}
              </span>
              <span className='text-slate-500'>
                {" "}
                · {t("sections.notFound.statusText")}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* 404 Text */}
      <div className='mb-8 text-center'>
        <div className='text-8xl font-bold sm:text-9xl'>
          <span className='text-white'>4</span>
          <span className='bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent'>
            0
          </span>
          <span className='text-white'>4</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className='mb-4 text-center text-3xl font-bold text-white sm:text-4xl'>
        {t("sections.notFound.title")}
      </h1>

      {/* Description */}
      <p className='mb-10 max-w-md text-center text-slate-400'>
        {t("sections.notFound.description")}
      </p>

      {/* Buttons */}
      <div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
        <Link
          href='/'
          className='inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-900/50 px-6 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800'
        >
          <Home size={20} />
          {t("sections.notFound.backHome")}
        </Link>

        <Link
          href='/#projects'
          className='inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-900/50 px-6 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800'
        >
          <FolderOpen size={20} />
          {t("sections.notFound.viewProjects")}
        </Link>
      </div>

      {/* Footer */}
      <div className='absolute bottom-6 left-0 right-0 text-center text-sm text-slate-500'>
        <span className='inline-flex items-center gap-1.5'>
          <span className='h-2 w-2 rounded-full bg-green-500'></span>
          {t("sections.notFound.footer")}
        </span>
      </div>
    </div>
  );
}
