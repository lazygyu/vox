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
    }
}
