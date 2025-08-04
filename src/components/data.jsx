import React from "react";
import {
  User,
  Briefcase,
  Code,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Download,
  MapPin,
} from "lucide-react";
import AboutContent from "./content/AboutContent";
import ExperienceContent from "./content/ExperienceContent";
import ProjectsContent from "./content/ProjectsContent";
import ContactContent from "./content/ContactContent";
import { IoFolderOpenSharp } from "react-icons/io5";

// Social and navigation data
export const navigationItems = [
  { key: "about", label: "about", icon: User },
  { key: "experience", label: "experience", icon: Briefcase },
  { key: "projects", label: "projects", icon: IoFolderOpenSharp },
  { key: "contact", label: "contact", icon: Mail },
];

export const socialIcons = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const sections = [
  { id: "about", component: <AboutContent /> },
  { id: "experience", component: <ExperienceContent /> },
  { id: "projects", component: <ProjectsContent /> },
  { id: "contact", component: <ContactContent /> },
];
