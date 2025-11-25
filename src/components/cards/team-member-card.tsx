"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TwitterIcon, FacebookIcon, DiscordIcon } from "@/components/icons";
import type { TeamMember } from "@/data/team";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  discord: DiscordIcon,
  website: Globe,
};

function getSocialIcon(iconName: string) {
  const normalizedName = iconName.toLowerCase();
  if (normalizedName.includes("github")) return Github;
  if (normalizedName.includes("linkedin")) return Linkedin;
  if (normalizedName.includes("twitter")) return TwitterIcon;
  if (normalizedName.includes("facebook")) return FacebookIcon;
  if (normalizedName.includes("discord")) return DiscordIcon;
  return Globe;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Avatar className="w-32 h-32">
        <AvatarImage src={`/images/${member.photo}`} alt={member.name} />
        <AvatarFallback className="text-3xl bg-(--ossph-primary) text-white">
          {member.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div>
        <h4 className="text-lg font-bold">{member.name}</h4>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
      {member.socials.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="hover:bg-muted">
              Connect
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {member.socials.map((social) => {
              const Icon = getSocialIcon(social.icon);
              return (
                <DropdownMenuItem key={social.link} asChild className="focus:bg-muted">
                  <Link
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {social.name}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
