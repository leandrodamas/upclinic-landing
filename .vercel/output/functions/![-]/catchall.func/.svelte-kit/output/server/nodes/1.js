

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.QHmNHJCy.js","_app/immutable/chunks/nKQ1bpcA.js","_app/immutable/chunks/D31EXCKY.js","_app/immutable/chunks/Pg1JBnIn.js"];
export const stylesheets = [];
export const fonts = [];
