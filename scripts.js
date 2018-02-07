let lines = [`Take it one game at a time.`, `200 foot game.`, `Do the little things.`, `Details make good hockey players.`, `Get on your horse bud!`, `Clapped a rocket top cheddar.`, `Go fer a skate, bud.`, `This beauty right here.`,`It was a team effort.`, `Your goalie has to be your best penalty killer.`,`Put some sauce on that pass.`,`That shot was a lazer beam.`,`That puck's got eyes.`, `Wheel. Snipe. Celly.`, `Couple dirty dangles there bud.`, `Trust the process.`, `First one on the ice, last one off.`, `Workhorse`, `House on skates.`, `If you can't beat 'em in the alley, you can't beat 'em on the ice.`,`Put the puck on net and good things happen!`,`Gotta get to the dirty areas!`,`Winning puck battles.`,`That was a goal scorer's goal!`,`Puck luck.`,`Greasy goal.`,`Gotta get those dirty goals.`,`Gordie Howe Hatrick.`,`Drop the gloves.`,`Get your flippers off and let's go.`,`Play the full 60.`,`Just didn't get the bounces tonight.`,`You can't teach size.`, `Our goalie really bailed us out tonight.`, `Goalie's buyin' dinner tonight!`, `Money on the board.`,`Get pucks deep, get pucks to the net and y'know *sniff*...win some hockey games.`,`Get pucks deep.`, `Get pucks to the net.`, `Obviously`,`Like I said...`,`Y'know *sniff*`, `We managed the puck well.`,`Well we had a tough time gettin' out of our end.`,`Need good puck movers.`,`They've got jam.`,`They work real hard.`,`Clog up the neutral zone.`,`High forward.`,`C's gotta swing down low on the breakout.`,`At the end of the day.`,`It is what it is.`,`Like I said:`,`Going forward.`,`Through a sea of bodies.`, `We've got to keep it simple.`,`We wanna move the puck north south not east west.`,`We got behind early but we answered.`,`Rifled it glove side.`,`A good outlet pass.`,`Dipsy doodle.`,`Get to the front and get a stick on it.`,`Dished it to the point for a one-timer.`, `"Direct kicking motion."`,`We're gonna have to go upstairs for this one.`,`Loser points.`,`Just get the point.`,`Everything's goin' in right now.`,`Skates like the wind.`,`A beast in their own end.`,`Make 'em pay for it.`,`Patroling the neutral zone.`, `Grippin' the stick too tight.`, `Obviously umm. We didn't have any jump.`, `Turned the jets on.`, `Y'know you expect to win every night.`, `Bulge the twine.`, `Your best players gotta be your best players.`, `Role players.`, `Silky mittens`, `Give 'n' go`,`That's an unfortunate play there.`, `It's a tough one.`, `You've got to have a good stick.`, `Gap up.`, `Extra effort.`,`Old time hockey.`]


function call(myVar) {
    // make an empty string
    // a for loop that runs as many times as the value passed into the call function
    //at each iteration of the loop it takes a random string from the lines array and adds it into the empty string created
    let yourLines = "";
   for(let i = 0; i < myVar; i++){
        yourLines = yourLines + lines[Math.floor(Math.random() * lines.length)] + " ";
    }
    //when the for loop is finished it returns my new string
    return yourLines;
} 
console.log(call(4));
let yourLines2 = call(3)
console.log(yourLines2);
$(".result").html(`${yourLines2}`);
