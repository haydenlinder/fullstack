import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const orgId = searchParams.get("orgId");

  const org = await clerkClient.organizations.getOrganization({
    organizationId: orgId || "",
  });

  return NextResponse.json({ org });
}
