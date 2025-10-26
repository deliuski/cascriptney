// import type { APIRoute } from 'astro';
// import { setAuthCookie } from '@supabase/gotrue-js'; // эсвэл @supabase/ssr дээрх туслах
// import { createClient } from '@supabase/supabase-js';

// export const post: APIRoute = async ({ request, redirect }) => {
//     const body = await request.json();
//     const session = body.session;

//     // Хэрвээ та @supabase/gotrue-js-д байгаа setAuthCookie ашиглах гэж байвал:
//     // setAuthCookie expects the raw node Request/Response objects in some setups; шинэчлэлтүүд шалга.
//     // Энд жишээ хэлбэр — хэрвээ хэрэгтэй бол Res/Req-ийг ашиглаж cookie set хийнэ.

//     // Энгийн арга: өөрчлөн HTTP Set-Cookie header-ийг өөрөө үүсгэх (аюулгүй хийх шаардлагатай).
//     // Гэхдээ хамгийн хялбар: Supabase-ийн туслах функцыг ашиглах (док-рүү заасан зааврыг дага).
//     return new Response(JSON.stringify({ ok: true }), { status: 200 });
// };
