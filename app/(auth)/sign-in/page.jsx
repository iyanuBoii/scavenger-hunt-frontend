"use client";
import Input from "@/components/ui/Input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import background from "@/public/images/formImage.svg";
import TextCarousel from "@/components/ui/TextCarousel";
import FormIntro from "@/components/ui/FormIntro";
import ConnectWalletButton from "@/components/ui/ConnectWalletButton";
import GoogleSignInButton from "@/components/ui/GoogleSignInButton";
import BackButton from "@/components/ui/BackButton";
import { useFormik } from "formik";
import Button from "@/components/ui/Button";
import Link from "next/link";
import mobilebackground from "@/public/images/mobilebackground.svg";
import ForgotPasswordPopup from "@/components/ui/ForgotPasswordPopup";
import EmailSentPopup from "@/components/ui/EmailSentPopup";
import { validatePassword } from "@/lib/validators";

const Page = () => {
   const [error, setError] = useState(false);
   const [showForgotPassword, setShowForgotPassword] = useState(false);
   const [showEmailSent, setShowEmailSent] = useState(false);
   const [email, setEmail] = useState(""); 

   const formik = useFormik({
      initialValues: {
         Email: "",
         Password: "",
      },
      onSubmit: (values) => {
         if (error) {
            return;
         } else {
            console.log(values);
         }
      },
   });

   const { values, handleChange, handleSubmit } = formik;

   useEffect(() => {
      if (values.Password) {
         setError(Boolean(validatePassword(values.Password)));
      }
   }, [values.Password]);

   const handleEmailSent = (submittedEmail) => {
    setEmail(submittedEmail); 
    setShowForgotPassword(false); 
    setShowEmailSent(true); 
 };

 
 const handleResendEmail = () => {
    console.log(`Resending email to ${email}`);
 };

 
 const handleChangeEmail = () => {
    setShowEmailSent(false);
    setShowForgotPassword(true);
 };

   return (
      <div className="relative bg-[#060B1C]">
         <div
            className={`w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0 relative bg-[#060B1C] ${
               showForgotPassword || showEmailSent ? "blur-md" : ""
            }`}
         >
            <section className="hidden lg:flex h-full relative">
               <div className="absolute top-[59px] left-[90px] z-50">
                  <BackButton />
               </div>
               <Image
                  src={background}
                  alt="background"
                  className="z-0 brightness-75"
                  objectFit="cover"
                  objectPosition="top center"
                  fill
                  priority
                  sizes="100vw"
               />
               <div className="absolute bottom-12 right-0 left-0 w-full">
                  <TextCarousel />
               </div>
            </section>

            <section className="bg-[#060B1C] py-16 px-8 lg:px-16 xl:px-28 relative">
               <Image
                  src={mobilebackground}
                  alt="background"
                  className="lg:hidden absolute brightness-50 z-20"
                  objectFit="cover"
                  objectPosition="top center"
                  fill
                  priority
                  sizes="100vw"
               />

               <div className="flex flex-col items-center gap-6 z-40">
                  <FormIntro
                     title={"Sign in to ScavengerHunt"}
                     description={"Pick up where you left, complete challenges, and collect rewards."}
                  />
                  <div className="flex flex-row items-center gap-4">
                     <GoogleSignInButton />
                     <ConnectWalletButton />
                  </div>
                  <div className="relative w-[350px] sm:w-[370px] flex justify-center">
                     <hr className="border-[#3B82F64D] h-[1px] w-full" />
                     <div className="text-[#3B82F64D] space-grotesk absolute top-[-0.75rem] bg-[#060B1C] w-8 text-center">
                        Or
                     </div>
                  </div>
                  <form
                     action=""
                     className="flex flex-col gap-4 w-full sm:w-[400px] mt-4"
                     onSubmit={handleSubmit}
                  >
                     <Input
                        type={"email"}
                        name={"Email"}
                        label={"Email"}
                        placeholder={"Johndoe@gmail.com"}
                        value={values.Email}
                        onChange={handleChange}
                        required={true}
                     />
                     <Input
                        type={"password"}
                        name={"Password"}
                        label={"Password"}
                        placeholder={"Enter your password"}
                        value={values.Password}
                        onChange={handleChange}
                        required={true}
                     />
                     <div className="flex justify-between items-center">
                        <p className="text-[#F93232] space-grotesk font-[500] text-[14px]">
                           {error ? "Must be at least 8 characters" : ""}
                        </p>
                        <button
                           type="button"
                           onClick={() => setShowForgotPassword(true)}
                           className="text-[#BFBFBF] space-grotesk font-[500] text-[14px] underline"
                        >
                           Forgot Password?
                        </button>
                     </div>
                     <div className="mt-6 flex flex-col gap-4 z-40">
                        <Button
                           variant="gradient"
                           className="Orbitron font-[500] text-[20px] h-[50px] flex flex-col items-center justify-center"
                        >
                           Sign In
                        </Button>
                        <p className="space-grotesk text-center text-[14px] font-[500] text-[#858894]">
                           Don’t have an account?{" "}
                           <Link href={"/sign-up"}>Sign Up</Link>
                        </p>
                     </div>
                  </form>
               </div>
            </section>
         </div>

         <ForgotPasswordPopup
            isOpen={showForgotPassword}
            onClose={() => setShowForgotPassword(false)}
            onEmailSent={handleEmailSent}
         />

         <EmailSentPopup
            isOpen={showEmailSent}
            onClose={() => setShowEmailSent(false)}
            email={email}
            onResend={handleResendEmail}
            onChangeEmail={handleChangeEmail}
         />
      </div>
   );
};

export default Page;