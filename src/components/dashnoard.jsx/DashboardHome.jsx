import { useAuth0 } from "@auth0/auth0-react";



const DashboardHome = () => {
  const { user } = useAuth0()
  
  return (
    <div className="flex justify-between text-gray-500">
      <div className="hidden lg:flex flex-col bg-custom-gray w-full p-4 bg-custom-light-gray m-2 mt-4 max-w-[269px] rounded">
        <div className="flex flex-col items-center p-4 rounded-md">
          <img
            src={user.picture}
            alt={`${user.name}'s profile`}
            className="w-24 h-24 rounded-2xl shadow-lg"
          />
          <p className="mt-2 font-semibold">
             {user.name}
          </p>
          <p>
            {user.email}
          </p>
        </div>
        <div className="flex justify-between mt-4 bg-white p-2 rounded-md font-semibold">
          <div className="flex flex-col justify-center items-center gap-2 pr-4 border-r border-gray-[#ceccc8]">
            <span>57</span>
            <span>Books Read</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span>4</span>
            <span>Next Books</span>
          </div>
        </div>
      </div>
      <div className="flex w-full p-4  rounded-md bg-custom-gray m-2 mt-4">
        <div className="flex flex-col mt-4 gap-2 ">
          <h2 className="text-2xl">Welcome back, {user.name}!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            iure quas! Itaque, maiores. Eos perferendis, officiis, consequatur
            expedita facilis dolorem quaerat beatae dignissimos voluptatibus
            odio possimus! Libero voluptatem ducimus eveniet.
          </p>
          
        </div>
      </div>
      
    </div>
  );
};

export default DashboardHome;
