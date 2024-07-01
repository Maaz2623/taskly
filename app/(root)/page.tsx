import { connectToDatabase } from "@/lib/database/mongoose";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const HomePage = async () => {
  return (
    <div>
      HomePage
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default HomePage;
