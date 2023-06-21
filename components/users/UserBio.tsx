import React, { useMemo } from "react";
import { format } from "date-fns";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";

interface UserBioProps {
  userId: String;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);
  const createdAt = useMemo(() => {
    if (fetchedUser?.existingUser?.createdAt) {
      return null;
    }
    return format(new Date(fetchedUser?.existingUser?.createdAt), "MMMM yyyy");
  }, [fetchedUser?.existingUser?.createdAt]);
  return <div></div>;
};

export default UserBio;
