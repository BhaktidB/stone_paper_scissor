// ------------index.html------------

let userSelection;
let computerSelection;
let options = ['stone', 'paper', 'scissor']

let userScore = parseInt(localStorage.getItem('userScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

function sound(){
    var button = new Audio('./audio/button.mp3')
    button.play()
}

var draw = new Audio('./audio/draw.mp3')
var win = new Audio('./audio/win.mp3')
var lose = new Audio('./audio/lose.mp3')
var star = new Audio('./audio/star.mp3')

$('#userScore').text(localStorage.getItem('userScore'))
$('#compScore').text(localStorage.getItem('computerScore'))
logic()



// on clicking any choosen button it should display the winner and loser and play again button
// hide the game 

$(".choose").click(function () {
    sound()
    userSelection = $(this).attr('id');
    console.log('user:', userSelection)
    let randomNum = Math.floor(Math.random() * 3);
    computerSelection = options[randomNum];
    console.log('computer:', computerSelection)

    logic()

    $('.game').css('visibility', 'hidden')
    $('.reveal-answer').css('visibility', 'visible')

    $('#user-choose img').attr('src','images/'+ userSelection+'.png')
    $('#comp-choose img').attr('src','images/'+ computerSelection+'.png')




});


function logic() {

    if (userSelection == computerSelection) {
        console.log('draw')
        draw.play()
        $('#p-win').text('TIE UP');
    } else if (
        (userSelection == 'stone' && computerSelection == 'scissor') ||
        (userSelection == 'paper' && computerSelection == 'stone') ||
        (userSelection == 'scissor' && computerSelection == 'paper')
    ) {
        console.log('You win')
        win.play()
        $('#p-win').text('YOU WIN');
        $('#user-picked').addClass('picked')
        $('#user-choose').addClass('win')

        userScore += 1;
        localStorage.setItem('userScore', userScore)

        // console.log(userScore)
        // localStorage.setItem('userScore',userScore)
        // localStorage.getItem('userScore')
        // $('#userScore').text(userScore).localStorage.getItem('userScore')
        $('#userScore').text(localStorage.getItem('userScore'))

        $('.next').css({
            'visibility': 'visible'
        })
        $('.rules').css('margin-right', '131px')

    } else {
        console.log('computer win')
        lose.play()
        $('#p-win').text('YOU LOSE');
        $('#comp-picked').addClass('picked')
        $('#comp-choose').addClass('win')
        computerScore += 1
        localStorage.setItem('computerScore', computerScore)
        // localStorage.getItem('computerScore')
        // $('#compScore').text(computerScore).localStorage.getItem('computerScore')
        // $('#compScore').text(computerScore)
        $('#compScore').text(localStorage.getItem('computerScore'))


    }
    console.log(`you ${userScore} || computer ${computerScore}`)
}

//after click display reveal-ans page


// close rule button
$('.close-btn').click(function () {
    sound()
    $(this).hide();
    $('.rules-board').hide();

})

// toggle rulebook
$(".rules").click(function () {
    sound()
    $('.rules-board').css('visibility', 'visible')
    $('.rules-board').toggle();
    $('.close-btn').show();
})

// ------------hurray.html------------
$('.next').click(sound(),function () {
    window.location.href = "hurray.html";
    setTimeout(star.play(),5000)
})

$(".play-again").click(sound(),function () {
    window.location.href = "index.html";
})