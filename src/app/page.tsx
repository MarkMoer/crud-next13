import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen ">
      <h3 className="text-2xl">Belajar CRUD di NEXT 13</h3>
      <Link className="hover:underline" href="/products">
        Lets GO
      </Link>
    </div>
  );
};

export default Home;
