<script>
  import Calculator from './calculator.js';
  import Modal from './Modal.svelte';

  const calculator = new Calculator();
  let showModal = false;

  const MATH_BELONGS_TO = '\u2208';
  const MATH_EMPTY_SET = '\u2205';

  const variables = {
    a: 3,
    b: 2,
    n: 5,
  };

  let solutions;

  /**
   * @returns {void}
  */
  const solve = () => {
    const solutionSet = calculator.solve({ a: variables.a, b: variables.b, n: variables.n });
    solutions = solutionSet ? `{ ${solutionSet?.join(', ')} }` : MATH_EMPTY_SET;
  }
</script>

<div class=container>
  <div class=columns>

    <div class=column>
      {#each Object.keys(variables) as variable}
          <label for=variable>Value for <i>{variable}</i>:</label>
          <input type=number id=variable bind:value={variables[variable]} required min=0>
      {/each}
    </div>

    <div class=column>
      <button on:click={solve} id=solve>
        Solve <i>{variables.a}&#119909; ≡ {variables.b} (mod {variables.n})</i>
      </button>
      <p>&#119909; {MATH_BELONGS_TO} {solutions || '?'}</p>
    </div>

  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <p on:click={() => showModal = true} class=empty-set-desc>
    Why do I get {MATH_EMPTY_SET}?
  </p>
</div>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot=header>
			Why do I get {MATH_EMPTY_SET}?
		</h2>
    Let <i>d</i> be the highest common factor (HCF) of <i>a</i> and <i>n</i>, where <i>d</i> > 1.
    The linear congruence <i>a&#119909; ≡ b (mod n)</i> has no solutions if <i>b</i> is not divisible by <i>d</i>.
    <br>
    <br>
    Example:
    <br>
    Consider the linear congruence <i>4&#119909; ≡ 5 (mod 6)</i>. The HCF of 4 and 6 is 2,
    which does not divide into 5, therefore there are no solutions.
	</Modal>
{/if}

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
    padding: 10px;
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

  .empty-set-desc:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
