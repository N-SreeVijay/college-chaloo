let socket = null;

export function connectSocket() {
  const token = localStorage.getItem("access");
  if (!token || socket) return; // prevent duplicates

  socket = new WebSocket(`ws://127.0.0.1:8000/ws/session/?token=${token}`);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === "FORCE_LOGOUT") {
      alert("Your account was logged in from another device.");

      localStorage.clear();
      socket.close();
      window.location.href = "/login";
    }
  };

  socket.onclose = () => {
    socket = null;
  };
}

export function disconnectSocket() {
  if (socket) {
    socket.close();
    socket = null;
  }
}
