"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Github, Globe, Star, SearchX, FileText, Loader2, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/ui/page-hero";
import { NpmIcon } from "@/components/icons";

interface Project {
  id: string;
  name: string;
  description: string;
  category?: string;
  bannerUrl?: string;
  iconUrl?: string;
  author?: {
    name: string;
    github?: string;
  };
  technologies?: string[];
  tags?: string[];
  stars?: number;
  links?: {
    github?: string;
    website?: string;
    npm?: string;
    documentation?: string;
  };
}

const DATA_URL = "https://raw.githubusercontent.com/OSSPhilippines/awesome-pinoy-made/refs/heads/main/data.json";

export default function AwesomePageClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [author, setAuthor] = useState("all");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjects(data.projects || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category).filter(Boolean))];
    return cats.sort();
  }, [projects]);

  const authors = useMemo(() => {
    const auths = [...new Set(projects.map((p) => p.author?.name).filter(Boolean))];
    return auths.sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        search === "" ||
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || project.category === category;
      const matchesAuthor = author === "all" || project.author?.name === author;
      return matchesSearch && matchesCategory && matchesAuthor;
    });
  }, [projects, search, category, author]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setAuthor("all");
  };

  return (
    <>
      <PageHero
        title="Awesome"
        titleHighlight="Pinoy-Made"
        emoji="🇵🇭"
        description="A collection of open source projects made by Filipino developers"
      >
        <Button asChild size="lg" className="bg-(--ossph-primary) hover:bg-(--ossph-primary)/90">
          <Link href="https://github.com/OSSPhilippines/awesome-pinoy-made" target="_blank" rel="noopener noreferrer">
            <Plus className="h-5 w-5 mr-2" />
            Submit Your Project
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="hover:bg-muted">
          <Link href="https://github.com/OSSPhilippines/awesome-pinoy-made" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 mr-2" />
            View on GitHub
          </Link>
        </Button>
      </PageHero>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        {/* Filters */}
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-white border">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter by</span>
            </div>

            <div className="flex flex-wrap gap-2 flex-1">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[160px] hover:bg-muted">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="focus:bg-muted">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat!} className="focus:bg-muted">
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={author} onValueChange={setAuthor}>
                <SelectTrigger className="w-[160px] hover:bg-muted">
                  <SelectValue placeholder="Author" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="focus:bg-muted">All Authors</SelectItem>
                  {authors.map((auth) => (
                    <SelectItem key={auth} value={auth!} className="focus:bg-muted">
                      {auth}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(search || category !== "all" || author !== "all") && (
                <Button variant="outline" size="sm" onClick={clearFilters} className="hover:bg-muted">
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-[var(--ossph-primary)]" />
            <p className="mt-4 text-gray-600">Loading awesome projects...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
            <p>{error}</p>
            <Button
              variant="outline"
              className="mt-2 hover:bg-muted"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <>
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id || project.name}
                    className="hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    {/* Banner */}
                    {project.bannerUrl && (
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <Image
                          src={project.bannerUrl}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardHeader className="flex flex-row items-start gap-3">
                      {project.iconUrl && (
                        <Image
                          src={project.iconUrl}
                          alt=""
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg truncate">{project.name}</CardTitle>
                        {project.category && (
                          <Badge variant="default" color="primary" className="mt-1">
                            {project.category}
                          </Badge>
                        )}
                      </div>
                      {project.stars && (
                        <Badge className="bg-amber-500 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          {project.stars}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="line-clamp-3">
                        {project.description}
                      </CardDescription>

                      {/* Author */}
                      {project.author && (
                        <div className="text-sm text-gray-600">
                          by{" "}
                          {project.author.github ? (
                            <Link
                              href={`https://github.com/${project.author.github}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[var(--ossph-primary)] hover:underline"
                            >
                              {project.author.name}
                            </Link>
                          ) : (
                            project.author.name
                          )}
                        </div>
                      )}

                      {/* Technologies */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Links */}
                      {project.links && (
                        <div className="flex flex-wrap gap-2">
                          {project.links.github && (
                            <Button asChild variant="outline" size="sm" className="hover:bg-muted">
                              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                          {project.links.website && (
                            <Button asChild variant="outline" size="sm" className="hover:bg-muted">
                              <Link href={project.links.website} target="_blank" rel="noopener noreferrer">
                                <Globe className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                          {project.links.npm && (
                            <Button asChild variant="outline" size="sm" className="hover:bg-muted">
                              <Link href={project.links.npm} target="_blank" rel="noopener noreferrer">
                                <NpmIcon className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                          {project.links.documentation && (
                            <Button asChild variant="outline" size="sm" className="hover:bg-muted">
                              <Link href={project.links.documentation} target="_blank" rel="noopener noreferrer">
                                <FileText className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <SearchX className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">No projects found matching your criteria</p>
                <Button variant="outline" onClick={clearFilters} className="hover:bg-muted">
                  Clear filters
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
