<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap;">
  <h1 style="margin: 0; font-size: 2rem;">Design + Build</h1>
  <a href="/" class="home-button">Home</a>
</div>


<style>
.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.button-grid a {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--mmred); /* Base red */
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 2rem;
  border-radius: 12px;
  font-size: 1.3rem;
  transition: background-color 0.3s, color 0.3s;
}

.button-grid a:hover {
  background-color: var(red-hover); /* Darker red on hover */
  color: var(--mmgold); /* Golden yellow */
}

</style>

<!-- Button Grid -->
<div class="button-grid" style="margin-top: 3rem; margin-bottom: 3rem">
  <a href="cad"">CAD Learning</a>
  <a href="reading">Reading</a>
  <a href="videos">Videos</a>
  <a href="mini">Mini Projects</a>
</div>

