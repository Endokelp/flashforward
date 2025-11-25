import Image from "next/image";
import Link from "next/link";

const impactStats = [
  {
    value: "685M+",
    label: "People living without reliable electricity",
    detail: "Source: Flash Forward impact research",
  },
  {
    value: "60%",
    label: "Less study time after sunset for students in off-grid homes",
    detail: "Energy poverty drastically reduces learning hours",
  },
  {
    value: "+2-3",
    label: "Additional study hours every night with solar light",
    detail: "Students report major gains after receiving flashlights",
  },
];

const testimonials = [
  {
    name: "Akosua Mensah",
    location: "Rural Ghana",
    quote:
      "Before the solar flashlight, I could only study when the sun was out. Now I can do my homework at night and my grades have improved so much. I want to become a doctor to help my community.",
  },
  {
    name: "Ama Osei",
    location: "Northern Ghana",
    quote:
      "I love reading so much, but before I could only read during the day. Now with my solar flashlight, I can read my favorite books every night. I dream of writing my own stories someday.",
  },
];

const processSteps = [
  "Student volunteers assemble solar flashlights at Sammamish High School&apos;s Builders Club.",
  "Teams learn 3D modeling, circuit design, soldering, and quality testing while building each unit.",
  "Distribution partners in Ghana coordinate safe delivery and training for families receiving lights.",
];

export default function ImpactPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Measuring Our Impact
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-green-500 to-orange-500" />
          <p className="mt-8 text-xl leading-relaxed text-gray-700">
            Lighting up education and transforming lives across off-grid communities in Ghana and beyond.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-green-100 bg-white p-8 text-center shadow-lg"
              >
                <div className="text-4xl font-bold text-green-600">
                  {stat.value}
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-900">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm text-gray-500">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">
                Student-Led Assembly
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Our assembly process is designed to be educational and engaging for student volunteers. Working in teams at Sammamish High School&apos;s Builders Club, students learn valuable STEM skills while contributing to a meaningful cause.
              </p>
              <ul className="space-y-3 text-gray-700">
                {processSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-1 h-3 w-3 rounded-full bg-orange-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[380px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
                alt="Students assembling flashlights"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Stories from Students
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-700">
            Solar flashlights create safer homes, healthier study environments, and brighter futures for young learners.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-yellow-100 bg-white p-8 shadow-lg"
              >
                <p className="text-lg italic text-gray-700">“{testimonial.quote}”</p>
                <div className="mt-6 text-sm font-semibold text-orange-600">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-500 to-orange-500 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold">Help Us Scale Our Impact</h2>
          <p className="mt-6 text-lg text-white/90">
            Every donation helps us reach more students and expand our distribution network across Africa.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://gofund.me/436b67db"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-green-600 transition-colors hover:bg-green-50"
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
