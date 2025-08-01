"use client";
import { UserDetailContext } from "@/context/UserDetails.context";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useSidebar } from "../ui/sidebar";

function WorkspaceHistory() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const convex = useConvex();
  const [workspaceList, setWorkspaceList] = useState();
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    userDetail && GetAllWorkspace();
  }, [userDetail]);

  const GetAllWorkspace = async () => {
    const result = await convex.query(api.workspace.GetAllWorkspace, {
      userId: userDetail?._id,
    });
    setWorkspaceList(result);
    console.log(result);
  };

  return (
    <div>
      <h2 className="font-bold text-lg flex items-center justify-center">
        Your Chats
      </h2>
      <div>
        {workspaceList &&
          workspaceList?.map((workspace, index) => (
            <Link href={"/workspace/" + workspace?._id} key={index}>
              <h2
                onClick={toggleSidebar}
                className="text-sm text-gray-400 mt-2 font-light hover:text-white cursor-pointer"
              >
                {workspace?.messages[0]?.content}
              </h2>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default WorkspaceHistory;
