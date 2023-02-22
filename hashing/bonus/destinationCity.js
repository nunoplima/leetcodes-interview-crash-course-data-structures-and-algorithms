/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = paths => {
  let curr = paths[0][0]
  const graph = new Map(paths)

  while (true) {
      if (!graph.has(curr)) {
          return curr
      }

      curr = graph.get(curr)
  }
};