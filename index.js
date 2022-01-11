

Array.prototype.prime = function () {
    let a = this.every(checkPrime)
    return a
    
    function checkPrime(n) {
        if (n == 1) {
            return false;
        }
        else if (n === 2) {
            return true;
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }
}
function getPrime(){
let inpt_val=document.getElementById('inpt').value
let spt=inpt_val.split(",")
let prm=spt.prime()
let opt_val=document.getElementById('opt')
let result=document.createElement('p')
opt_val.appendChild(result)
result.innerHTML=prm
console.log(result)
}