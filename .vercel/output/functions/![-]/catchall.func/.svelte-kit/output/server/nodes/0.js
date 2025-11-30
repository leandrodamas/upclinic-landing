

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CB8AtBUX.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BK3IYhh3.js","_app/immutable/chunks/73JJ9JO2.js"];
export const stylesheets = ["_app/immutable/assets/0.BiuJblBX.css"];
export const fonts = [];
