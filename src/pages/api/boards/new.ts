import type { APIRoute } from 'astro';
import { z } from 'zod';

const payload = z.object({
  url: z.string().url(),
});

export const POST: APIRoute = async ({ request }) => {
  console.log(request.headers.get('Content-type'));

  const raw = await request.formData();
  const formData = payload.parse(Object.fromEntries(raw));

  console.log(formData.url);

  return new Response('ok');
};
