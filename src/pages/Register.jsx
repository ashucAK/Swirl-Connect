import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DiSublime } from "react-icons/di";
import { CustomButton, Loading, TextInput } from "../components";
import { BgImage } from "../assets";

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {};

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full lg:w-1/2 h-full p-10 flex flex-col justify-center'>
        <div className='w-full flex gap-2 items-center mb-6'>
          <div className='p-2 bg-[#76787a] rounded text-white'>
            <DiSublime />
          </div>
          <span className='text-2xl text-[#b1b4b9] font-semibold'>
            Swirl Connect
          </span>
        </div>

        <p className='text-ascent-1 text-base font-semibold'>
          Create your account
        </p>

        <form
          className='py-8 flex flex-col gap-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
            <TextInput
              name='firstName'
              label='First Name'
              placeholder='First Name'
              type='text'
              styles='w-full'
              register={register("firstName", {
                required: "First Name is required!",
              })}
              error={errors.firstName ? errors.firstName?.message : ""}
            />

            <TextInput
              label='Last Name'
              placeholder='Last Name'
              type='lastName'
              styles='w-full'
              register={register("lastName", {
                required: "Last Name do no match",
              })}
              error={errors.lastName ? errors.lastName?.message : ""}
            />
          </div>

          <TextInput
            name='email'
            placeholder='email@example.com'
            label='Email Address'
            type='email'
            register={register("email", {
              required: "Email Address is required",
            })}
            styles='w-full'
            error={errors.email ? errors.email.message : ""}
          />

          <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
            <TextInput
              name='password'
              label='Password'
              placeholder='Password'
              type='password'
              styles='w-full'
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password ? errors.password?.message : ""}
            />

            <TextInput
              label='Confirm Password'
              placeholder='Password'
              type='password'
              styles='w-full'
              register={register("cPassword", {
                validate: (value) => {
                  const { password } = getValues();

                  if (password != value) {
                    return "Passwords do no match";
                  }
                },
              })}
              error={
                errors.cPassword && errors.cPassword.type === "validate"
                  ? errors.cPassword?.message
                  : ""
              }
            />
          </div>

          {errMsg?.message && (
            <span
              className={`text-sm ${
                errMsg?.status == "failed"
                  ? "text-[#f64949fe]"
                  : "text-[#2ba150fe]"
              } mt-0.5`}
            >
              {errMsg?.message}
            </span>
          )}

          {isSubmitting ? (
            <Loading />
          ) : (
            <CustomButton
              type='submit'
              containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
              title='Create Account'
            />
          )}
        </form>

        <p className='text-ascent-2 text-sm text-center'>
          Already has an account?{" "}
          <Link
            to='/login'
            className='text-[#b1b4b9] font-semibold ml-2 cursor-pointer'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
