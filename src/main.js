// main app
//

String.prototype.bin = ()=>{
    return parseInt(this, 2);
);

Number.prototype.bin = ()=>{
    const sign = (this<0?"-":"");
    let result = Math.abs(this).toString(2);
    const pad = new Array(32 - result.length);
    return pad.fill('0').join('') + result;
}
