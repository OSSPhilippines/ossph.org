"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Github, Linkedin, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { TwitterIcon, FacebookIcon, DiscordIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/data/team";
import { groupLabels } from "@/data/team";

function getSocialIcon(iconName: string) {
  const normalizedName = iconName.toLowerCase();
  if (normalizedName.includes("github")) return Github;
  if (normalizedName.includes("linkedin")) return Linkedin;
  if (normalizedName.includes("twitter")) return TwitterIcon;
  if (normalizedName.includes("facebook")) return FacebookIcon;
  if (normalizedName.includes("discord")) return DiscordIcon;
  return Globe;
}

const fadeUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface MemberProfileClientProps {
  member: TeamMember;
}

export default function MemberProfileClient({ member }: MemberProfileClientProps) {
  const groupLabel = groupLabels[member.group] || member.group;

  return (
    <div className="min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-96 transform-gpu opacity-30 blur-3xl",
            "bg-gradient-to-br from-[var(--ossph-primary)] via-[var(--ossph-secondary)] to-transparent"
          )}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Back button */}
        <motion.div
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          <Link href="/team">
            <Button variant="ghost" className="mb-8 -ml-2 hover:bg-muted">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Button>
          </Link>
        </motion.div>

        {/* Profile card */}
        <motion.div
          className="bg-card border rounded-2xl p-8 md:p-12 shadow-lg"
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Avatar className="w-40 h-40 md:w-48 md:h-48 ring-4 ring-[var(--ossph-primary)]/20">
                <AvatarImage src={`/images/${member.photo}`} alt={member.name} />
                <AvatarFallback className="text-5xl md:text-6xl bg-[var(--ossph-primary)] text-white">
                  {member.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold"
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GradientText>{member.name}</GradientText>
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground"
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {member.role}
            </motion.p>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-2"
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {groupLabel}
              </Badge>
              <Badge
                variant={member.active ? "default" : "outline"}
                className={cn(
                  "text-sm px-3 py-1",
                  member.active && "bg-green-600 hover:bg-green-600"
                )}
              >
                {member.active ? "Active Volunteer" : "Past Volunteer"}
              </Badge>
            </motion.div>

            {/* Bio */}
            <motion.div
              className="max-w-2xl"
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <p className="text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </motion.div>

            {/* Social links */}
            {member.socials.length > 0 && (
              <motion.div
                className="pt-4"
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-sm text-muted-foreground mb-4">Connect with {member.name}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {member.socials.map((social, index) => {
                    const Icon = getSocialIcon(social.icon);
                    return (
                      <motion.div
                        key={social.link}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      >
                        <Link
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="lg"
                            className="gap-2 hover:bg-muted"
                          >
                            <Icon className="h-5 w-5" />
                            {social.name}
                          </Button>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* No socials message */}
            {member.socials.length === 0 && (
              <motion.p
                className="text-muted-foreground italic pt-4"
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                No public social profiles available
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* OSSPH callout */}
        <motion.div
          className="mt-8 text-center"
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-muted-foreground">
            {member.name} is part of the amazing team at{" "}
            <Link href="/" className="text-[var(--ossph-primary)] hover:underline font-medium">
              Open Source Software PH
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
