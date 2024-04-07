import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { DiSublime } from "react-icons/di";
import { CustomButton, Loading, TextInput } from "../components";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {};

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
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

        <p className='text-ascent-1 text-lg font-bold font-serif'>
          Sign in to SC
        </p>

        <form
          className='py-8 flex flex-col gap-5='
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextInput
            name='email'
            placeholder='email@example.com'
            label='Email Address'
            type='email'
            register={register("email", {
              required: "Email Address is required",
            })}
            styles='w-full rounded-full'
            labelStyle='ml-2'
            error={errors.email ? errors.email.message : ""}
          />

          <TextInput
            name='password'
            label='Password'
            placeholder='Password'
            type='password'
            styles='w-full rounded-full'
            labelStyle='ml-2'
            register={register("password", {
              required: "Password is required!",
            })}
            error={errors.password ? errors.password?.message : ""}
          />

          <Link
            to='/reset-password'
            className='text-sm text-right text-[#b1b4b9] font-semibold'
          >
            Forgot Password ?
          </Link>

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
              title='Login'
            />
          )}
        </form>

        <p className='text-ascent-2 text-sm text-center'>
          Don't have an account?
          <Link
            to='/register'
            className='text-[#b1b4b9] font-semibold ml-2 cursor-pointer'
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
