// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

function declareWinner(f1, f2, firstMove) {
    //turns rto keep track of fighters attack
    //while fighter 1 and 2 health > 0, keep fighting
    
    let moves = 1
    while((f1.health >= 1) && (f2.health >= 1)){
      if(firstMove === f1.name){
        if(moves%2!==0){
          f2.health -= f1.damagePerAttack
          console.log("f2 health = ", f2.health)
          moves++
        } else if( moves%2 === 0){
          f1.health -= f2.damagePerAttack
          console.log("f1 health = ", f1.health)
          moves++
        }  
      } else if(firstMove === f2.name){
        if(moves%2!==0){
          f1.health -= f2.damagePerAttack
          moves++
        } else if( moves%2 === 0){
          f2.health -= f1.damagePerAttack
          moves++
        }  
      }
    }
    if(f1.health > f2.health){
      return f1.name
    } else {
      return f2.name
    }