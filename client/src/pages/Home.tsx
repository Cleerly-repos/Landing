/**
 * CLEERLY LANDING PAGE — "Warm Conversational" Design System
 * ===========================================================
 * Design: Warm Modernism — Human-Centered Product Design
 * Colors: Cream bg (#FAFAF8), Deep Navy (#0F2B5B), Sky Blue (#2563EB)
 * Fonts: Bricolage Grotesque (display) + Plus Jakarta Sans (body)
 * Layout: Asymmetric offset grid, zigzag sections, generous whitespace
 * Sections: Nav → Hero → Social Proof → Features → How It Works → Testimonials → CTA → Footer
 */

import { useEffect, useRef, useState } from "react";

// CDN URLs for all assets
const ASSETS = {
  heroBg: "https://private-us-east-1.manuscdn.com/sessionFile/QxPAKbw5BQC54qA5SEcrfg/sandbox/sb08u42m0onC5ndHjZO2HW-img-1_1772058831000_na1fn_Y2xlYXJseS1oZXJvLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUXhQQUtidzVCUUM1NHFBNVNFY3JmZy9zYW5kYm94L3NiMDh1NDJtMG9uQzVuZEhqWk8ySFctaW1nLTFfMTc3MjA1ODgzMTAwMF9uYTFmbl9ZMnhsWVhKc2VTMW9aWEp2TFdKbi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ic8EFdUYDaa3KmVTYPTdaNKmqPJXNMY8dmyqC5iAA2TtOtmLhwGkhI0uHPK1UzJTyNpeR0dbyK9DIJfuKcJwProhJle5WuZ0W-JojLZFlz0bqCz8kSK92cCHRXadrANGY-U19MXNvNRhjgGimboUkA7JdUXlAQD8FnxsFLzUFOQpSCHqywNXfQnXlb8~cHq-nnnlxYZYG0xohhIHBQ5MeXx-KpFXgvI8IJP2Tt~1Fnue55l6xrg0jGS4px0Co4rNpELPyf~sAeDcBA~8VZUOsDEEjVaz219f~lw5RXSHTxUQzVkUsQiIRl8LPXYxQ8IsdNtTUkTDt-hcNuZlmjAu8A__",
  peopleHero: "https://private-us-east-1.manuscdn.com/sessionFile/QxPAKbw5BQC54qA5SEcrfg/sandbox/sb08u42m0onC5ndHjZO2HW-img-2_1772058834000_na1fn_Y2xlYXJseS1wZW9wbGUtaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUXhQQUtidzVCUUM1NHFBNVNFY3JmZy9zYW5kYm94L3NiMDh1NDJtMG9uQzVuZEhqWk8ySFctaW1nLTJfMTc3MjA1ODgzNDAwMF9uYTFmbl9ZMnhsWVhKc2VTMXdaVzl3YkdVdGFHVnlidy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JIUU-QECiXm6O0dk7ycPnstNta3skU6mUewV81vSpqtG~1jIfGRDIQJ4U-yj4VOS3ioi3T9rrc5u~Hn6xect8xKO6HcRnj41BKimFlmZrU8dm0nadi8zl1dP9RaKRZTMgtTQjtz7cDdDfxPJnQV4Ya-q56RU6yoe7Dgs9NDEeOuDpjkvDEMfuhd2zBPpxJYeCmO21tOON9mHCsunwtTHEi0Xj6Bsue1hfwJ2bsk3rWu0xpYX5PJpv01QMTWzxxH9QU-CA5ItPuw6PzjXB2AGtGUKzgso5Y7YjtHdtk4oYjOfOCOo-UM15QQMjqVFXv-lKWKtDBKd9~YQhOlZmWIw4w__",
  socialProof: "https://private-us-east-1.manuscdn.com/sessionFile/QxPAKbw5BQC54qA5SEcrfg/sandbox/sb08u42m0onC5ndHjZO2HW-img-4_1772058834000_na1fn_Y2xlYXJseS1zb2NpYWwtcHJvb2Y.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUXhQQUtidzVCUUM1NHFBNVNFY3JmZy9zYW5kYm94L3NiMDh1NDJtMG9uQzVuZEhqWk8ySFctaW1nLTRfMTc3MjA1ODgzNDAwMF9uYTFmbl9ZMnhsWVhKc2VTMXpiMk5wWVd3dGNISnZiMlkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MKemixPqs5mFU6x-N8OvwbeBC8bAhyOg1-cjBZzrFuCDgeR3BJRLclHCo7dVfm3uGsGZnNj-idb9F4WoPC5tYuLYrwy9L-s-hqcJnOHGXzkKnZAc1esOSCcfxDIliabfBuX6lHpxrtKK4YEZWcLppDKkRsB18r1FP8TMDT5CjOQvlhWI~Erjc~697krh3h72N0VX5VNO9D~7UDhYQW-eNby90-44R8x4~uk5WoyPb02kf1nCEH9ADi8bkRSYpGXVH0pg6S-u0kpNrbNZxhk~numX103Q4VfkrLH481Kcx-q52dZe9zjqaqUf~RmE5Zy9-l4XSjyBK0trOi7IkoU56w__",
  appLogin: "https://d2xsxph8kpxj0f.cloudfront.net/310519663299050104/3tmpuwmMquLKpZWKQtRFfU/2edfb86f-65a0-4937-9ca0-e8588d9142a7_1be11d8d.jpg",
  appSignup: "https://d2xsxph8kpxj0f.cloudfront.net/310519663299050104/3tmpuwmMquLKpZWKQtRFfU/5ec4a4ca-9a14-4971-8d08-3fa77e4dee2e_63f1aab1.jpg",
  appMain: "https://d2xsxph8kpxj0f.cloudfront.net/310519663299050104/3tmpuwmMquLKpZWKQtRFfU/cca2ea67-3685-4ca4-8cd8-d8537856ad3a_e1447cf0.jpg",
  appFilled: "https://d2xsxph8kpxj0f.cloudfront.net/310519663299050104/3tmpuwmMquLKpZWKQtRFfU/7b1b9376-81f5-4a48-b6a7-51950e511506_72503b54.jpg",
  appNeedsImprovement: "https://d2xsxph8kpxj0f.cloudfront.net/310519663299050104/3tmpuwmMquLKpZWKQtRFfU/d7417c4d-a323-41e6-bccb-3e31fbc19302_a84bae53.jpg",
  appSoundsNatural: "https://d2xsxph8kpxj0f.cloudfront.net/310519663299050104/3tmpuwmMquLKpZWKQtRFfU/98d8e7f8-8cce-4296-855d-e2924fa26597_7bd8d903.jpg",
  appAnalysis: "https://d2xsxph8kpxj0f.cloudfront.net/310519663299050104/3tmpuwmMquLKpZWKQtRFfU/0e5257b3-71cd-4032-8202-bb1be6f264d6_7b39729c.jpg",
};

// Intersection Observer hook for scroll reveals
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// Navigation Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[oklch(0.90_0.015_80)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-[oklch(0.55_0.22_255)] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2C5.134 2 2 5.134 2 9c0 1.386.396 2.678 1.08 3.77L2.2 15.2a.6.6 0 00.6.8l2.43-.88A6.96 6.96 0 009 16c3.866 0 7-3.134 7-7s-3.134-7-7-7z" fill="white" fillOpacity="0.9"/>
              <circle cx="6.5" cy="9" r="1" fill="oklch(0.55 0.22 255)"/>
              <circle cx="9" cy="9" r="1" fill="oklch(0.55 0.22 255)"/>
              <circle cx="11.5" cy="9" r="1" fill="oklch(0.55 0.22 255)"/>
            </svg>
          </div>
          <span className="font-display font-700 text-xl text-[oklch(0.18_0.03_255)] tracking-tight">
            Cleerly
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-[oklch(0.45_0.02_255)] hover:text-[oklch(0.55_0.22_255)] transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-[oklch(0.45_0.02_255)] hover:text-[oklch(0.55_0.22_255)] transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium text-[oklch(0.45_0.02_255)] hover:text-[oklch(0.55_0.22_255)] transition-colors">Stories</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="px-5 py-2.5 bg-[oklch(0.55_0.22_255)] text-white text-sm font-semibold rounded-full hover:bg-[oklch(0.48_0.22_255)] transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Get the App
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-[oklch(0.45_0.02_255)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[oklch(0.90_0.015_80)] px-6 py-4 flex flex-col gap-4">
          <a href="#features" className="text-sm font-medium text-[oklch(0.45_0.02_255)]" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-[oklch(0.45_0.02_255)]" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" className="text-sm font-medium text-[oklch(0.45_0.02_255)]" onClick={() => setMenuOpen(false)}>Stories</a>
          <a
            href="#download"
            className="px-5 py-3 bg-[oklch(0.55_0.22_255)] text-white text-sm font-semibold rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get the App — Free
          </a>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [activeScreen, setActiveScreen] = useState(0);
  const screens = [ASSETS.appLogin, ASSETS.appFilled, ASSETS.appNeedsImprovement, ASSETS.appSoundsNatural];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 blob-bg" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left: Copy */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[oklch(0.93_0.04_255)] text-[oklch(0.35_0.18_255)] rounded-full text-sm font-semibold mb-6 border border-[oklch(0.80_0.10_255)/0.3]">
              <span className="w-2 h-2 bg-[oklch(0.55_0.22_255)] rounded-full animate-pulse" />
              AI-Powered Language Coach
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-800 text-[oklch(0.18_0.03_255)] leading-[1.05] tracking-tight mb-6">
              Say it the{" "}
              <span className="relative inline-block">
                <span className="text-[oklch(0.55_0.22_255)]">right way</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
                  <path d="M0 5 Q50 1 100 4 Q150 7 200 3" stroke="oklch(0.55 0.22 255)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              ,{" "}
              <br className="hidden sm:block" />
              every time.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[oklch(0.42_0.02_255)] leading-relaxed mb-8 max-w-xl font-body">
              Cleerly analyzes your English phrases and tells you exactly how natural they sound — then suggests better alternatives for every context, from work emails to texting your partner.
            </p>

            {/* Before/After Demo */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-lg">
              <div className="flex-1 bg-white/80 backdrop-blur-sm border border-[oklch(0.90_0.015_80)] rounded-2xl px-4 py-3">
                <div className="text-xs font-semibold text-[oklch(0.72_0.16_60)] mb-1 flex items-center gap-1.5">
                  <span>⚠️</span> Before Cleerly
                </div>
                <p className="text-sm text-[oklch(0.35_0.02_255)] font-medium italic">"How is it called?"</p>
              </div>
              <div className="hidden sm:flex items-center text-[oklch(0.55_0.22_255)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <div className="flex-1 bg-[oklch(0.93_0.04_255)] border border-[oklch(0.80_0.10_255)/0.4] rounded-2xl px-4 py-3">
                <div className="text-xs font-semibold text-[oklch(0.55_0.17_145)] mb-1 flex items-center gap-1.5">
                  <span>✅</span> With Cleerly
                </div>
                <p className="text-sm text-[oklch(0.22_0.06_255)] font-semibold">"What's it called?"</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[oklch(0.55_0.22_255)] text-white font-semibold rounded-full text-base hover:bg-[oklch(0.48_0.22_255)] transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-9a1 1 0 112 0v3.586l1.707 1.707a1 1 0 01-1.414 1.414l-2-2A1 1 0 019 11V7z"/>
                </svg>
                Start for Free
                <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L8.293 3.707a1 1 0 010-1.414z"/>
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/80 backdrop-blur-sm border border-[oklch(0.85_0.02_255)] text-[oklch(0.22_0.06_255)] font-semibold rounded-full text-base hover:bg-white hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                See How It Works
              </a>
            </div>


          </div>

          {/* Right: Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] md:w-[320px]">
              {/* Decorative blob behind phone */}
              <div className="absolute -inset-8 bg-[oklch(0.93_0.04_255)] rounded-full blur-3xl opacity-60" />
              
              {/* Phone frame */}
              <div className="relative phone-shadow">
                <div className="bg-[oklch(0.18_0.03_255)] rounded-[40px] p-2.5 shadow-2xl">
                  <div className="bg-[oklch(0.96_0.008_80)] rounded-[32px] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-[oklch(0.96_0.008_80)] px-5 pt-3 pb-1 flex justify-between items-center">
                      <span className="text-xs font-semibold text-[oklch(0.18_0.03_255)]">9:47</span>
                      <div className="flex items-center gap-1">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="oklch(0.18 0.03 255)">
                          <rect x="0" y="4" width="2" height="6" rx="0.5"/>
                          <rect x="3" y="2.5" width="2" height="7.5" rx="0.5"/>
                          <rect x="6" y="1" width="2" height="9" rx="0.5"/>
                          <rect x="9" y="0" width="2" height="10" rx="0.5"/>
                        </svg>
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="oklch(0.18 0.03 255)">
                          <path d="M7 2C4.5 2 2.3 3.1 1 4.8L0 3.7C1.6 1.7 4.1.5 7 .5s5.4 1.2 7 3.2L13 4.8C11.7 3.1 9.5 2 7 2z"/>
                          <path d="M7 5c-1.5 0-2.8.6-3.8 1.6L2 5.4C3.3 4.1 5 3.3 7 3.3s3.7.8 5 2.1l-1.2 1.2C9.8 5.6 8.5 5 7 5z"/>
                          <circle cx="7" cy="9" r="1.5"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* App screen - cycling through screenshots */}
                    <div className="relative overflow-hidden" style={{height: '520px'}}>
                      {screens.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`App screen ${i + 1}`}
                          className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700"
                          style={{ opacity: activeScreen === i ? 1 : 0 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen indicator dots */}
              <div className="flex justify-center gap-2 mt-4">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreen(i)}
                    className={`rounded-full transition-all duration-300 ${
                      activeScreen === i
                        ? "w-6 h-2 bg-[oklch(0.55_0.22_255)]"
                        : "w-2 h-2 bg-[oklch(0.80_0.04_255)]"
                    }`}
                    aria-label={`Screen ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[oklch(0.60_0.02_255)] animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 14.293l-5.646-5.647a1 1 0 011.414-1.414L10 11.464l4.232-4.232a1 1 0 011.414 1.414L10 14.293z"/>
        </svg>
      </div>
    </section>
  );
}



// Problem Section
function ProblemSection() {
  const ref = useReveal();
  const problems = [
    {
      emoji: "😰",
      title: "You know what you mean, but not how to say it",
      desc: "You have the idea perfectly formed in your head — but translating it into natural English feels like a guessing game.",
    },
    {
      emoji: "😬",
      title: "What sounds fine to you sounds awkward to natives",
      desc: "Direct translations from your native language often create phrases that are technically correct but socially off.",
    },
    {
      emoji: "😕",
      title: "Context changes everything",
      desc: "The same message to your boss and your best friend requires completely different phrasing — and no one teaches you this.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="max-w-2xl mb-14">
            <div className="text-sm font-semibold text-[oklch(0.55_0.22_255)] uppercase tracking-widest mb-3">The Problem</div>
            <h2 className="font-display text-4xl md:text-5xl font-800 text-[oklch(0.18_0.03_255)] leading-tight mb-4">
              Speaking English and <em className="font-serif-italic not-italic text-[oklch(0.55_0.22_255)]">sounding natural</em> are two different things.
            </h2>
            <p className="text-lg text-[oklch(0.45_0.02_255)] leading-relaxed">
              Millions of ESL speakers are fluent but still feel uncertain every time they send a message or speak up in a meeting. Grammar isn't the problem — context is.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const cardRef = useReveal();
            return (
              <div
                key={i}
                ref={cardRef}
                className="reveal bg-[oklch(0.985_0.008_80)] rounded-2xl p-7 border border-[oklch(0.90_0.015_80)] hover:border-[oklch(0.80_0.10_255)/0.4] hover:shadow-lg transition-all duration-300 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="font-display text-lg font-700 text-[oklch(0.18_0.03_255)] mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-[oklch(0.52_0.015_255)] leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      tag: "Context-Aware Analysis",
      headline: "The same phrase means different things in different contexts.",
      body: "Cleerly understands that 'I need this done ASAP' hits differently when texting a coworker versus a close friend. Select your context — Work, Friend, Partner, or Social — and get feedback that actually fits your situation.",
      visual: (
        <div className="bg-[oklch(0.96_0.008_80)] rounded-2xl p-5 space-y-3">
          <p className="text-xs font-semibold text-[oklch(0.52_0.015_255)] uppercase tracking-wider">Context</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "💼 Work", active: false },
              { label: "💬 Friend", active: true },
              { label: "❤️ Partner", active: false },
              { label: "📱 Social", active: false },
            ].map((ctx) => (
              <span
                key={ctx.label}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  ctx.active
                    ? "bg-[oklch(0.55_0.22_255)] text-white border-[oklch(0.55_0.22_255)] shadow-sm"
                    : "bg-white text-[oklch(0.35_0.02_255)] border-[oklch(0.88_0.015_80)]"
                }`}
              >
                {ctx.label}
              </span>
            ))}
          </div>
          <div className="bg-white rounded-xl p-4 border border-[oklch(0.90_0.015_80)]">
            <p className="text-xs font-semibold text-[oklch(0.52_0.015_255)] mb-2">Your phrase</p>
            <p className="text-sm font-medium text-[oklch(0.22_0.06_255)]">"What's it called?"</p>
          </div>
          <div className="bg-[oklch(0.93_0.06_145)/0.3] rounded-xl p-4 border border-[oklch(0.55_0.17_145)/0.3]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">✅</span>
              <span className="text-sm font-bold text-[oklch(0.35_0.17_145)]">Sounds Natural</span>
            </div>
            <p className="text-xs text-[oklch(0.45_0.02_255)] leading-relaxed">A common, casual way to ask for the name of something in informal conversations.</p>
          </div>
        </div>
      ),
      flip: false,
    },
    {
      tag: "Tone Calibration",
      headline: "Fine-tune your tone from formal to friendly — instantly.",
      body: "A single slider lets you dial in exactly how you want to come across. Whether you're writing a professional email or a flirty text, Cleerly adjusts its analysis and suggestions to match your intended tone.",
      visual: (
        <div className="bg-[oklch(0.96_0.008_80)] rounded-2xl p-5 space-y-4">
          <p className="text-xs font-semibold text-[oklch(0.52_0.015_255)] uppercase tracking-wider">Tone</p>
          <div className="space-y-2">
            <div className="relative h-3 bg-[oklch(0.88_0.015_80)] rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-3/5 bg-[oklch(0.55_0.22_255)] rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 left-[calc(60%-10px)] w-5 h-5 bg-[oklch(0.55_0.22_255)] rounded-full border-2 border-white shadow-md" />
            </div>
            <div className="flex justify-between text-xs text-[oklch(0.52_0.015_255)]">
              {["Formal", "Neutral", <strong key="c" className="text-[oklch(0.55_0.22_255)]">Casual</strong>, "Friendly", "Flirty"].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { tone: "Formal", phrase: "Could you please clarify?", color: "oklch(0.22 0.06 255)" },
              { tone: "Casual", phrase: "What do you mean?", color: "oklch(0.55 0.22 255)" },
              { tone: "Friendly", phrase: "Can you explain that?", color: "oklch(0.55 0.17 145)" },
              { tone: "Flirty", phrase: "Tell me more 😊", color: "oklch(0.72 0.16 60)" },
            ].map((item) => (
              <div key={item.tone} className="bg-white rounded-xl p-3 border border-[oklch(0.90_0.015_80)]">
                <div className="text-xs font-semibold mb-1" style={{ color: item.color }}>{item.tone}</div>
                <div className="text-xs text-[oklch(0.35_0.02_255)] italic">"{item.phrase}"</div>
              </div>
            ))}
          </div>
        </div>
      ),
      flip: true,
    },
    {
      tag: "Smart Alternatives",
      headline: "Never get stuck searching for the right words again.",
      body: "When your phrase needs improvement, Cleerly doesn't just tell you what's wrong — it gives you 3 ready-to-use alternatives that sound like a native speaker wrote them. Copy, paste, and communicate with confidence.",
      visual: (
        <div className="bg-[oklch(0.96_0.008_80)] rounded-2xl p-5 space-y-3">
          <div className="bg-[oklch(0.98_0.04_60)/0.5] rounded-xl p-4 border border-[oklch(0.72_0.16_60)/0.3]">
            <div className="flex items-center gap-2 mb-2">
              <span>⚠️</span>
              <span className="text-sm font-bold text-[oklch(0.55_0.16_60)]">Needs Improvement</span>
            </div>
            <p className="text-xs text-[oklch(0.35_0.02_255)] italic mb-2">"How is it called?"</p>
            <p className="text-xs text-[oklch(0.45_0.02_255)] leading-relaxed">Not commonly used in casual conversation. A more natural phrasing would be "What's it called?"</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[oklch(0.52_0.015_255)] uppercase tracking-wider mb-2">Alternatives</p>
            <div className="space-y-2">
              {["What's it called?", "How do you call it?", "What is it called?"].map((alt, i) => (
                <div key={i} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-[oklch(0.90_0.015_80)] group hover:border-[oklch(0.55_0.22_255)/0.5] transition-colors">
                  <span className="text-sm text-[oklch(0.22_0.06_255)] italic font-medium">"{alt}"</span>
                  <button className="text-[oklch(0.55_0.22_255)] opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M5 2a1 1 0 00-1 1v7a1 1 0 001 1h6a1 1 0 001-1V5.414L9.586 2H5zm5 1.586L11.414 5H10V3.586zM4 3h5v3h3v5H4V3z"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      flip: false,
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[oklch(0.985_0.008_80)]">
      <div className="container">
        <div className="max-w-xl mb-16">
          <div className="text-sm font-semibold text-[oklch(0.55_0.22_255)] uppercase tracking-widest mb-3">Features</div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-[oklch(0.18_0.03_255)] leading-tight">
            Everything you need to sound like a native.
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {features.map((feature, i) => {
            const ref = useReveal();
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal grid md:grid-cols-2 gap-10 md:gap-16 items-center ${feature.flip ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Text */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[oklch(0.93_0.04_255)] text-[oklch(0.35_0.18_255)] rounded-full text-xs font-semibold mb-4 border border-[oklch(0.80_0.10_255)/0.3]">
                    {feature.tag}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-700 text-[oklch(0.18_0.03_255)] leading-snug mb-4">
                    {feature.headline}
                  </h3>
                  <p className="text-base text-[oklch(0.45_0.02_255)] leading-relaxed">
                    {feature.body}
                  </p>
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-[oklch(0.93_0.04_255)/0.4] rounded-3xl blur-2xl" />
                  <div className="relative shadow-xl rounded-2xl overflow-hidden border border-[oklch(0.90_0.015_80)]">
                    {feature.visual}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// How It Works
function HowItWorksSection() {
  const ref = useReveal();
  const steps = [
    {
      number: "01",
      title: "Type what you want to say",
      desc: "Enter any phrase, sentence, or message you're unsure about — in any situation.",
      icon: "✍️",
    },
    {
      number: "02",
      title: "Choose your context & tone",
      desc: "Select who you're talking to and how formal you want to sound. Work, friend, partner, or social.",
      icon: "🎯",
    },
    {
      number: "03",
      title: "Get instant analysis",
      desc: "Cleerly tells you if your phrase sounds natural, and exactly why — with a clear explanation.",
      icon: "⚡",
    },
    {
      number: "04",
      title: "Use the perfect alternative",
      desc: "Pick from 3 native-sounding alternatives and communicate with total confidence.",
      icon: "✅",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-[oklch(0.55_0.22_255)] uppercase tracking-widest mb-3">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-[oklch(0.18_0.03_255)] leading-tight mb-4">
            From uncertain to confident in 4 steps.
          </h2>
          <p className="text-lg text-[oklch(0.45_0.02_255)]">
            No grammar lessons, no textbooks. Just instant, practical feedback for real conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[oklch(0.93_0.04_255)] via-[oklch(0.55_0.22_255)/0.3] to-[oklch(0.93_0.04_255)]" />

          {steps.map((step, i) => {
            const stepRef = useReveal();
            return (
              <div
                key={i}
                ref={stepRef}
                className="reveal relative bg-[oklch(0.985_0.008_80)] rounded-2xl p-6 border border-[oklch(0.90_0.015_80)] hover:border-[oklch(0.55_0.22_255)/0.4] hover:shadow-lg transition-all duration-300 text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-14 h-14 bg-[oklch(0.93_0.04_255)] rounded-2xl mb-4 text-2xl">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-[oklch(0.55_0.22_255)] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-700 text-[oklch(0.18_0.03_255)] mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-[oklch(0.52_0.015_255)] leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* App screenshot showcase */}
        <div className="mt-16 md:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.93_0.04_255)/0.2] to-transparent rounded-3xl" />
          <div className="flex justify-center items-end gap-4 md:gap-6 overflow-hidden">
            {[ASSETS.appLogin, ASSETS.appMain, ASSETS.appFilled, ASSETS.appNeedsImprovement].map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 transition-all duration-500 hover:scale-105"
                style={{
                  width: i === 1 || i === 2 ? "180px" : "140px",
                  transform: `translateY(${i === 0 || i === 3 ? "20px" : "0px"})`,
                  opacity: i === 0 || i === 3 ? 0.7 : 1,
                }}
              >
                <div className="bg-[oklch(0.18_0.03_255)] rounded-[24px] p-1.5 shadow-xl">
                  <div className="rounded-[18px] overflow-hidden">
                    <img src={src} alt={`App screen ${i + 1}`} className="w-full object-cover object-top" style={{ height: i === 1 || i === 2 ? "340px" : "260px" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



// Social Proof / People Section
function SocialProofSection() {
  const ref = useReveal();
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={ref} className="reveal relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-[oklch(0.93_0.04_255)/0.4] rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ASSETS.peopleHero}
                alt="Diverse group of ESL speakers confidently communicating"
                className="w-full object-cover"
                style={{ maxHeight: "420px" }}
              />

            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="text-sm font-semibold text-[oklch(0.55_0.22_255)] uppercase tracking-widest mb-3">Who It's For</div>
            <h2 className="font-display text-4xl md:text-5xl font-800 text-[oklch(0.18_0.03_255)] leading-tight mb-6">
              Built for every ESL speaker who wants to be understood — and respected.
            </h2>
            <p className="text-lg text-[oklch(0.45_0.02_255)] leading-relaxed mb-8">
              Whether you're navigating a new workplace, building friendships, or just trying to text naturally — Cleerly is the language coach that fits in your pocket.
            </p>

            <div className="space-y-4">
              {[
                { icon: "💼", title: "Professionals", desc: "Write emails, Slack messages, and presentations that command respect." },
                { icon: "🎓", title: "Students", desc: "Participate confidently in class discussions and social situations." },
                { icon: "🏠", title: "New residents", desc: "Navigate daily life — from doctor's appointments to neighborhood chats." },
                { icon: "💑", title: "Couples & friends", desc: "Express yourself authentically in your closest relationships." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[oklch(0.985_0.008_80)] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[oklch(0.93_0.04_255)] flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-[oklch(0.22_0.06_255)] mb-0.5">{item.title}</div>
                    <div className="text-sm text-[oklch(0.52_0.015_255)]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const ref = useReveal();
  return (
    <section id="download" className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div
          ref={ref}
          className="reveal cta-gradient rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white/90 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <span className="w-2 h-2 bg-[oklch(0.72_0.16_60)] rounded-full animate-pulse" />
              Free to start — no credit card required
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-800 text-white leading-tight mb-5">
              Stop second-guessing.<br />Start communicating with Cleerly.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Stop second-guessing your English. Cleerly gives you instant, context-aware feedback so you always sound natural and confident.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-7 py-4 bg-white/15 text-white/80 rounded-full text-base border border-white/20 cursor-default">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="opacity-70">
                  <path d="M10.5 2C7.462 2 5 4.462 5 7.5V8H4a1 1 0 00-1 1v3a1 1 0 001 1h1v.5C5 15.98 7.462 18 10.5 18S16 15.98 16 13.5V13h1a1 1 0 001-1V9a1 1 0 00-1-1h-1v-.5C16 4.462 13.538 2 10.5 2zm-1.5 6a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm-1.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
                </svg>
                Coming soon to the App Store &amp; Google Play
              </div>
            </div>

            <p className="text-sm text-white/60">
              Available on iOS and Android · Privacy-first
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.03_255)] text-white py-14">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[oklch(0.55_0.22_255)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C5.134 2 2 5.134 2 9c0 1.386.396 2.678 1.08 3.77L2.2 15.2a.6.6 0 00.6.8l2.43-.88A6.96 6.96 0 009 16c3.866 0 7-3.134 7-7s-3.134-7-7-7z" fill="white" fillOpacity="0.9"/>
                  <circle cx="6.5" cy="9" r="1" fill="oklch(0.55 0.22 255)"/>
                  <circle cx="9" cy="9" r="1" fill="oklch(0.55 0.22 255)"/>
                  <circle cx="11.5" cy="9" r="1" fill="oklch(0.55 0.22 255)"/>
                </svg>
              </div>
              <span className="font-display font-700 text-xl tracking-tight">Cleerly</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-4">
              The AI-powered language coach that helps ESL speakers communicate naturally in every context and tone.
            </p>
            <p className="text-sm text-white/40 font-serif-italic">"Say it the right way, every time."</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5">
              {["Features", "How It Works"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {["About", "Blog", "Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">© 2026 Cleerly. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a key={social} href="#" className="text-sm text-white/40 hover:text-white transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.985_0.008_80)]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </div>
  );
}
