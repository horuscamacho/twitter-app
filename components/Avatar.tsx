import useUser from "@/hooks/useUser";
import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={`
    ${hasBorder ? "border-4 border-black" : ""}
    ${isLarge ? "w-32 h-32 " : "h-12 w-12 "}
    rounded-full
    hover:opacity-90
    transition
    cursor-pointer
    relative
  `}
    >
      <Image
        onClick={onClick}
        fill
        style={{ objectFit: "cover", borderRadius: "100%" }}
        src={
          fetchedUser?.existingUser?.profileImage || "/images/placeholder.png"
        }
        alt={fetchedUser?.existingUser?.name || "img"}
      />
    </div>
  );
};

export default Avatar;
