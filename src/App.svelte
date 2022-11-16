<script>
  import svelteLogo from './assets/svelte.svg'
  import Calculator from './lib/Calculator.svelte'
</script>

<main>
  <h1>Linear congruence solver</h1>
  <h3>
    A solver for linear congruences of the form <i>a&#119909; ≡ b (mod n)</i>
  </h3>

  <div class="card">
    <Calculator />
  </div>

  <h4>Built using</h4>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
</main>

<style>
  .logo {
    height: 3em;
    padding: 1.5em;
    will-change: filter;
    transition: 0.3s;
  }
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #646cff);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
