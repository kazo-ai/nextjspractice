"use client";

import { useState } from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { usernameAtom, authTokenAtom, isLoadingAtom } from "../../lib/atoms";
import { useRouter } from "next/navigation";

type SigninResponse = {
  token?: string;
  user?: { name?: string; email?: string };
};

export default function Signin()
 {
  const [username, setUsername] = useRecoilState(usernameAtom);
  const setAuthToken = useSetRecoilState(authTokenAtom);
  const setLoading = useSetRecoilState(isLoadingAtom);

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  async function handleSign()
   {
    setLoading(true);
    setError(null);

    try {
      // <-- use the endpoint path, NOT the filename
      const res = await axios.post<SigninResponse>("/api/v1/signup", {
        username,
        password,
      });

      // inspect response in devtools / logs while debugging
      console.log("signin response:", res.data);

      // set auth state before navigating
      if (res.data?.token) setAuthToken(res.data.token);
      if (res.data?.user?.name) setUsername(res.data.user.name);

      setPassword(""); // wipe password after login

      // navigate - make path absolute. Replace if you don't want back history.
      await router.push("/demoblogs/1"); // consider changing to "/dashboard" or "/"
    } catch (e: any) {
      console.error("Sign-in failed:", e);
      setError(e?.response?.data?.message ?? "Signin failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold text-black">Sign in</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                label="Username"
                placeholder="harkirat@gmail.com"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <LabelledInput
                label="Password"
                type={"password"}
                placeholder="123456"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                type="button"
                className="mt-8 w-full text-white bg-blue-950 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={handleSign}>
                Sign in
              </button>
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
      <input
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}