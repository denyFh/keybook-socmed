import React, { useState } from 'react'
import { TbAssembly, TbSocial } from "react-icons/tb";
import { BsCart4, BsShare } from "react-icons/bs";
import { LuCombine } from "react-icons/lu";
import { CustomButton, Loading, TextInput } from '../components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BgImage } from '../assets';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async(data) => {

  }

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className='text-2xl text-[#066ad8] font-semibold'>
              Keybook
            </span>
          </div>

          <p className="text-ascent-1 text-base font-semibold">
            Login to your account
          </p>
          <span className="text-sm mt-2 text-ascent-2">
            Welcome back
          </span>

          <form className="py-8 flex flex-col gap-5" onSubmit={handleSubmit(onsubmit)}>
            <TextInput
              name="email"
              label="Email Address"
              placeholder="email@example.com"
              type="email"
              register={
                register("email", {
                  required: "Email Address is required!",
                })
              }
              error={errors.email ? errors.email.message : ""}
              styles="w-full rounded-full"
              labelStyle="ml-2"
            />

            <TextInput
              name="password"
              label="Password"
              placeholder="example123"
              type="password"
              register={
                register("password", {
                  required: "Password is required!",
                })
              }
              error={errors.password ? errors.password.message : ""}
              styles="w-full rounded-full"
              labelStyle="ml-2"
            />

            <Link
              to="/reset-password"
              className='text-sm text-right text-blue font-semibold'
            >
              Forgot Password ?
            </Link>

            {
              errMsg?.message && (
                <span className={`text-sm ${errMsg?.status === 'error happened'
                  ? 'text-red-600'
                  : 'text-green-700'}
                } mt-0.5`}>
                  {errMsg?.message}
                </span>
              )
            }

            {
              isSubmitting
                ? <Loading />
                : <CustomButton
                  type="submit"
                  containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
                  title="Login"
                />
            }
          </form>

          <p className="text-ascent-2 text-sm text-center">
            Don't have an account?
            <Link
              to='/register'
              className='text-[#068ad8] font-semibold ml-1 cursor-pointer'
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-[#51565b] bg-gradient-to-bl">
          <div className="relative w-full flex items-center justify-center">
            <img
              src={BgImage}
              alt="Bg-Img"
              className='w-64 2xl:w-72 h-64 2xl:h-72 rounded-full object-cover'
            />

            <div className="absolute flex items-center gap-1 bg-white right-[5rem] top-3 py-2 px-5 rounded-full">
              <BsShare size={14} />
              <span className="text-xs font-medium">Share</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white right-16 bottom-1 py-2 px-5 rounded-full">
              <LuCombine size={14} />
              <span className="text-xs font-medium">Combine</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-[5rem] top-8 py-2 px-5 rounded-full">
              <BsCart4 size={14} />
              <span className="text-xs font-medium">Buy</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-12 bottom-8 py-2 px-5 rounded-full">
              <TbAssembly size={14} />
              <span className="text-xs font-medium">Assemble</span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-base text-white/80 text-semibold">
              Connect with hobbyist around the globe
            </p>
            <span className="text-sm text-white/60">
              © 2023 Keybook. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login