import React, { useRef } from "react";
import MovieList from "./MovieList";

function MovieScroller() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-4/5">
        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Movies</h2>
          <div className="space-x-2">
            <button
              onClick={() => scrollBy(-400)}
              className="rounded-2xl px-3 py-2 shadow border hover:shadow-md active:scale-95"
            >
              ◀
            </button>
            <button
              onClick={() => scrollBy(400)}
              className="rounded-2xl px-3 py-2 shadow border hover:shadow-md active:scale-95"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Horizontal scroller: shows 6 items on large screens, scrolls to see the rest */}
        <div
          ref={ref}
          className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        >
          {MOVIES.map((m, idx) => (
            <article
              key={idx}
              className="shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 snap-start"
            >
              <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                <img
                  src={m.img}
                  alt={m.title}
                  className="block w-full aspect-[2/3] object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-sm font-medium line-clamp-1 text-center">
                {m.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
