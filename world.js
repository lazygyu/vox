import {Chunk} from './gameObject.js';


export class World{
    constructor(){
        this.worldSize = 192;
        this.chunkBase = 16;
        this.worldDivBase = this.worldSize/this.chunkBase;
        this.chunkHeight = 160;
        this.blocks = 0;
        this.blockSize = 1;
        this.chunks = null;
        this.plane = 0;

        this.wireframe = false;
        this.showChunks = false;

        this.init();
    }

    init(){
        this.blocks = [];
        for(let x=0;x<this.worldSize;x++){
            this.blocks[x] = [];
            for(let y=0;y<this.chunkHeight;y++){
                this.blocks[x][y] = [];
                for(let z=0;z<this.worldSize;z++){
                    this.blocks[x][y][z] = 0;
                }
            }
        }

        this.chunks = new Array(this.worldDivBase);
        for(let x = 0; x < this.worldDivBase; x++){
            this.chunks[x] = new Array(this.worldDivBase);
            for(let z = 0; z < this.worldDivBase; z++){
                this.chunks[x][z] = new Chunk();
                this.chunks[x][z].type = 0;
                this.chunks[x][z].sy = 0;
                this.chunks[x][z].ey = this.chunkHeight;
                this.chunks[x][z].sx = x * this.blockSize * this.chunkBase;
                this.chunks[x][z].ex = x * this.blockSize * this.chunkBase + this.chunkBase;
                this.chunks[x][z].sz = z * this.blockSize * this.chunkBase;
                this.chunks[x][z].ez = z * this.blockSize * this.chunkBase + this.chunkBase;
                if( this.showChunks ) {
                    const geo = 
                }
            }
        }

    }
}
