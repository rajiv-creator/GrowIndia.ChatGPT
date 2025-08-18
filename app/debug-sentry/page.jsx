"use client";

export default function DebugSentry() {
  return (
    <button
      onClick={() => {
        // Intentional client error
        // eslint-disable-next-line no-undef
        window.__boom.crash();
      }}
      style={{ padding: 10, border: "1px solid #ccc" }}
    >
      Throw Client Error
    </button>
  );
}
