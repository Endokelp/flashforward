import Link from "next/link";

const reasons = [
  {
    title: "Make Real Impact",
    description:
      "Help design and distribute solar flashlights that directly improve educational outcomes for students in Ghana.",
    accent: "bg-orange-100 text-orange-600",
  },
  {
    title: "Gain STEM Skills",
    description:
      "Learn 3D modeling, circuit design, soldering, and project management through hands-on experience.",
    accent: "bg-green-100 text-green-600",
  },
  {
    title: "Build Community",
    description:
      "Connect with like-minded students who share your passion for social impact and innovation.",
    accent: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Develop Leadership",
    description:
      "Take on leadership roles in various projects and build your resume with meaningful experience.",
    accent: "bg-orange-100 text-orange-600",
  },
];

const opportunities = [
  {
    title: "Engineering & Design",
    description:
      "Work on 3D modeling, circuit design, and prototyping of solar flashlights.",
    bullets: [
      "CAD design and 3D printing",
      "Circuit assembly and testing",
      "Product improvement iterations",
    ],
  },
  {
    title: "Business & Operations",
    description:
      "Help with project management, partnerships, and organizational growth.",
    bullets: [
      "Partnership development",
      "Project coordination",
      "Financial planning",
    ],
  },
  {
    title: "Advocacy & Outreach",
    description:
      "Raise awareness about energy poverty and promote our mission.",
    bullets: [
      "Social media management",
      "Event organization",
      "Community presentations",
    ],
  },
  {
    title: "Content & Communications",
    description:
      "Create compelling content to share our story and impact.",
    bullets: [
      "Blog writing and editing",
      "Video content creation",
      "Website maintenance",
    ],
  },
  {
    title: "Fundraising",
    description:
      "Help secure funding for our solar flashlight distribution program.",
    bullets: [
      "Grant writing",
      "Fundraising events",
      "Donor relations",
    ],
  },
  {
    title: "Research & Impact",
    description:
      "Measure and analyze the impact of our programs on student outcomes.",
    bullets: [
      "Data collection and analysis",
      "Impact reporting",
      "Research assistance",
    ],
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Volunteer With Flash Forward
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-green-500 to-orange-500" />
          <p className="mt-8 text-xl leading-relaxed text-gray-700">
            Join a student-led nonprofit bringing solar-powered light to kids who need it most.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className={`rounded-2xl border border-orange-100 bg-white p-8 shadow-lg`}
              >
                <div
                  className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold ${reason.accent}`}
                >
                  {reason.title}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Volunteer Opportunities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-700">
            Whether you love engineering, storytelling, or organizing teams, there&apos;s a place for you at Flash Forward.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.title}
                className="rounded-2xl border border-green-100 bg-white p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {opportunity.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {opportunity.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {opportunity.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Tell us how you&apos;d like to help and we&apos;ll connect you with the right team.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:flashforwardnp@gmail.com?subject=Volunteer with Flash Forward"
              className="rounded-lg bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Email Our Team
            </a>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-orange-200 px-8 py-3 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
