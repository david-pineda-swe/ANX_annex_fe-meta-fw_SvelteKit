[Home](../README.md)

# The Dynamic Router
This is the server side control mechanism that will consume and pair a requested route with it's matching route segment config and  progression or redirect to 404 page if requested is not supported in the ```SiteGraph.sitemap``` heirarchy.

- In ```/src/routes``` there is a nested folder structure of ```/[A]/[B]/[C]```.
- Each dir index.svelte accesses the ```/src/app/router```
- on pre-render or request that route or sub-route will: 
  - compare a provided ```tierPositionKey``` or ```tierPositionLabel``` to a config provided ```TIER_SEQUENCE_INDEX```
  - the ```serializedUrlPath``` will be matched to the ```tierProgression``` and ```SiteGraph.Sitemap```
  - to access/collect the required route config for the current page 
  - along with it's assoc. parent configs from a provided ```SiteGraph.sitemap```