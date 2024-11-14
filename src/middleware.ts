import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from './utils/getSession';


export async function middleware(request: NextRequest) {
  console.log('Middleware is running');
  console.log('======================');

  // Session handling
  const session = await getSession();
  const userNavigateRoute = request.nextUrl.pathname;
  console.log('Route >>>>>> ', userNavigateRoute);
  if (session) {

    if (userNavigateRoute === '/login' || userNavigateRoute === '/signup') {
      return NextResponse.redirect(new URL('/', request.url))
    }

    if (userNavigateRoute.startsWith('/admin') && session.role !== 'admin') {
      return NextResponse.redirect(new URL('/not-found', request.url))
    }
  } else {

    if (userNavigateRoute.startsWith('/admin') || userNavigateRoute.startsWith('/user')) {
      return NextResponse.redirect(new URL('/not-found', request.url))
    }
  }

  return NextResponse.next();  // This allows the request to continue
}

// Configuration for matching path
// export const config = {
//   matcher: ['/login', '/signup']
// }

// Configuration by folder
// export const config = {
//   matcher: ['/user/:path*', '/admin/:path*']
// }

// Configuration by folder and separate routes if login
// export const config = {
//   matcher: ['/user/:path*', '/admin/:path*', '/login', '/signup']
// }

// example
/*
/user
/user/profile
/user/profile/123
*/

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

