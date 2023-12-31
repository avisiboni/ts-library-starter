import {defineConfig} from "tsup";

export default defineConfig({
    entry: ['src/index.ts'],
    sourcemap: true,
    clean: true,
    dts: true,
    minify: 'terser',
    minifySyntax:true,
    minifyIdentifiers:true,
    minifyWhitespace:true
})