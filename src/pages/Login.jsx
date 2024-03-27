import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import TextInput from '../components/TextInput';
import Loading from '../components/Loading';
import CustomButton from '../components/CustomButton';
import { AiOutlineCodepenCircle } from "react-icons/ai";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: "onChange",
  });
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, stIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='bg-bgcolor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl'>
        <div className='w-full lg:w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
          <div className='w-full flex gap-2 items-center mb-6'>
            <div className='p-2 bg-[#000000] roundede text-white'>
              <AiOutlineCodepenCircle />
            </div>
            <span className='text-2xl text-[#646362]' font-semibold>
              Swirl Connect
            </span>
          </div>
          <p className='text-ascent-1 text-base font-semibold'>
            Log in to your account
          </p>
          <span className='text-sm mt-2 text-ascent-2'>
            Welcome Back
          </span>
          <form className='py-8 flex flex-col gap-5'>
            <TextInput 
            name = 'email'
            placeholder = 'email@example.com'
            label='Email Address'
            register={register("email", {
              required: "Email Address is required",
            })}
            styles = 'w-full rounded-full'
            labelStyle = 'ml-2'
            error={errors.email ? errors.email.message : ""}
            />
            <TextInput 
            name = 'password'
            placeholder = 'Password'
            label='Password'
            type='password'
            register={register("password", {
              required: "Password is required",
            })}
            styles = 'w-full rounded-full'
            labelStyle = 'ml-2'
            error={errors.password ? errors.password?.message : ""}
            />
            <Link
            to="/reset-password"
            className='text-sm text-right text-blue font-semibold'
            >Forget Password
            </Link>

            {errMsg?.message && (
                <span className={`text-sm ${
                  errMsg?.status == "failed" 
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                }mt-0.5`}
                >
                  {errMsg?.message}
                </span>
              )
            }
            {
              isSubmitting ? (
                <Loading/>
              ) : (
                <CustomButton
                  type='submit'
                  containStyles={`inline-flex justify-center rounded-md
                  bg-blue px-8 py-3 text-sm font-medium text-white
                  outline-none`}
                  title='Login'
                />)
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
