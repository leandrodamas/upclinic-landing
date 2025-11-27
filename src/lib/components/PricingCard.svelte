<script lang="ts">
  export let plan;
  export let annual = false;
</script>

<div class="card relative {plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} h-full flex flex-col">
  {#if plan.popular}
    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
      Mais Popular
    </div>
  {/if}
  
  <div class="flex-1">
    <h3 class="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
    <p class="text-gray-600 mb-6">{plan.description}</p>
    
    <div class="mb-6">
      <div class="flex items-baseline">
        <span class="text-5xl font-extrabold text-gray-900">
          {annual && plan.priceAnnual ? plan.priceAnnual : plan.price}
        </span>
        {#if annual && plan.priceAnnual}
          <span class="ml-2 text-lg text-gray-500 line-through">{plan.price}</span>
        {/if}
      </div>
      <p class="text-sm text-gray-500 mt-1">por mês</p>
    </div>
    
    <ul class="space-y-3 mb-8">
      {#each plan.features as feature}
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-700">{feature}</span>
        </li>
      {/each}
    </ul>
  </div>
  
  <a
    href={plan.ctaLink}
    class="btn {plan.popular ? 'btn-primary' : 'btn-secondary'} w-full text-center"
  >
    {plan.cta}
  </a>
</div>

