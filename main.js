// hello!

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

let ask = (question, yes, no) => {
    return (confirm(question)) ? yes() : no();
}

ask(
    "agree?",
    () => alert('yes'),
    () => alert('no')
);