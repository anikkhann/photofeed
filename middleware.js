import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

//declare language locales for support
const locales = ["bn", "en"];

// default inital language will be english
const defaultLocale = "en";

//this function is used for read browser accept language
function getLocale(request) {
  //getting browser default accepted languages
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;

  // now we will check browser acceptedLanguage is present in our locales or not
  let headers = { "accept-language": acceptedLanguage };

  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale); // -> 'en-US'
}

export function middleware(request) {
  //get/read the browser pathname like: http://localhost:3000/en
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  //now we will check locales bn/en is exist on pathname http://localhost:3000
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
