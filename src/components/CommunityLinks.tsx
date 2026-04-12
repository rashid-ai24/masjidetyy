import {
  Globe,
  MessageCircle,
  Users,
  Instagram,
  Heart,
  ExternalLink,
  Facebook,
  Mail,
  Youtube,
  BookOpen,
} from "lucide-react";
import communityLogo from "@/assets/community-logo.png";

interface LinkItem {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  colorClass: string;
}

const links: LinkItem[] = [
  {
    title: "Our Website",
    description: "Visit our official website for updates & resources",
    url: "https://eathamozhi-masjid.netlify.app/",
    icon: <Globe size={22} />,
    colorClass: "bg-link-website/10 text-link-website",
  },
  {
    title: "WhatsApp Channel",
    description: "Get announcements & news directly on WhatsApp",
    url: "https://whatsapp.com/channel/0029VaAIPXO9Bb5tR7L89o0n",
    icon: <MessageCircle size={22} />,
    colorClass: "bg-link-whatsapp/10 text-link-whatsapp",
  },
  {
    title: "WhatsApp Group",
    description: "Join the conversation with community members",
    url: "https://chat.whatsapp.com/C649nwyeNOcLS9h0cOoWZU?mode=gi_t",
    icon: <Users size={22} />,
    colorClass: "bg-link-whatsapp/10 text-link-whatsapp",
  },
  {
    title: "Instagram",
    description: "Follow us for photos, reels & stories",
    url: "https://www.instagram.com/masjidety",
    icon: <Instagram size={22} />,
    colorClass: "bg-link-instagram/10 text-link-instagram",
  },
  {
    title: "Blog",
    description: "Read our latest articles & updates",
    url: "https://ety-masjid-blog.vercel.app/",
    icon: <BookOpen size={22} />,
    colorClass: "bg-primary/10 text-primary",
  },
  {
    title: "Pinterest",
    description: "Explore our boards & creative inspiration",
    url: "https://pin.it/5EdyMJzAN",
    icon: <PinterestIcon />,
    colorClass: "bg-link-pinterest/10 text-link-pinterest",
  },
  {
    title: "Facebook",
    description: "Like our page & stay connected",
    url: "https://www.facebook.com/share/1aT3hWLE4c/",
    icon: <Facebook size={22} />,
    colorClass: "bg-link-website/10 text-link-website",
  },
  {
    title: "Gmail",
    description: "Send us an email anytime",
    url: "mailto:masjidety@gmail.com",
    icon: <Mail size={22} />,
    colorClass: "bg-link-blood/10 text-link-blood",
  },
  {
    title: "YouTube",
    description: "Watch our videos & subscribe",
    url: "https://www.youtube.com/@masjidety",
    icon: <Youtube size={22} />,
    colorClass: "bg-link-pinterest/10 text-link-pinterest",
  },
  {
    title: "Blood Donation",
    description: "Register as a donor & save lives",
    url: "https://eathamozhi-blood-donars.netlify.app/",
    icon: <Heart size={22} />,
    colorClass: "bg-link-blood/10 text-link-blood",
  },
];

function PinterestIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 12a4 4 0 1 1 8 0c0 4-2 6-4 8" />
      <path d="M12 2a10 10 0 1 0 4 19.2" />
      <path d="m10 16 1.5-5" />
    </svg>
  );
}

export function CommunityLinks() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-10 flex flex-col items-center text-center">
        <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 shadow-lg">
          <img
            src={communityLogo}
            alt="Community Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Our Community
        </h1>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Connect with us across all platforms. Join, follow & stay updated!
        </p>
      </div>

      {/* Links */}
      <div className="flex w-full max-w-md flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${link.colorClass} transition-transform duration-200 group-hover:scale-110`}
            >
              {link.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-card-foreground text-sm">
                {link.title}
              </div>
              <div className="text-xs text-muted-foreground truncate">
                {link.description}
              </div>
            </div>
            <ExternalLink
              size={16}
              className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
            />
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs text-muted-foreground">
        Made with <Heart size={12} className="inline text-link-blood" /> by Our
        Community
      </p>
    </div>
  );
}
