function AddAndIdentify(playerName,addPlayerToGame,players) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        console.log("here")
        if(playerName === ""){
            alert ("please enter name")
            return;
        }
        for (let player of 
        players){
        if(player.name === 
            playerName){
            alert("already in")
            return;
        }
    }
    for (let user of users) {
        if (user.name === 
            playerName) {
            
            addPlayerToGame(user);
            return
        }
    }
    const newUser = {
        name: 
        playerName,
        gameCount: 0,
        scores: [],
    };
    users.push(newUser);
    
    addPlayerToGame(newUser);
    const stringifiedUsers = JSON.stringify(users);
    localStorage.setItem("users", stringifiedUsers);
}

export default AddAndIdentify