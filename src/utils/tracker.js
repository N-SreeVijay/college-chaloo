/* ---------- GUEST ID ---------- */
let guestId = localStorage.getItem("guest_id");

if (!guestId) {
  guestId = crypto.randomUUID();
  localStorage.setItem("guest_id", guestId);
}

/* ---------- TRACK EVENT ---------- */
export function trackEvent(payload) {
  if (!payload || !payload.type) {
    console.warn("trackEvent called without type", payload);
    return;
  }

  const access = localStorage.getItem("access");

  const finalPayload = {
    type: payload.type,               // REQUIRED
    page: payload.page || window.location.pathname,

    // Optional navigation fields
    from_page: payload.from_page,
    to_page: payload.to_page,
    current_page: payload.current_page,

    // Optional interaction fields
    tag: payload.tag,
    id: payload.id,
    class: payload.class,
    text: payload.text,
    selected_text: payload.selected_text,
    length: payload.length,
    duration_ms: payload.duration_ms,
    key: payload.key,
    shortcut: payload.shortcut,

    // Identity
    guest_id: guestId,

    // Timestamp
    time: Date.now(),
  };

  fetch("http://127.0.0.1:8000/api/tracker/track/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(access && { Authorization: `Bearer ${access}` }),
    },
    credentials: "include",
    body: JSON.stringify(finalPayload),
  }).catch(() => {});
}
