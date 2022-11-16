<script>
  import Calculator from './calculator.js';

  const calculator = new Calculator();

  const variables = {
    a: 3,
    b: 2,
    n: 5,
  };

  let x;
  const solve = () => {
    x = calculator.solve({ a: variables.a, b: variables.b, n: variables.n }) || 'No solutions';
  }
</script>

<div class=container>
  <div class=columns>
    <div class=column>
      {#each Object.keys(variables) as variable}
          <label for=variable>Value for <i>{variable}</i>:</label>
          <input type=number id=variable bind:value={variables[variable]} required>
      {/each}
    </div>
    <div class=column>
      <button on:click={solve}>
        Solve <i>{variables.a}&#119909; ≡ {variables.b} (mod {variables.n})</i>
      </button>
      <p>&#119909; = {x || '?'}</p>
    </div>
  </div>
</div>

<style>
  input[type=number] {
    width: 100%;
    padding: 5px;
    margin: 5px 0;
    display: block;
    border: 1px solid rgba(204, 204, 204, 0.824);
    border-radius: 4px;
    text-align: center;
  }

  .columns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    flex: 50%;
  }

  div.container {
    border-radius: 5px;
    padding: 20px;
  }

  button {
    margin: 15px;
    margin-top: 20px;
    transition: 0.3s;
    background-color:rgba(1, 132, 254, 0.934);
    color: white;
  }

  button:hover {
    filter: drop-shadow(0 0 0.2em #9ba0f1);
  }
</style>
