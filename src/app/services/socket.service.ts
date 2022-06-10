import { io, Socket } from "socket.io-client";

const socketUrl = process.env.REACT_APP_SOCKET_URL as string;
const options = {
  auth: { token: "" },
  transports: ["websocket"],
};

class _SocketService {
  socket: Socket = io(socketUrl, options);

  constructor() {
    if (!this.socket) {
      this.socket = io(socketUrl, options);
    }
  }
}

const SocketService = new _SocketService();
export default SocketService;
