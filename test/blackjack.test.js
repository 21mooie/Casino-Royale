'use strict;'

var assert = chai.assert;
describe('UpdateGameButtons', function (){
    it(' should change on screen buttons once game starts.', function(){
        updateGameButtons(true);
        assert.equal($('#new-game-button').is(':hidden'),true,"New Game button is visible when it shouldn't be.");
        assert.equal($('#stay-button').is(':visible'),true,"Stay button is not visible when it should be.");
    });

    it(' should change on screen buttons once game ends. ', function(){
        updateGameButtons(false);
        assert.equal($('#new-game-button').is(':visible'),true,"New Game button isn't visible when it should be.");
        assert.equal($('#stay-button').is(':hidden'),true,"Stay button is visible when it should be.");
    })
});

describe('handVal ', function (){
    var hand;
    var deck;
    before(function(){
        hand = new Hand();
        deck = new Deck();
    })
    it('should return 0 when hand is empty.', function(){
        assert.equal(handVal(hand),0,'The hand value is returning an erroneous value of ' + handVal(hand) + ' when the hand is empty.');
    })
    it('should return the correct value when added to it.', function(){
        hand.draw(deck);
        assert.isAtMost(handVal(hand), hand.cards[0].rank,'The value of the hand ' + handVal(hand) + ' and the value of the card ' + hand.cards[0].rank + ' are equal.');
    })
});

describe('cardVal ', function(){
    var hand;
    var card = {};
    before(function(){
        card.rank = 11;
        hand = new Hand();
    })
    it('should calculate the proper value of this card given this hand.', function(){
        assert.equal(cardVal(card.rank), 10, 'The value of this card is ' + card.rank + ' but it should be 10.');
    })
})