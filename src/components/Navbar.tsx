import Link from "next/link";

export default function Navbar () {
  return (
    <div className=" flex items-center justify-between px-6 py-2 border-b">
        
      <Link href="/" className="cursor-pointer text-2xl font-bold text-blue-600" >
          My identity
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/login" className="text-gray-600 hover:text-gray-900">
          Login
        </Link>
        <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Sign up
        </Link>
      </div>    
    </div>
  );
};
