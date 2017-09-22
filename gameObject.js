import Util from './util.js';
// game classes
const ObjectType = {
    Player:1,
    Enemy:2,
    NPC:3,
    MapObject:4
}

export class Chunk{
    constructor(){
        this.mesh = null;
        this.blocks = 0;
        this.triangles = 0;
        this.dirty = false;
        this.sx = 0;
        this.sy = 0;
        this.sz = 0;
        this.ex = 0;
        this.ey = 0;
        this.ez = 0;
        this.type = 0;
        this.blockList = 0;
    }
}

class GameObject{
    constructor({ type = ObjectType.MapObject, hp=0, name = '', chunk }){
        this.type = type;
        this.hp = 0;
        this.name = name;
        this.chunk = null;

        chunk.dirty = true;
        chunk.sx = 1000; chunk.sy = 1000; chunk.sz = 1000;
        chunk.type = 1;
        if( !chunk.blockList ) chunk.blockList = [];


        // get minimum box
        chunk.blockList.forEach( b => {
            if( b.x < chunk.sx ) chunk.sx = b.x;
            if( b.x > chunk.ex ) chunk.ex = b.x;
            if( b.z < chunk.sz ) chunk.sz = b.z;
            if( b.z > chunk.ez ) chunk.ez = b.z;
            if( b.y < chunk.sy ) chunk.sy = b.y;
            if( b.y > chunk.ey ) chunk.ey = b.y;
        });

        chunk.sx--; chunk.ex++;
        chunk.sy--; chunk.ey++;
        chunk.sz--; chunk.ez++;

        game.world.RebuildChunk(chunk);
        game.util.CreateMeshBlock(chunk);
        this.chunk = chunk;
    }

    Draw(time, delta){

    }

    Hit(x,y,z,dmg){
        this.hp -= dmg;
    }
}
