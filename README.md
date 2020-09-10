[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

# Shooter Game Pacific Treasures

This game was build using Phaser 3 to learn his functionalities

## Table of Contents

* [Installation](#installation)
* [Game Design Document](#game-design-document)
* [Video Presentation](#video-presentation)
* [Live Demo](#demo)
* [Planification](#planification)
* [Future Implementations](#future-implementations)
* [Built With](#built-with)
* [Testing](#testing)
* [Templates](#templates)
* [Design Credits](#design-credits)
* [Contributing](#contributing)
* [Acknowledgments](#acknowledgments)
* [Authors](#author)
* [License](#license)

## Installation

- You can get a local copy of the repository please run the following commands on your terminal:
```
$ cd <folder>
$ git clone git@github.com:Stricks1/shooterGame.git
```
- Open your terminal and go for the folder you copied
- Run the command 'npm run-script start' and it will build and open the game at your browser

Alternatively you can play online on the [Live Demo](#demo)

## Game Design Document

### Game Concept

On this game, you are Bob the octopus, and you are in a quest to find a treasure in the 16-bit layout deep sea. You need to face some sea creatures in order to achieve your goal, and you can kill the creatures by shooting ink from our hero and interact with levers on the scenario to open paths. You have a limited time to complete the quest.

![screenshoot](./readmeImg/gameReadme.png)

### How to play

- To move our character you should use the left and right arrow keys on your keyboard.
- You can jump with the up arrow key, you can do one extra jump while on air performing a 'double jump'.
- To shoot an 'ink bullet' you should press the space key on your keyboard.

#### Bob the hero

![bob](./readmeImg/heroReadme.png)

- This is our hero, he dies if hit by any enemy.

#### Enemies

![dolphin](./readmeImg/dolphinReadme.png)

- The Dolphin is our basic enemy. Moves left/right and dies after being hit once by our shoot.

![jelly](./readmeImg/jellyReadme.png)

- The Jelly is a simple enemy that moves up/down and dies on 1 hit.

![whale](./readmeImg/whaleReadme.png)

- The Whale moves left/right. To kill the whale you need to hit 3 times.

![seahorse](./readmeImg/seahorseReadme.png)

- The Sea Horse is an aggressive enemy. Moves left/right and shoot a bubble that can kill our hero, be careful! Dies after being hit once

![agrofish](./readmeImg/agroReadme.png)

- This fish is also an aggressive enemy. Moves left/right and shoot a bold that can kill our hero. To kill it you need to hit twice.


#### Interactive Scenario

![chest](./readmeImg/chestReadme.png)

- Our goal is to reach the chest, as soon as we got it we finish our quest. You get 250 points and the seconds you had left on the clock are then converted into points (Each second worth 5 points at the end).

![lever](./readmeImg/leverReadme.png)

- At some points, you will face a wall of seaweed. In order to open that wall, you need to activate the lever. You can do it by touching or shooting it.

## Video Presentation

[Loom video apresentation](https://www.loom.com/share/2c308d7d8a1946d29fa9aca5327135e9)

## Demo

[Live Demo](https://phaserseagame.herokuapp.com)

## Planification

- **Day 1:** My objective was to learn how to use Phaser to work efficiently when starting developing and to learn how to deploy a Phaser project on Heroku. I searched for some tutorials and Templates that I could use, and how to use a Parallax background. Looked up for some basic game assets in order to create something deployable and did some tutorials on deploying with Heroku. By the end of this day, I was able to understand how to use Phaser, and to deploy on Heroku.

- **Day 2:** My objective on this day was to create the whole concept and idea for the game and have a version deployable with the character and some enemies. I decided to make the game a character quest for a chest. Designed the idea for different enemies and interactions. Searched for some more assets and music. At the end of this day, I had the full idea of the game and a version with the hero and some enemies to deploy on Heroku.

- **Day 3:** My objective was to complete the main scene itself and start to design the title, instructions and leaderboard scenes. On this day I mostly did the development, created the whole scenario, added all the platforms, enemies, walls, and levers. I refined the scoring system to give points for the remaining time when the player gets to the chest and worked to make it already a playable main scene. Started the design on the side scenes (title, instructions, and leaderboard), and started creating the API to access the Scores.

- **Day 4:** My objective here was to make the API working and to refine my main scenario, adding some extra animations and decorative objects to make the game looks nicer. This day I was able to achieve those objectives and also to make some changes on the template for activating/deactiving the sounds and background music to give a better touch.

- **Day 5:** My objective was to create the tests on Jest and to write the README file. I followed some tutorials about creating mockup Phaser elements in order to create the tests and wrote all the README. Also did some fixes on some assets and I created the images needed for the documents.

## Future Implementations

- I plan to add more stages for the game
- I will add some more images for the background (already added some interesting pngs on the assets to be used on improvements).
- Add more enemies with different behavior.

## Built With
- Javascript
- HTML
- Phaser 3
- Webpack
- Jest
- Leaderboard API

## Testing

- Test made with Jest.

You can run test running npm test on console at the folder

## Templates

- To create the game I used 2 different templates that helped improve the project. They are the basic template for Phaser 3 [you can find here](https://github.com/photonstorm/phaser3-project-template) created by Richard Davey. Another template I used that implemented some help functionalities to render and align my characters from [William Clarkson](https://williamclarkson.net).

## Design Credits

- The background used is from free assets on [itch io](https://ansimuz.itch.io/underwater-fantasy-pixel-art-environment)
- Most sea creatures are also from free assets you can find it [here](https://rapidpunches.itch.io/)
- The main character octopus is a twitch mascot from [hicelina](https://www.twitch.tv/hicelina) the original art creator is [Michael Perez](https://pixelfly.artstation.com/).

## Contributing

Contributions, issues and feature requests are welcome!

You can do it on [issues page](issues/).

## Acknowledgments

Special thanks to code reviewers.

## Show your support

Give a ⭐️ if you like this project!

## Author

👤 **Gabriel Malheiros Silveira**

- Github: [@Stricks1](https://github.com/Stricks1)
- Linkedin: [Gabriel Silveira](https://linkedin.com/in/gabriel-malheiros-silveira/)
- Twitter: [@Gabriel_Stricks](https://twitter.com/Gabriel_Stricks)

## License

<strong>Creative Commons 2020</strong>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/stricks1/shooterGame.svg?style=flat-square
[contributors-url]: https://github.com/stricks1/shooterGame/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/stricks1/shooterGame.svg?style=flat-square
[forks-url]: https://github.com/stricks1/shooterGame/network/members
[stars-shield]: https://img.shields.io/github/stars/stricks1/shooterGame.svg?style=flat-square
[stars-url]: https://github.com/stricks1/shooterGame/stargazers
[issues-shield]: https://img.shields.io/github/issues/stricks1/shooterGame.svg?style=flat-square
[issues-url]: https://github.com/stricks1/shooterGame/issues