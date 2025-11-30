import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
import { a as afterUpdate } from "./ssr2.js";
import "./environment.js";
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      {
        data: data_0,
        params: page.params,
        this: components[0]
      },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            {
              data: data_1,
              form,
              params: page.params,
              this: components[1]
            },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      {
        data: data_0,
        form,
        params: page.params,
        this: components[0]
      },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  service_worker_options: void 0,
  templates: {
    app: ({ head, body, assets, nonce, env }) => `<!DOCTYPE html>\r
<html lang="pt-BR" %sveltekit.htmlattributes%>\r
<head>\r
    <meta charset="utf-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1" />\r
\r
    <!-- 🔥 Favicons -->\r
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />\r
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />\r
    <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png" />\r
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />\r
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />\r
    <link rel="manifest" href="/manifest.json" />\r
\r
    <!-- SEO Básico -->\r
    <title>UpClinic – Plataforma Completa para Clínicas, Prontuário, Agenda e Telemedicina</title>\r
    <meta name="description" content="A UpClinic é a plataforma moderna e completa para clínicas e profissionais da saúde. Agendamentos inteligentes, prontuário eletrônico, telemedicina, financeiro e IA — tudo em um só lugar." />\r
    <meta name="robots" content="index, follow" />\r
    <meta name="theme-color" content="#2563eb" />\r
\r
    <!-- Open Graph -->\r
    <meta property="og:title" content="UpClinic – Sistema completo para clínicas" />\r
    <meta property="og:description" content="Prontuário eletrônico, agenda online, telemedicina, financeiro e IA integrados." />\r
    <meta property="og:url" content="https://clinicupapp.com/" />\r
    <meta property="og:type" content="website" />\r
    <meta property="og:image" content="https://clinicupapp.com/logo-upclinic.png" />\r
\r
    <!-- Twitter -->\r
    <meta name="twitter:card" content="summary_large_image" />\r
    <meta name="twitter:title" content="UpClinic – Sistema completo para clínicas" />\r
    <meta name="twitter:description" content="Plataforma moderna para gestão clínica." />\r
    <meta name="twitter:image" content="https://clinicupapp.com/logo-upclinic.png" />\r
\r
    <!-- Google Search Console -->\r
    <meta name="google-site-verification" content="ly3cp_oiRgakT1z9mUD3G4HO52mdx42M8WkZ1T_smak" />\r
\r
    <!-- Stripe Permissions Policy -->\r
    <meta http-equiv="Permissions-Policy" content="payment=(self 'https://js.stripe.com' 'https://checkout.stripe.com')" />\r
\r
    <!-- Schema.org (SEO Avançado) -->\r
    <script type="application/ld+json">\r
    {\r
        "@context": "https://schema.org",\r
        "@type": "SoftwareApplication",\r
        "name": "UpClinic",\r
        "applicationCategory": "HealthApplication",\r
        "url": "https://clinicupapp.com/",\r
        "description": "Plataforma completa com prontuário eletrônico, agendamentos, telemedicina, financeiro e gestão para clínicas.",\r
        "image": "https://clinicupapp.com/logo-upclinic.png",\r
        "creator": {\r
            "@type": "Organization",\r
            "name": "UpClinic"\r
        }\r
    }\r
    <\/script>\r
\r
    <!-- 🔥 Google Analytics + Google Ads -->\r
    <!-- Google tag (gtag.js) -->\r
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-K7SE125H5D"><\/script>\r
    <script>\r
      window.dataLayer = window.dataLayer || [];\r
      function gtag(){dataLayer.push(arguments);}\r
      gtag('js', new Date());\r
      gtag('config', 'G-K7SE125H5D');\r
    <\/script>\r
\r
    ` + head + '\r\n</head>\r\n\r\n<body data-sveltekit-preload-data="hover">\r\n    <div style="display: contents">' + body + "</div>\r\n</body>\r\n</html>\r\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "19lzkv1"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init;
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    handleValidationError,
    init,
    reroute,
    transport
  };
}
export {
  set_public_env as a,
  set_read_implementation as b,
  set_manifest as c,
  get_hooks as g,
  options as o,
  public_env as p,
  read_implementation as r,
  set_private_env as s
};
