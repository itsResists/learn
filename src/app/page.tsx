
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";

const showRank = (rank: string) => {
  if (rank == "0") {
    return "Academy Student";
  } else if (rank == "1") {
    return "Genin";
  } else if (rank == "2") {
    return "Chunin";
  } else if (rank === "3") {
    return "Jonin";
  } else if (rank == "4") {
    return "Kage";
  }
}


export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="grid grid-cols-5  border border-white min-h-[80vh]">
      <div />
      <div className="col-span-3 border border-white">
        <h1 className="text-3xl font-extrabold p-4">News Page</h1>
        <div className="grid">
          <div className="border border-white p-4">
            <h1 className="text-2xl font-extrabold pl-5 py-2">News 1</h1>
            <div className="border border-white text-xl pl-10 ">
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
              </p>
              <span className="flex pr-10 py-2 justify-end">By: User</span>
            </div>
          </div>
          <div className="border border-white p-4">
            <h1 className="text-2xl font-extrabold pl-5 py-2">News 1</h1>
            <div className="border border-white text-xl pl-10 ">
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
              </p>
              <span className="flex pr-10 py-2 justify-end">By: User</span>
            </div>
          </div>
          <div className="border border-white p-4">
            <h1 className="text-2xl font-extrabold pl-5 py-2">News 1</h1>
            <div className="border border-white text-xl pl-10 ">
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
              </p>
              <span className="flex pr-10 py-2 justify-end">By: User</span>
            </div>
          </div>
        </div>
      </div>
      <div />
    </main>
  );
}


export { showRank }; 