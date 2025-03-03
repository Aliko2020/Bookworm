import { useSelector } from "react-redux";


const DashboardHome = () => {
  const userName = useSelector(state => state.auth.user.given_name)
  
  
    return (
      <div className="flex w-full h-screen p-4 bg-custom-gray m-2 mt-4">
          <div className="flex flex-col gap-2 text-custom-yellow">
            <h2 className="text-lg">{userName}, Welcome to Your Dashboard</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iure quas! Itaque, maiores. Eos perferendis, officiis, consequatur expedita facilis dolorem quaerat beatae dignissimos voluptatibus odio possimus! Libero voluptatem ducimus eveniet.</p>
          </div>
      </div>
    );
};

export default DashboardHome;
