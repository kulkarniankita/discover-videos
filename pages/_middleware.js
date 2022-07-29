import { NextResponse } from "next/server";

export function middleware(req, ev) {
  console.log({ req, ev });
  //check the token
  //if token is valid
  //|| if page is /login
  return NextResponse.next();

  //if no token
  //redirect to login
}
