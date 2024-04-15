import { Message } from "@/model/User";

export interface ApiResponse {
  sucess: boolean;
  message: string;
  isAcceptMessage?: boolean;
  messages?: Array<Message>;
}
