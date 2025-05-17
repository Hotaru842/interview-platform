"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

function DasboardButton() {
  const { isCandidate, isLoading } = useUserRole();

  if (isCandidate || isLoading) return null;

  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium bg-[#4004fc] text-white hover:bg-[#4004fc]" size={"sm"}>
        <SparklesIcon className="size" />
        Dashboard
      </Button>
    </Link>
  );
}

export default DasboardButton;