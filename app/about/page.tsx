import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Education",
    description:
      "Without safe lighting, children cannot study after dusk, limiting their educational opportunities and future prospects.",
    accent: "border-orange-500 text-orange-600",
  },
  {
    title: "Health",
    description:
      "Kerosene lamps cause over 3.2 million deaths annually from indoor air pollution, posing serious health risks to families.",
    accent: "border-green-500 text-green-600",
  },
  {
    title: "Environment",
    description:
      "Fuel-based lighting emits 190 million tonnes of CO2 per year, contributing significantly to climate change.",
    accent: "border-yellow-500 text-yellow-600",
  },
  {
    title: "Economic",
    description:
      "Families spend up to 40% of income on kerosene lamps, trapping them in a cycle of poverty.",
    accent: "border-orange-500 text-orange-600",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            About Flash Forward
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-orange-500 to-green-500" />
          <p className="mt-8 text-xl leading-relaxed text-gray-700">
            We&apos;re a student-led nonprofit organization dedicated to bringing solar-powered light to children in off-grid communities across Ghana and beyond.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Why We Exist
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Flash Forward was founded by high school students in the Bellevue School District who witnessed the devastating effects of energy poverty during a school presentation about global challenges. Moved by the stories of children unable to study after dark, our founders decided to take action.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              What started as a small project has grown into a comprehensive nonprofit organization. Our team combines engineering students who design and prototype the solar flashlights, business students who manage operations and partnerships, and advocacy students who raise awareness about energy poverty.
            </p>
          </div>
          <div className="relative h-[420px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
              alt="Team working together"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            The Four Pillars of Energy Poverty
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-700">
            Energy poverty affects every part of life. We designed our program to respond to the educational, health, environmental, and economic realities students face every night.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`rounded-xl border-t-4 bg-white p-8 shadow-lg ${pillar.accent.split(" ")[0]}`}
              >
                <h3 className={`text-2xl font-semibold ${pillar.accent.split(" ")[1]}`}>
                  {pillar.title}
                </h3>
                <p className="mt-4 text-gray-700">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative h-[380px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
                alt="Students studying with solar lights"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">
                Our Team Story
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Flash Forward was founded by a group of passionate students in the Bellevue School District who witnessed the devastating effects of energy poverty during a school presentation about global challenges. Moved by the stories of children unable to study after dark, our founders decided to take action.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We believe that young people have the power to create meaningful change. Through Flash Forward, we&apos;re not just providing light – we&apos;re empowering the next generation of leaders to tackle global challenges with innovation and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-green-500 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold">Join Our Mission</h2>
          <p className="mt-6 text-lg text-white/90">
            Together, we can light up education and create brighter futures for children around the world.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://gofund.me/436b67db"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
            >
              Donate Now
            </a>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white px-8 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
