//_____________________________________________1_2____________________________________________________

function intro2(paramName){
    const name = "SuperCoder:in";
    console.log(`Hi ${name}. Mein Name ist ${paramName}.`);
} 


intro2('Nehbi')
intro2('Biggie')

//_______________________________________________1_3___________________________________

function intro3(name, stadt, alter){
    console.log(`Hallo mein name ist ${name}. Ich bin ${alter} Jahre alt. Und komme aus ${stadt} `)
}


intro3('Biggie', 'Haan' , '26');


//_________________________________________1_5___________________________________________



function math(a, b){
    const multi = (a * b);
    console.log(multi);
}

math(10, 2);
math(30, 2);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);


//__________________________________________1_4_______________________________________


function hero(heroName, heroPower, heroEnemy){
    const name = "Mein Lieblings Held ist " + heroName + '.';
    const power = "Er besiegt alle mit " + heroPower + '.';
    const enemy = "sein feind ist eine " + heroEnemy ;
    console.log(`${name} ${power} ${enemy}` )
}

hero('Saitama', 'einen Schlag', 'Mücke')