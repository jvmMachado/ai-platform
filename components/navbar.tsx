import { UserButton } from '@clerk/nextjs';
import MobileSidebar from './mobile-sidebar';
import { getApiLimitCount } from '@/api-limit';

const Navbar = async () => {
  const apiLimiCount = await getApiLimitCount();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimiCount={apiLimiCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
