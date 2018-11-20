'use strict'

// Create a class that represents a cuboid:
// It should take its three dimensions as constructor parameters. For example: x: 5, y: 6, z: 15
// It should have a method called `getSurface` that returns the cuboid's surface
// It should have a method called `getVolume` that returns the cuboid's volume

class cuboid {

  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getSurface(): number {
    let surface = 2 * ((this.x + this.z) + (this.x + this.y) + (this.y + this.z))
    return surface;
  }

  

}

let newCuboid = new cuboid(5,6,7);
console.log(newCuboid.getSurface());