module.exports = function count(s, pairs) {
let cnt=0,N=1;
s=s.split('');
for(let i=0;i<pairs.length;i++){
    N*=Math.pow(pairs[i][0],pairs[i][1]);
}
if(N>Number.MAX_VALUE/1e+300) {
 return "too BIG value, can''t calculate yet =(";
}
function bit_0(check,elem){
    if(check!=1 && elem==1)
    {
        return true;
    }
    else{
        return false;
    }
    }
    function bit_1(check,elem){
        if(check==1 && elem==0)
        {
            return true;
        }
        else{
            return false;
        }
        }

    function nod(a,b){
        let c;
    while(b!=0){
    c=a%b;
    a=b;
    b=c;
    }
    return a;
    }

mark: for(let k=1;k<=N;k++){
    for(let j=0;j<s.length;j++){
if(bit_1(nod(k+j,N),s[j]))
{
    continue mark;
}
if(bit_0(nod(k+j,N),s[j]))
{
     continue mark;
}
    }
cnt++;
}

return cnt % 1000000007;
}
