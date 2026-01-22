import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="text-lg w-screen flex items-center justify-center">
      todo app
      </div>
      <br/>
      <div>
      <Link className="text-md border m-2 flex items-center justify-center " href="/auth/signin">Signin</Link>
      <Link className="text-md border m-2 flex items-center justify-center " href="/auth/signup">Signup</Link>
      </div>
</>
  );
}
