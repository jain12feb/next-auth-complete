import ClientUserCard from "@/components/clientSide/ClientUserCard";
import ServerUserCard from "@/components/serverSide/ServerUserCard";

const page = () => {
  return (
    <div className="mt-10 text-center px-10 bg-white flex lg:gap-40 gap-20 lg:flex-row md:flex-row flex-col items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl text-black">Server Side User Card</h1>
        <ServerUserCard />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl text-black">Client Side User Card</h1>
        <ClientUserCard />
      </div>
    </div>
  );
};

export default page;
