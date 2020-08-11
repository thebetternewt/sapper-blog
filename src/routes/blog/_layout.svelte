<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/recent-posts.json`);
    const posts = await res.json();

    return { posts };
  }
</script>

<script>
  import { fly } from "svelte/transition";
  import { bounceInOut } from "svelte/easing";
  import { fadeIn, fadeOut } from "./../../animate.js";

  export let segment;
  export let posts = [];
</script>

<style>
  .two-col {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  ul {
    list-style: none;
    padding-inline-start: 0;
  }
</style>


<div  in:fadeIn out:fadeOut>
  <h1>This is the Blog</h1>

  <div class="two-col">
    <div>
      <slot />
    </div>
    {#if segment}
    <aside transition:fly={{ x: 200, duration: 600 }}>
      <h4>Post Archive</h4>
      <ul>
        {#each posts as post}
        <li>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </li>
        {/each}
      </ul>
    </aside>
    {/if}
  </div>
</div>
