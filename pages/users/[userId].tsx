import Header from "@/components/Header";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { GridLoader } from "react-spinners";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div
        className="
    flex
    justify-center
    items-center
    h-full
    "
      >
        <GridLoader />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser.existingUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
    </>
  );
};

export default UserView;
