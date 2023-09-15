'use client'
import Link from "next/link";

const AppFooter = () => {
  return (
    <div className="bg-gray-800 text-white py-6 mt-20">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-4">Liên Hệ Chúng Tôi</h3>
        <div className="flex items-center">
          <p className="mr-2">Email:</p>
          <Link href="mailto:blogcongnghe@gmail.com"  className="text-blue-500">
             blogcongnghe@gmail.com 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
