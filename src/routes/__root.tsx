import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eathamozhi Masjid — Community Links" },
      { name: "description", content: "Connect with the Eathamozhi Masjid community across all platforms — WhatsApp, Instagram, Facebook, YouTube & more." },
      { property: "og:title", content: "Eathamozhi Masjid — Community Links" },
      { property: "og:description", content: "Connect with the Eathamozhi Masjid community across all platforms — WhatsApp, Instagram, Facebook, YouTube & more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "theme-color", content: "#0d9488" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: "Eathamozhi Masjid",
    description: "Connect with the Eathamozhi Masjid community across all platforms",
    url: "https://eathamozhi-masjid.netlify.app/",
    sameAs: [
      "https://whatsapp.com/channel/0029VaAIPXO9Bb5tR7L89o0n",
      "https://chat.whatsapp.com/C649nwyeNOcLS9h0cOoWZU?mode=gi_t",
      "https://www.instagram.com/masjidety",
      "https://www.facebook.com/share/1aT3hWLE4c/",
      "https://www.youtube.com/@masjidety",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
