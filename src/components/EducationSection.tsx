import { GraduationCap } from "lucide-react";

const education = {
  collegeName: "Sri Indu College of Engineering and Technology",
  course: "B.Tech",
  stream: "Information Technology",
  years: "2017 - 2021",
  cgpa: "7.93 CGPA",
};

export default function EducationSection() {
  return (
    <section id="education" className="min-h-[52vh] scroll-mt-24 py-4">
      <h2 className="mb-8 flex items-center gap-2 text-3xl font-bold text-white">
        <GraduationCap className="h-6 w-6 text-gold-500" />
        Education
      </h2>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_28%)]" />

        <div className="relative">
          <h3 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {education.collegeName}
          </h3>

          <div className="mt-8 grid gap-4 sm:gap-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
              <p className="text-lg font-medium text-white sm:text-xl">{education.course}</p>
              <p className="text-base font-semibold text-gold-500 sm:text-lg">
                {education.years}
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-lg font-medium text-white sm:text-xl">{education.stream}</p>
              <p className="text-base font-semibold text-gold-500 sm:text-lg">{education.cgpa}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
