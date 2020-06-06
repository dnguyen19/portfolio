import React from 'react';
import Project from '../pages/Project';
import mockup from '../images/space-match/mockups-game.png';
import scSplash from '../images/space-match/space-match-splash.png';
import scGame from '../images/space-match/space-match-game.png';
import scWin from '../images/space-match/space-match-win.png';

const SpaceMatchCode = `
// flip two cards 
let openCards = [];
function flipCard() {
    $(this).addClass('flipped');
    openCards.push($(this));
    if (openCards.length == 2){
        matchCards(openCards[0], openCards[1]);
    }
}
cards.forEach(card => card.addEventListener('click', flipCard));

// check if card matches
function matchCards(card1, card2){
    $(cards).each(function(){
        $(this).css("pointer-events", "none");
    });
    if (card1.attr('id') === card2.attr('id')){
        console.log('matched')
        isMatched();   
    } else {
        console.log('not matched');
        isNotMatched(card1, card2);
    }
};

`

const projectInfo = [
    {
        title: "Space Match",
        shortDesc: "A simple space-themed matching game that records and gives you a score based on your time.",
        tags: ['jQuery', 'HTML/CSS'],
        featuredImg: mockup,
        overview: 'Space Match was built with jQuery and HTML/CSS for my JavaScript class at BCIT. The game requires the player to match cards while being timed. After the player wins, they are given a score and they can restart a new game or exit to the splash screen.',
        responsibilities: null,
        members: null,
        screenshots: [scSplash, scGame, scWin],
        codeDesc: 'The code shows how you can only flip two times for each turn and to see if the cards match or not.',
        codeSnippets: SpaceMatchCode,
        liveSite: 'http://dnguyen.bcitwebdeveloper.ca/space-match/',
        github: 'https://github.com/dnguyen19/spacematch',
    }
]

const ProjectSpaceMatch = () => {
    return (
        <Project 
            project={projectInfo}
        />
    );
}

export default ProjectSpaceMatch;
