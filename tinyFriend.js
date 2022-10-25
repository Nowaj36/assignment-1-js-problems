function tinyFriend(friendsName) {
    let maxFriendName = 999;
    let tinyFriendName = [];
    if(friendsName == null){
        return -1;
    }
    else{
        for(let i = 0; i < friendsName.length; i++) {
            if(maxFriendName >= friendsName[i].length) {
                maxFriendName = friendsName[i].length;
                tinyFriendName.push(friendsName[i]);
            }
        }
    }
    return tinyFriendName; 
}
let friendsName = ['nowaj', 'naym', 'fahamid', 'faysal', 'shohag', 'labib', 'shojib', 'soha', 'moni', 'joy', 'lima', 'mehejabin', 'siam']
let result = tinyFriend(friendsName);
console.log("Tiny Friend is", result);
