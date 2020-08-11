<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog.json`);
    const posts = await res.json();

    return { posts };
  }
</script>

<script>
  import formatDate from "date-fns/format";
  import startOfDay from "date-fns/startOfDay";

  export let posts;
</script>

<style>
  ul {
    list-style: none;
    /* margin: 0; */
    line-height: 1.5;
    padding-inline-start: 0;
  }

  li {
    padding: 0;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div>
  <h1>Recent posts</h1>
  <ul>
    {#each posts as post}
      <li>
        <a rel="prefetch" href="blog/{post.slug}">
          {post.title} - {formatDate(startOfDay(new Date(post.date)), 'PPP')}
        </a>
      </li>
    {/each}
  </ul>
</div>
