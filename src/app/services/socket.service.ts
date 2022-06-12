import { io, Socket } from "socket.io-client";

class _SocketService {
  private socket: Socket | null = null;

  public connect() {
    const socketUrl = process.env.REACT_APP_SOCKET_URL as string;
    const options = {
      auth: { token: "" },
      transports: ["websocket"],
    };

    if (!this.socket) {
      this.socket = io(socketUrl, options);
    }
  }
}

const SocketService = new _SocketService();
export default SocketService;
