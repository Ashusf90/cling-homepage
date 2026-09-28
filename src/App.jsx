import {
  ArrowRight,
  Brain,
  Code2,
  Globe,
  Layers3,
  Menu,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, scalable websites and web applications designed around your business goals.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Powerful mobile experiences built to help businesses connect with their customers.",
    },
    {
      icon: Layers3,
      title: "ERP Solutions",
      description:
        "Integrated business solutions that simplify operations and improve productivity.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold tracking-tight">
            cling<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
  <a
    href="#home"
    className="text-sm text-white/70 transition hover:text-white"
  >
    Home
  </a>

  <a
    href="#services"
    className="text-sm text-white/70 transition hover:text-white"
  >
    Services
  </a>

  <a
    href="#work"
    className="text-sm text-white/70 transition hover:text-white"
  >
    Products
  </a>

  <a
    href="#technology"
    className="text-sm text-white/70 transition hover:text-white"
  >
    Technology
  </a>

  <a
    href="#about"
    className="text-sm text-white/70 transition hover:text-white"
  >
    About
  </a>
</div>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-violet-200 md:block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#work">Products</a>
  <a href="#technology">Technology</a>
  <a href="#about">About</a>
  <a href="#contact">Let's Talk</a>
</div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={16} />
              Technology • Innovation • Growth
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Making your
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                ideas happen.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              End-to-end IT solutions that transform ideas into powerful
              digital experiences, applications and business solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-violet-200"
              >
                Start a project
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#work"
                className="rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Explore our work
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative hidden h-[500px] lg:block">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20 bg-violet-500/5 shadow-[0_0_120px_rgba(139,92,246,0.2)]" />

            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <Brain size={80} strokeWidth={1} className="text-violet-300" />
            </div>

            <div className="absolute left-10 top-20 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <Code2 className="text-blue-400" />
            </div>

            <div className="absolute right-10 top-32 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <Globe className="text-fuchsia-400" />
            </div>

            <div className="absolute bottom-20 left-24 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <Smartphone className="text-violet-400" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-bold">350+</p>
            <p className="mt-2 text-sm text-white/50">Happy Clients</p>
          </div>

          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-bold">390+</p>
            <p className="mt-2 text-sm text-white/50">Projects Completed</p>
          </div>

          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-bold">32M+</p>
            <p className="mt-2 text-sm text-white/50">Lines of Code</p>
          </div>

          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-bold">1500+</p>
            <p className="mt-2 text-sm text-white/50">Coffee With Clients</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology that moves
              <span className="text-white/40"> business forward.</span>
            </h2>

            <p className="mt-5 text-white/50">
              From websites to enterprise solutions, we build digital
              products that solve real business problems.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-violet-400/[0.05]"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-white/50">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-violet-300">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK */}
      {/* PRODUCTS */}
<section id="work" className="px-6 py-28">
  <div className="mx-auto max-w-7xl">

    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Our products
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Digital products,
          <span className="text-white/40"> built to solve.</span>
        </h2>
      </div>

      <p className="max-w-md leading-7 text-white/50">
        From business automation to productivity platforms, Cling builds
        practical digital products for modern businesses.
      </p>
    </div>

    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      {/* RUSHO */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-500/20" />

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
            <Smartphone size={24} />
          </div>

          <p className="mt-7 text-xs uppercase tracking-widest text-violet-300">
            Home Services
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Rusho
          </h3>

          <p className="mt-4 text-sm leading-6 text-white/45">
            An on-demand home services platform connecting customers with
            trained and verified professionals.
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm text-white/60">
            Explore product
            <ArrowRight
              size={15}
              className="transition group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>

      {/* ARVIONPULSE */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
            <Globe size={24} />
          </div>

          <p className="mt-7 text-xs uppercase tracking-widest text-blue-300">
            Lead Generation
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            ArvionPulse
          </h3>

          <p className="mt-4 text-sm leading-6 text-white/45">
            A lead-generation platform that discovers and enriches business
            leads from multiple sources.
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm text-white/60">
            Explore product
            <ArrowRight
              size={15}
              className="transition group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>

      {/* TASK FLOW */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/40">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl transition group-hover:bg-fuchsia-500/20" />

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">
            <Layers3 size={24} />
          </div>

          <p className="mt-7 text-xs uppercase tracking-widest text-fuchsia-300">
            Productivity
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Task Flow
          </h3>

          <p className="mt-4 text-sm leading-6 text-white/45">
            A task management platform for organizing teams, projects and
            day-to-day work.
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm text-white/60">
            Explore product
            <ArrowRight
              size={15}
              className="transition group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>

      {/* CLING SALES */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
            <Code2 size={24} />
          </div>

          <p className="mt-7 text-xs uppercase tracking-widest text-cyan-300">
            Sales Platform
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Cling Sales
          </h3>

          <p className="mt-4 text-sm leading-6 text-white/45">
            A sales portal for lead generation, follow-ups, tracking,
            assignment and sales management.
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm text-white/60">
            Explore product
            <ArrowRight
              size={15}
              className="transition group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ABOUT / TECHNOLOGY */}
      {/* AI & TECHNOLOGY */}
<section
  id="technology"
  className="relative overflow-hidden border-y border-white/10 px-6 py-28"
>
  <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* LEFT */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Current tech focus
        </p>

        <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
          Building with
          <span className="block bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            intelligent technology.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/50">
          Cling explores emerging technologies to create smarter digital
          experiences and practical solutions for modern businesses.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Brain className="text-violet-400" size={28} />

            <h3 className="mt-5 text-lg font-semibold">
              Artificial Intelligence
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/40">
              Exploring AI-powered solutions for real-world applications.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Globe className="text-blue-400" size={28} />

            <h3 className="mt-5 text-lg font-semibold">
              Computer Vision
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/40">
              Intelligent visual systems designed to understand and analyze
              digital environments.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="relative min-h-[480px]">

        <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.02]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Main AI Card */}
        <div className="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-violet-400/20 bg-[#11121a]/90 p-8 shadow-[0_0_100px_rgba(139,92,246,0.15)] backdrop-blur-xl">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10">
                <Brain className="text-violet-300" size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  AI Vision System
                </p>

                <p className="text-xs text-white/40">
                  Intelligent analysis
                </p>
              </div>
            </div>

            <span className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Active
            </span>
          </div>

          {/* Scanner */}
          <div className="relative mt-8 h-52 overflow-hidden rounded-2xl border border-white/10 bg-black/30">

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-violet-400/30">

                <div className="absolute inset-4 rounded-full border border-violet-400/20" />

                <Brain
                  size={58}
                  strokeWidth={1}
                  className="text-violet-300"
                />

              </div>

            </div>

            {/* Scan Line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_15px_rgba(167,139,250,0.8)]" />

          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">

            <div className="rounded-xl bg-white/[0.04] p-3">
              <p className="text-[10px] uppercase text-white/30">
                Objects
              </p>
              <p className="mt-1 font-semibold">Live</p>
            </div>

            <div className="rounded-xl bg-white/[0.04] p-3">
              <p className="text-[10px] uppercase text-white/30">
                Accuracy
              </p>
              <p className="mt-1 font-semibold">AI</p>
            </div>

            <div className="rounded-xl bg-white/[0.04] p-3">
              <p className="text-[10px] uppercase text-white/30">
                Status
              </p>
              <p className="mt-1 font-semibold text-emerald-400">
                Ready
              </p>
            </div>

          </div>

        </div>

        {/* Floating badge */}
        <div className="absolute -right-3 top-12 rounded-2xl border border-white/10 bg-[#11121a]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Sparkles className="text-fuchsia-400" size={20} />

            <div>
              <p className="text-xs text-white/40">
                Technology
              </p>

              <p className="text-sm font-semibold">
                AI + Vision
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section id="contact" className="px-6 py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-600/20 to-blue-600/10 px-8 py-20 text-center sm:px-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              Let's build together
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
              Have an idea?
              <span className="block text-white/40">Let's make it happen.</span>
            </h2>

            <a
              href="mailto:info@clinginfotech.com"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-violet-200"
            >
              Start a conversation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-white/40 md:flex-row">
          <p>
            © 2026 Cling InfoTech. All rights reserved.
          </p>

          <p>Technology • Innovation • Growth</p>
        </div>
      </footer>
    </div>
  );
}

export default App;