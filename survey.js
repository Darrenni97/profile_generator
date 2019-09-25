// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :):  ", (answer1) => {
  rl.question("What's an activity you like doing?:  ", (answer2) => {
    rl.question("What do you listen to while doing that?:  ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.):  ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?:  ", (answer5) => {
          rl.question("Which sport is your absolute favourite?:  ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!:  ", (answer7) => {

              console.log(`${answer1} loves ${answer2} while listening to ${answer3}. ${answer4} is their favorite meal. His favorite thing to eat for ${answer4} is ${answer5}. Their preferred sport is ${answer6} and their superpower is ${answer7}.`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});

