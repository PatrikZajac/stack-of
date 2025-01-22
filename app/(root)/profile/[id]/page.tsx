import React from "react";

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <div>page {id}</div>;
};

export default ProfilePage;
