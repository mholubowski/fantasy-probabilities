function Team (init) {
  this.wins    = init.wins;
  this.losses  = init.losses;
  this.name    = init.name;
  this.manager = init.manager;

  this.report_record = function() {
    report = "Team: " + this.name + "\n" +
             "Wins: " + this.wins + "\n" +
             "Losses: " + this.losses;

    console.log(report);
  };
}


// 2 teams battle, one inc_win one inc_loss
function battle (team_1, team_2, prob_team_1_wins) {
  if (prob_team_1_wins === undefined) {
        prob_team_1_wins = 0.5;
  }

  var winner;

  // randomly pick a team
  if ( Math.random() <= prob_team_1_wins ) {
    winner = team_1;
    loser = team_2;
  }
  else {
    winner = team_2;
    loser = team_1;
  }

  winner.wins++;
  loser.losses++;

  // for debugging
  console.log(winner.manager + ' won!');
  winner.report_record();
  loser.report_record();
}



// ---- dummy data ----
var a = new Team({wins: 0, losses: 0, name: 'JoeHasCrabs', manager: 'Mike'});
var b = new Team({wins: 0, losses: 0, name: 'Baby Makers', manager: 'Jason'});

