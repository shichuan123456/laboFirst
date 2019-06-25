function generateParenthesis(n) {
    let res = [];
    gen('', n , n, res);
    return res;
}

function gen(str, l , r, res) {
    if(l > r) return;
    if(!l && !r) {
        res.push(str);
        return ;
    }
    if(l) gen(str + '(', l - 1, r, res);
    if(r) gen(str + ')', l, r - 1, res);
}

console.log(generateParenthesis(3));
