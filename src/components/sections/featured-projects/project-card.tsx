"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='h-full'
    >
      <Card
        className='
          group relative h-full overflow-hidden
          rounded-2xl border border-white/10
          bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-xl
          shadow-[0_4px_24px_rgba(0,0,0,0.25)]
          transition-all duration-300
          hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/10
        '
      >
        {/* subtle gradient glow */}
        <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <div className='absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/10 via-cyan-400/10 to-purple-500/10 blur-xl' />
        </div>

        <CardContent className='flex h-full flex-col p-6 sm:p-7'>
          {/* thumbnail */}
          {imageUrl && (
            <div className='relative mb-6 overflow-hidden rounded-xl border border-white/10 aspect-[16/10]'>
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes='(max-width: 768px) 100vw, 600px'
                className='object-cover transition duration-500 group-hover:scale-[1.04]'
                priority={featured}
              />

              {/* cinematic overlay */}
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F19]/40 via-transparent to-transparent opacity-60' />
            </div>
          )}

          {/* Featured badge */}
          {featured && (
            <Badge className='mb-4 w-fit border-indigo-400/30 bg-indigo-500/10 text-indigo-300'>
              Featured
            </Badge>
          )}

          {/* Title */}
          <h3 className='mb-3 text-lg font-semibold tracking-tight leading-tight text-white sm:text-xl'>
            {title}
          </h3>

          {/* Description */}
          <p className='mb-6 line-clamp-3 text-sm leading-relaxed text-gray-400/90 sm:text-[15px]'>
            {description}
          </p>

          {/* Tags */}
          <div className='mb-6 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant='secondary'
                className='border-white/10 bg-white/5 text-gray-300'
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Spacer */}
          <div className='flex-1' />

          {/* Actions */}
          <div className='flex flex-wrap gap-3'>
            {liveUrl && (
              <a
                href={liveUrl}
                target='_blank'
                rel='noreferrer'
                className='
                  inline-flex items-center gap-2 rounded-lg
                  border border-white/10 bg-white/5
                  px-4 py-2 text-sm text-white
                  transition hover:bg-white/10
                '
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target='_blank'
                rel='noreferrer'
                className='
                  inline-flex items-center gap-2 rounded-lg
                  border border-white/10 bg-white/5
                  px-4 py-2 text-sm text-white
                  transition hover:bg-white/10
                '
              >
                <Github size={16} />
                Source
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
