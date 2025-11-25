import Link from "next/link";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  longBio: string;
  image: string;
  email?: string | null;
  linkedin?: string | null;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sree Kokkonda",
    role: "President",
    longBio:
      "Sree leads our team with passion for using technology to address real-world issues. With a background in nonprofit leadership, he focuses on strategic planning, empowering team members, and aligning our mission with long-term impact.",
    image:
      "https://raw.githubusercontent.com/Randabble/FlashForwardfoundationWebsite/main/public/images/team/sreeface.jpeg",
    email: "sreekokkonda@gmail.com",
    linkedin: "https://www.linkedin.com/in/sree-kokkonda/",
  },
  {
    name: "Nithilan Selvakumar",
    role: "Vice President",
    longBio:
      "Nithilan keeps our operations compliant and sustainable by managing research, legal documentation, and responsible practices. His focus on thoughtful infrastructure ensures we scale effectively and ethically.",
    image:
      "https://raw.githubusercontent.com/Randabble/FlashForwardfoundationWebsite/main/public/images/team/nithilanface.jpeg",
    email: "nithilan@flashforwardfoundation.org",
    linkedin: null,
  },
  {
    name: "Romir Chekuri",
    role: "Treasurer",
    longBio:
      "Romir ensures financial transparency and efficiency across the organization. With an analytical mind and a heart for service, he ensures all funding is aligned with our mission to create impact where it's needed most.",
    image:
      "https://raw.githubusercontent.com/Randabble/FlashForwardfoundationWebsite/main/public/images/team/romirface.jpeg",
    email: "romir@flashforwardfoundation.org",
    linkedin: null,
  },
  {
    name: "Samarth Morentsov",
    role: "Secretary and R&D Lead",
    longBio:
      "Samarth is the organizational backbone of our team, ensuring accountability and clarity through precise documentation and scheduling. He makes sure our goals stay visible and on track.",
    image:
      "https://raw.githubusercontent.com/Randabble/FlashForwardfoundationWebsite/main/public/images/team/samarthface.jpeg",
    email: null,
    linkedin: null,
  },
  {
    name: "Muzaffar Hussain",
    role: "Marketing & Outreach Lead",
    longBio:
      "Muzaffar crafts compelling campaigns to amplify our mission. From social media strategy to community outreach, he helps tell the Flash Forward story in a way that inspires action.",
    image:
      "https://raw.githubusercontent.com/Randabble/FlashForwardfoundationWebsite/main/public/images/team/muzaffarface.jpeg",
    email: null,
    linkedin: null,
  },
  {
    name: "Neil Mukherjee",
    role: "Product Design Lead",
    longBio:
      "Neil oversees the design of our flashlight, turning ideas into effective, manufacturable solutions. He blends creative design with technical precision to ensure the product is both beautiful and functional.",
    image:
      "https://raw.githubusercontent.com/Randabble/FlashForwardfoundationWebsite/main/public/images/team/neilface.jpeg",
    email: null,
    linkedin: null,
  },
  {
    name: "Shreyas Prabhu",
    role: "Engineering Lead",
    longBio:
      "Shreyas leads the technical development behind Flash Forward. From prototyping and product design to problem-solving complex challenges, he ensures our engineering work is both innovative and impactful.",
    image:
      "https://raw.githubusercontent.com/Randabble/FlashForwardfoundationWebsite/main/public/images/team/shreyasface.jpeg",
    email: null,
    linkedin: null,
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="pt-32 pb-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Meet Our Team
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-orange-500 to-green-500" />
          <p className="mt-8 text-xl leading-relaxed text-gray-700">
            The passionate students behind Flash Forward, working together to light up education worldwide.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  <div className="relative h-28 w-28 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="rounded-full object-cover"
                    />
                    <span className="absolute inset-0 rounded-full border-4 border-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {member.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-green-600">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-700">
                      {member.longBio}
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="rounded-full border border-orange-200 px-4 py-2 text-xs font-semibold text-orange-600 transition-colors hover:bg-orange-50"
                        >
                          Email
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-green-200 px-4 py-2 text-xs font-semibold text-green-600 transition-colors hover:bg-green-50"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-500 to-orange-500 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold">Want to Join Our Team?</h2>
          <p className="mt-6 text-lg text-white/90">
            We&apos;re always looking for passionate students, educators, and professionals who want to make a difference.
          </p>
          <Link
            href="/get-involved"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-green-600 transition-colors hover:bg-green-50"
          >
            Volunteer With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
