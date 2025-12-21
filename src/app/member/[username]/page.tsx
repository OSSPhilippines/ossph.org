import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMemberByUsername, getAllUsernames } from "@/data/team";
import MemberProfileClient from "./member-profile-client";

interface MemberPageProps {
  params: Promise<{ username: string }>;
}

export async function generateStaticParams() {
  const usernames = getAllUsernames();
  return usernames.map((username) => ({
    username,
  }));
}

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const { username } = await params;
  const member = getMemberByUsername(username);

  if (!member) {
    return {
      title: "Member Not Found",
    };
  }

  const description = member.bio;

  return {
    title: `${member.name} - ${member.role}`,
    description,
    alternates: {
      canonical: `https://ossph.org/member/${member.username}`,
    },
    openGraph: {
      title: `${member.name} - OSSPH ${member.role}`,
      description,
      url: `https://ossph.org/member/${member.username}`,
      images: [
        {
          url: `/images/${member.photo}`,
          width: 400,
          height: 400,
          alt: member.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${member.name} - OSSPH ${member.role}`,
      description,
    },
  };
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { username } = await params;
  const member = getMemberByUsername(username);

  if (!member) {
    notFound();
  }

  return <MemberProfileClient member={member} />;
}
