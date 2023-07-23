const rakeGarden = (garden) => {
  return garden.split(' ').map((x) => x === 'gravel' || x === 'rock' ? x : x.replace(x, 'gravel')).join(' ')
}

console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel'))
console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel'))