import React from "react";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import Avatar from "@/components/Avatar";
import { useRouter } from "next/router";

interface UserHeroProps {
  userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  const router = useRouter();
  const { data: fetchUser } = useUser(userId);

  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {fetchUser?.existingUser.coverImage && (
          <Image
            src={fetchUser?.existingUser.coverImage}
            fill
            alt={fetchUser?.existingUser.name}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
