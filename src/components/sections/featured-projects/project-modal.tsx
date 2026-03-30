"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Badge } from "../../ui/badge";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { Building2, Briefcase, Calendar, Users, Handshake } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { DETAILED_PROJECTS } from "../../../db/detail-project";
import { PROJECTS_NAME } from "../../../db/constants";

type ProjectInfoItem = {
  company: string;
  client: string;
  isOutsourced: boolean;
  role: { en: string; vi: string };
  duration: { en: string; vi: string };
  teamSize: { en: string; vi: string };
};

type DetailedProject = {
  id: string;
  title: { en: string; vi: string };
  overview: { en: string[]; vi: string[] };
  contributions: { en: string[]; vi: string[] };
  tags: string[];
  imageUrl?: string;
  projectInfo: ProjectInfoItem;
};

type ProjectModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProject: PROJECTS_NAME;
};

export function ProjectModal({
  open,
  onOpenChange,
  selectedProject,
}: ProjectModalProps) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as "en" | "vi";

  const project: DetailedProject = useMemo(() => {
    return DETAILED_PROJECTS[selectedProject];
  }, [selectedProject]);

  const _projectInfo = useMemo(() => {
    const { company, client, role, duration, teamSize, isOutsourced } =
      project.projectInfo;
    return [
      { label: t("common.labels.company"), value: company, icon: Building2 },
      {
        label: t("common.labels.client"),
        value: client,
        icon: Handshake,
        isOutsourced,
      },
      {
        label: t("common.labels.role"),
        value: role[locale],
        icon: Briefcase,
        highlight: true,
      },
      {
        label: t("common.labels.duration"),
        value: duration[locale],
        icon: Calendar,
      },
      {
        label: t("common.labels.teamSize"),
        value: teamSize[locale],
        icon: Users,
      },
    ];
  }, [project.projectInfo, t, locale]);

  return (
    <Dialog open={!!open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(`
          w-[94vw]
          sm:w-[90vw]
          lg:max-w-[60vw]
          max-w-275
          p-0
          overflow-hidden
          border-white/10
          bg-[#0B0F19]/95
          text-white
          backdrop-blur-xl
          rounded-2xl
        `)}
      >
        {/* HEADER */}
        <DialogHeader className='px-6 pt-6 pb-4 border-b border-white/10'>
          <DialogTitle className='text-xl font-semibold tracking-tight'>
            {project.title[locale]}
          </DialogTitle>
        </DialogHeader>

        {/* SCROLL CONTAINER */}
        <div className='max-h-[75vh] overflow-y-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-5'>
            {/* LEFT SIDE */}
            <div className='lg:col-span-2 px-6 py-6 space-y-6'>
              {/* IMAGE */}
              <div className='relative overflow-hidden rounded-xl border border-white/10 aspect-video'>
                <Image
                  src={project.imageUrl || "/projects/centamess.jpg"}
                  alt='project preview'
                  fill
                  className='object-cover'
                />
              </div>

              {/* OVERVIEW */}
              <section>
                <h3 className='mb-2 text-sm font-semibold text-indigo-300'>
                  {t("common.labels.overview")}
                </h3>
                <ul className='list-disc space-y-2 pl-5 text-sm text-gray-400'>
                  {project.overview[locale].map((paragraph, idx) => (
                    <li
                      key={idx}
                      className='text-sm leading-relaxed text-gray-400'
                    >
                      {paragraph}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* RIGHT SIDE */}
            <div className='lg:col-span-3 border-t lg:border-t-0 lg:border-l border-white/10 px-6 py-6 space-y-8'>
              {/* PROJECT META */}
              <section className='space-y-4'>
                <h3 className='text-sm font-semibold text-indigo-300'>
                  {t("common.labels.projectDetails")}
                </h3>

                <div className='space-y-4 text-sm'>
                  {_projectInfo.map((prj, idx) => {
                    return (
                      <div className='flex items-start gap-3' key={idx}>
                        <prj.icon className='mt-0.5 h-4 w-4 text-gray-500' />
                        <div className='flex w-full flex-col sm:flex-row sm:items-center sm:justify-between'>
                          <div className='text-gray-500'>{prj.label}</div>
                          <div className='text-gray-300'>
                            {prj.value}
                            {prj.isOutsourced ? (
                              <span className='ml-1 text-gray-500'>
                                ({t("common.labels.outsource")})
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* CONTRIBUTIONS */}
              <section>
                <h3 className='mb-3 text-sm font-semibold text-indigo-300'>
                  {t("common.labels.keyContributions")}
                </h3>
                <ul className='list-disc space-y-2 pl-5 text-sm text-gray-400'>
                  {project?.contributions[locale]?.map((contribution, idx) => (
                    <li key={idx}>{contribution}</li>
                  ))}
                </ul>
              </section>

              {/* TECH STACK */}
              <section>
                <h3 className='mb-3 text-sm font-semibold text-indigo-300'>
                  {t("common.labels.techStack")}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project?.tags?.map((tech) => (
                    <Badge
                      key={tech}
                      className='border-white/10 bg-white/5 text-gray-300'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
