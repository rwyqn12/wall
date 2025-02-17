player.onChat("run", function () {
    for (let index = 0; index < 5; index++) {
        agent.setAssist(PLACE_ON_MOVE, true)
        agent.move(FORWARD, 3)
        agent.move(UP, 1)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
    }
})
