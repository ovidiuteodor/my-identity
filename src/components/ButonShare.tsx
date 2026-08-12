"use client";

export default function ButonShare() {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white" onClick={() => navigator.clipboard.writeText(window.location.href)}>
      Copiaza linkul
    </button>
  );
}