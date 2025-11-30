

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.uAgZNAkJ.js","_app/immutable/chunks/BK3IYhh3.js","_app/immutable/chunks/73JJ9JO2.js","_app/immutable/chunks/HCPWbaep.js"];
export const stylesheets = [];
export const fonts = [];
