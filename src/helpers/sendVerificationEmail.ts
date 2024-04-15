import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerifiacationEmail";
import { ApiResponse } from "@/types/apiResponse";
export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "mystry message | verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { sucess: true, message: "verification email send sucessfully" };
  } catch (emailError) {
    console.log("error sending verification email", emailError);
    return { sucess: false, message: "Failed to send verification email" };
  }
}
