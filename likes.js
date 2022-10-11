const likes =[];
if(likes.length==0){
    likes.push(req.user.id)
}

console.log(likes)
if(likes.includes(req.user.id)){
    likes.slice(req.user.id)
}else{
    likes.push(req.user.id)
}
console.log(likes)