const contactOptions = [
  {
    title: "General Inquiry",
    description:
      "Have questions about our mission or programs? We're here to help.",
    email: "flashforwardnp@gmail.com",
  },
  {
    title: "Partnership Opportunity",
    description:
      "Collaborate on distribution, research, or community engagement.",
    email: "flashforwardnp@gmail.com",
  },
  {
    title: "Volunteer Interest",
    description:
      "Share how you'd like to contribute your skills to our student-led teams.",
    email: "flashforwardnp@gmail.com",
  },
  {
    title: "Media Request",
    description:
      "Reach out for interviews, press features, or speaking engagements.",
    email: "flashforwardnp@gmail.com",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/flashforwardfoundation/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@flashforwardfoundation",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/flash-forward-910944352/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@FlashForwardFoundation",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-orange-500 to-green-500" />
          <p className="mt-8 text-xl leading-relaxed text-gray-700">
            Have questions about our mission? Want to get involved? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Email us at
                <a
                  className="ml-2 font-semibold text-orange-600"
                  href="mailto:flashforwardnp@gmail.com"
                >
                  flashforwardnp@gmail.com
                </a>
                . We usually respond within 24 hours during school days.
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">
                Follow Our Journey
              </h3>
              <p className="mt-3 text-sm text-gray-700">
                Stay updated on our latest projects, impact stories, and behind-the-scenes content.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-orange-600">
                {socials.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-orange-700"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-100 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              How We Can Help
            </h2>
            <div className="mt-6 grid gap-6">
              {contactOptions.map((option) => (
                <div key={option.title} className="rounded-2xl bg-gray-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {option.description}
                  </p>
                  <a
                    href={`mailto:${option.email}?subject=${encodeURIComponent(option.title)}`}
                    className="mt-3 inline-flex text-xs font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Contact: {option.email}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-green-50 p-6 text-sm text-gray-700">
              <p className="font-semibold text-green-700">Response Time</p>
              <p className="mt-2">
                We&apos;re students, but we&apos;re committed! Expect a reply within 24 hours during school days.
              </p>
              <p className="mt-1 text-gray-500">Bellevue, Washington</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
