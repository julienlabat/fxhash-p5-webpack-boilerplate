import p5 from 'p5'


const seed = ~~(fxrand() * 123456789)
console.log(`fxhash: ${fxhash} // seed: ${seed}`)
let s,
    grain = []


const sketch = p5 => {
  
  p5.setup = _ => {
    
    // Creating canvas
    s = p5.min(p5.windowWidth, p5.windowHeight)
    p5.createCanvas(s, s)
    
    // Setting up seed
    p5.randomSeed(seed)
    p5.noiseSeed(seed)

    p5.noLoop()

  }
  

  p5.draw = _ => {
    
    p5.background('#FDFDFD')

  }


  p5.windowResized = _ => {
    s = p5.min(p5.windowWidth, p5.windowHeight)
    p5.resizeCanvas(s, s)
  }

}


const myp5 = new p5(sketch, window.document.body)