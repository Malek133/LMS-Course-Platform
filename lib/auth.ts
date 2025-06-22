import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { env } from "./env";
import { emailOTP } from "better-auth/plugins"
import { resend } from "./resend";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    socialProviders: { 
        github: { 
           clientId: env.GITHUB_CLIENT_ID as string, 
           clientSecret: env.GITHUB_CLIENT_SECRET as string, 
        }, 
        google: {
            clientId: env.GOOGLE_CLIENT_ID as string,
            clientSecret: env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    plugins: [
        emailOTP({ 
                async sendVerificationOTP({ email, otp}) { 
					// Implement the sendVerificationOTP method to send the OTP to the user's email address
                     await resend.emails.send({
                        from: 'LMS-smart <onboarding@resend.dev>',
                        to: [email],
                        subject: 'Hello world',
                        html:`<p>your OTP is <strong>${otp}</strong></p>`
                      });
				}, 
        }) 
    ]
});