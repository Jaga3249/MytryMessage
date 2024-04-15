import { dbConnect } from "@/lib/dbConnection";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function Post(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
  } catch (error) {
    console.error("error registering user", error);
    return Response.json(
      {
        sucess: false,
        message: "error registering user",
      },
      {
        status: 500,
      }
    );
  }
}
