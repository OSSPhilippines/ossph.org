"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Heart, Filter, Users, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/ui/page-hero";
import { TeamMemberCard } from "@/components/cards/team-member-card";
import { GradientText } from "@/components/ui/gradient-text";
import { team, groupLabels, groupOrder } from "@/data/team";

export default function TeamPageClient() {
  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  // Filter by group
  const filteredTeam = useMemo(() => {
    if (selectedGroup === "all") return team;
    return team.filter((m) => m.group === selectedGroup);
  }, [selectedGroup]);

  // Split into active and past
  const activeMembers = filteredTeam.filter((m) => m.active);
  const pastMembers = filteredTeam.filter((m) => !m.active);

  // Group active members by group
  const activeByGroup = useMemo(() => {
    const grouped: Record<string, typeof activeMembers> = {};
    for (const group of groupOrder) {
      const members = activeMembers.filter((m) => m.group === group);
      if (members.length > 0) {
        grouped[group] = members;
      }
    }
    return grouped;
  }, [activeMembers]);

  // Group past members by group
  const pastByGroup = useMemo(() => {
    const grouped: Record<string, typeof pastMembers> = {};
    for (const group of groupOrder) {
      const members = pastMembers.filter((m) => m.group === group);
      if (members.length > 0) {
        grouped[group] = members;
      }
    }
    return grouped;
  }, [pastMembers]);

  return (
    <>
      <PageHero
        title="The"
        titleHighlight="OSSPH Team"
        emoji="👋"
        description="Here are the amazing people behind OSSPH's initiatives"
      >
        <Button asChild size="lg" className="bg-(--ossph-primary) hover:bg-(--ossph-primary)/90">
          <Link href="https://forms.gle/MjHy9WmB7cEeXDVV9" target="_blank" rel="noopener noreferrer">
            Join Our Team!
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-(--ossph-negative) text-(--ossph-negative) hover:bg-(--ossph-negative)/10">
          <Link href="https://github.com/sponsors/OSSPhilippines" target="_blank" rel="noopener noreferrer">
            <Heart className="h-5 w-5 mr-2" />
            Help Us Grow
          </Link>
        </Button>
      </PageHero>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white border">
          <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filter by group</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedGroup === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedGroup("all")}
              className={selectedGroup === "all" ? "bg-(--ossph-primary) hover:bg-(--ossph-primary)" : "hover:bg-muted"}
            >
              All Groups
            </Button>
            {groupOrder.map((group) => (
              <Button
                key={group}
                variant={selectedGroup === group ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedGroup(group)}
                className={selectedGroup === group ? "bg-(--ossph-primary) hover:bg-(--ossph-primary)" : "hover:bg-muted"}
              >
                {groupLabels[group]}
              </Button>
            ))}
          </div>
        </div>

        {/* Active Volunteers */}
        {activeMembers.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <UserCheck className="h-6 w-6 text-(--ossph-primary)" />
              <h3 className="text-2xl font-bold">
                <GradientText>Active</GradientText> Volunteers
              </h3>
              <Badge variant="default">
                {activeMembers.length}
              </Badge>
            </div>

            {/* Groups within Active */}
            <div className="space-y-10">
              {Object.entries(activeByGroup).map(([group, members]) => (
                <div key={group} className="space-y-4">
                  <h4 className="text-lg font-semibold text-muted-foreground">
                    {groupLabels[group]}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {members.map((member) => (
                      <TeamMemberCard key={member.name} member={member} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past Volunteers */}
        {pastMembers.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-muted-foreground" />
              <h3 className="text-2xl font-bold text-muted-foreground">
                Past Volunteers
              </h3>
              <Badge variant="outline">
                {pastMembers.length}
              </Badge>
            </div>

            {/* Groups within Past */}
            <div className="space-y-10">
              {Object.entries(pastByGroup).map(([group, members]) => (
                <div key={group} className="space-y-4">
                  <h4 className="text-lg font-semibold text-muted-foreground">
                    {groupLabels[group]}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {members.map((member) => (
                      <TeamMemberCard key={member.name} member={member} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
