"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Button } from "../../ui/button";

export function HeroContent() {
  const { t } = useTranslation();
  const [downloading, setDownloading] = useState(false);

  const downloadCv = async () => {
    if (downloading) return;

    const cvPath = "/cv/ThaoDo_Frontend_CV.pdf";
    const fallbackName = cvPath.split("/").pop() ?? "cv.pdf";

    try {
      setDownloading(true);

      const res = await fetch(cvPath);
      if (!res.ok) throw new Error(`Failed to download: ${res.status}`);

      const cd = res.headers.get("content-disposition");
      const headerName = (() => {
        if (!cd) return null;
        const m = cd.match(/filename\*?=(?:UTF-8''|"?)([^";]+)/i);
        if (!m?.[1]) return null;
        try {
          return decodeURIComponent(m[1]);
        } catch {
          return m[1];
        }
      })();

      const fileName = headerName || fallbackName;
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.rel = "noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.setTimeout(() => window.URL.revokeObjectURL(url), 1000);
      toast.success(t("common.toast.downloadCv.success"));
    } catch {
      toast.error(t("common.toast.downloadCv.error"));
    } finally {
      setDownloading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='text-center lg:text-left'
    >
      {/* Badge */}
      <div className='mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur'>
        {t("hero.badge")}
      </div>

      {/* Heading */}
      <h1 className='mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
        {t("hero.heading.prefix")}{" "}
        <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'>
          {t("hero.heading.highlight")}
        </span>
      </h1>

      {/* Subtitle */}
      <p className='mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0'>
        {t("hero.subtitle")}
      </p>

      {/* CTAs */}
      <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-start'>
        <Button
          size='lg'
          className='w-full sm:w-auto bg-indigo-500 text-white hover:bg-indigo-600'
          asChild
        >
          <a href='#projects'>
            {t("common.actions.viewProjects")}
            <ArrowDownRight className='ml-2 h-4 w-4' />
          </a>
        </Button>

        <Button
          size='lg'
          variant='outline'
          className='w-full sm:w-auto border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:cursor-pointer'
          onClick={downloadCv}
          disabled={downloading}
        >
          {t("common.actions.downloadCv")}
          {downloading ? (
            <Loader2 className='h-4 w-4 animate-spin' />
          ) : (
            <Download className='h-4 w-4' />
          )}
        </Button>
      </div>
    </motion.div>
  );
}
