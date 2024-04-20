
function a() {
    for (let i = 0; i < 3; i++) {
        console.log("first" + i);
        setTimeout(function log() {
            console.log(i);
        }, i * 1000)
    }
}
a();