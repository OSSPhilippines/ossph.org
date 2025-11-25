"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  // Show first 6 projects for the homepage section
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto space-y-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance">
            Our <GradientText>Projects</GradientText> 🚀
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Explore open source projects created and maintained by Filipino developers.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <article className="border-border/70 bg-card/30 flex h-full flex-col gap-3 rounded-3xl border p-6 transition-all hover:border-[var(--ossph-primary)]/50 hover:shadow-lg">
                <span className="flex size-12 items-center justify-center rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={`/images/${project.icon}`}
                    alt={project.name}
                    width={48}
                    height={48}
                    className="size-10 object-contain"
                  />
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-[var(--ossph-primary)] transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground text-sm leading-6">
                  {project.description}
                </p>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[var(--ossph-primary)] hover:underline font-medium"
          >
            View all projects
            <ExternalLink className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
