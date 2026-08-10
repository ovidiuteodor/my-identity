"use client";

export default function ButonShare() {
  return (
    <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
      Copiaza linkul
    </button>
  );
}