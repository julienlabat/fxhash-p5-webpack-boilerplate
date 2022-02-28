import p5 from 'p5'


const seed = ~~(fxrand() * 123456789)
console.log(`fxhash: ${fxhash} \nseed: ${seed}`)

const margin = 0.08,
      grain = [],
      gSize = 0.002,
      gAlpha = 12

let s


const sketch = p5 => {
  
  p5.setup = _ => {

    // Setup seed
    p5.randomSeed(seed)
    p5.noiseSeed(seed)

    // Create canvas
    s = p5.min(p5.windowWidth, p5.windowHeight)
    p5.createCanvas(s, s)

    p5.noLoop()
    p5.noStroke()

    // Generate grain
    generateGrain()

  }
  

  p5.draw = _ => {
    
    p5.background('#F8F8F8')
    
    p5.push()
    p5.scale(s)
    
    // Draw grain
    drawGrain()
    
    p5.pop()
  }


  p5.windowResized = _ => {
    s = p5.min(p5.windowWidth, p5.windowHeight)
    p5.resizeCanvas(s, s)
  }


  function generateGrain() {
    for (let x = margin; x <= 1 - margin; x += gSize) {
      for (let y = margin; y <= 1 - margin; y += gSize) {
        grain.push({
          x: x,
          y: y,
          s: gSize,
          col: p5.color(0, 0, 0, p5.random(gAlpha))
        })
      }
    }
  }

  function drawGrain() {
    grain.forEach(g => {
      p5.fill(g.col)
      p5.square(g.x, g.y, g.s)
    })
  }
  

}


const myp5 = new p5(sketch, window.document.body)