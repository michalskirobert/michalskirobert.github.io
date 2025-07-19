import BackButton from "@components/not-found-back-button/wrapper";
import { IndonesianLandscapeSVG, WayangPuppetSVG } from "./images";

import Link from "next/link";

const NotFoundPage = async () => (
  <section
    className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8
        bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffc300%27 fill-opacity=%270.15%27%3E%3Cpath d=%27M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%27%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]
        bg-dark text-light font-inter bg-[var(--clr-dark)]"
  >
    <div className="w-full bg-[#001d3d]/90 rounded-xl overflow-hidden shadow-2xl border-2 border-[#ffc300] relative before:absolute before:top-1 before:left-1 before:right-1 before:bottom-1 before:border-2 before:border-dashed before:border-yellow-400 before:opacity-60 before:pointer-events-none">
      <div className="relative">
        <IndonesianLandscapeSVG />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001d3d] to-transparent pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col items-center">
        <div className="relative mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-[#ffd60a] relative pl-8 before:absolute before:top-[-0.3rem] before:left-[-1.5rem] before:w-2 before:h-full before:rounded-sm before:bg-gradient-to-b before:from-red-600 before:to-white">
            404
          </h1>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-lg text-white/80 max-w-lg mx-auto">
            The page you&apos;re looking for seems to have wandered off to
            explore...
          </p>
        </div>

        <div className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite] mb-10">
          <WayangPuppetSVG />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="bg-[#ffc300] !text-[#001d3d] transition-all duration-300 !no-underline hover:bg-[#ffd60a] hover:-translate-y-1 px-8 py-3 rounded-full font-medium text-lg !flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Back Home
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  </section>
);

export default NotFoundPage;
