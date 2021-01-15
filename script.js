function LoopAFunc(){
    for(var i=1;i<10;i++){
        console.log(i+ 'A');
    }
}

function LoopBFunc(){
    for(var j=1;j<10;j++){
        console.log(j+'B');
    }
}

async function RunEventLoop(){
   
    let myPA=new Promise((LoopA)=>LoopAFunc())
    let myPB=new Promise((LoopB)=>LoopBFunc())

    await Promise.all;
}

RunEventLoop();