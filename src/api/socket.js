let socket = null;

export function connectSocket() {
  const token = localStorage.getItem("access");
  if (!token || socket) return;

  socket = new WebSocket(`ws://127.0.0.1:8000/ws/session/?token=${token}`);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === "FORCE_LOGOUT") {
      alert("You were logged out from another device");
      localStorage.clear();
      window.location.href = "/login";
    }
  };

  socket.onclose = () => {
    socket = null;
  };
}
