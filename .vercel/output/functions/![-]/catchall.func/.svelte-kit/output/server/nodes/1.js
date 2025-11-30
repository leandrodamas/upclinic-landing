

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.OL5DzNbk.js","_app/immutable/chunks/CtICX558.js","_app/immutable/chunks/TvkdS4Ko.js","_app/immutable/chunks/DRYyTI92.js"];
export const stylesheets = [];
export const fonts = [];
