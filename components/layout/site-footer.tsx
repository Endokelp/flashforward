import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "Our Mission" },
  { href: "/impact", label: "Impact" },
  { href: "/team", label: "Team" },
];

const getInvolvedLinks = [
  { href: "/get-involved", label: "Volunteer" },
  { href: "https://gofund.me/436b67db", label: "Donate", external: true },
  { href: "/contact", label: "Partner" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/flashforwardfoundation/",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@flashforwardfoundation",
    label: "TikTok",
  },
  {
    href: "https://www.linkedin.com/in/flash-forward-910944352/",
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@FlashForwardFoundation",
    label: "YouTube",
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Flash Forward</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Student-led nonprofit delivering solar-powered flashlights so kids in off-grid communities can keep learning after sunset.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-gray-400">
                <span className="font-semibold text-orange-400">Email:</span>
                <a
                  href="mailto:flashforwardnp@gmail.com"
                  className="hover:text-white"
                >
                  flashforwardnp@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <span className="font-semibold text-orange-400">HQ:</span>
                Bellevue, WA
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Get Involved</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {getInvolvedLinks.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Flash Forward. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
