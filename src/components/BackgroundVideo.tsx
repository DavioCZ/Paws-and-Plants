"use client";

export default function BackgroundVideo() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/calm-loop-8s.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}
