import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | OSSPH",
  description: "OSSPH's growing list of projects powered by the community!",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our"
        titleHighlight="Projects"
        emoji="🚀"
        description="OSSPH's growing list of projects powered by the community!"
      >
        <Button asChild size="lg" className="bg-(--ossph-primary) hover:bg-(--ossph-primary)/90">
          <Link href="https://github.com/OSSPhilippines" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 mr-2" />
            View on GitHub
          </Link>
        </Button>
      </PageHero>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Card key={project.name} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={`/images/${project.icon}`}
                  alt={project.name}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <CardTitle className="text-lg">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-(--ossph-primary) transition-colors"
                    >
                      {project.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full hover:bg-muted">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Project
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
