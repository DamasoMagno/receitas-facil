"use client"
import Image from "next/image"
import Link from "next/link"
import { FaGoogle, FaLock, FaEnvelope } from "react-icons/fa"

import logo from "@/assets/logo.png"

export default function Login() {
  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <header className="flex items-center gap-2 mb-4 mt-24">
        <Image
          src={logo.src}
          alt="Logo Receitas Fácil"
          width={100}
          className="w-8"
          height={100}
        />
        <h2 className="text-primary text-2xl">Receitas Fácil</h2>
      </header>

      <form className="w-full flex flex-col">
        <div className="bg-[#F1EFF5] rounded-md p-2 flex items-center gap-2 mb-4">
          <FaEnvelope size={16} />
          <input type="text" placeholder="Email" className="bg-transparent outline-none border-none flex-1" />
        </div>

        <div className="bg-[#F1EFF5] rounded-md p-2 flex items-center gap-2">
          <FaLock size={16} />
          <input type="password" placeholder="Senha" className="bg-transparent outline-none border-none flex-1" />
        </div>

        <Link href="/" className="self-end text-sm block mt-2 mb-4">Esqueceu a senha?</Link>

        <button className="rounded-md bg-primary flex justify-center items-center text-white text-base h-12">
          Entrar
        </button>

        <Link href="/" className="text-primary text-md text-center my-8">Criar conta</Link>

        <button className="rounded-md bg-transparent flex justify-center items-center text-primbg-primary border border-primary text-primary h-12 p-4">
          <FaGoogle />
          <span className="flex-1">Google</span>
        </button>
      </form>
    </div>
  )
}