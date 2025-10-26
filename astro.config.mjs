// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'server',
    server: {
        allowedHosts: ["meuniare-josefina-dimply.ngrok-free.dev"],
    },
});
