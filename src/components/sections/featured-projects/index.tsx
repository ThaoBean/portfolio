"use client";

import { useState } from "react";
import { PROJECTS } from "../../db/projects";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { PROJECTS_NAME } from "../../db/constants";

export function FeaturedProjects() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<PROJECTS_NAME>();

  return (
    <>
      <section id='projects' className='py-24 sm:py-28'>
        <div className='mx-auto max-w-6xl px-6'>
          {/* section title */}
          <div className='mb-12'>
            <h2 className='text-2xl font-semibold text-white sm:text-3xl'>
              Featured Projects
            </h2>
            <p className='mt-3 max-w-2xl text-gray-400'>
              Selected work focused on real-time systems, scalable UI, and
              production-ready architecture.
            </p>
          </div>

          {/* project grid */}
          <div className='grid gap-6 md:grid-cols-2'>
            {PROJECTS.filter((project) => project.featured).map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onOpenCard={(cardId: PROJECTS_NAME) => {
                  setSelectedProject(cardId);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>
      {open && selectedProject && (
        <ProjectModal
          open={open}
          onOpenChange={setOpen}
          selectedProject={selectedProject}
        />
      )}
    </>
  );
}
