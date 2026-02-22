const quotes = [
  "Discipline beats motivation every single time.",
  "You don’t rise to your goals. You fall to your systems.",
  "Consistency for two years can change the next twenty.",
   "Hard problems build hard minds.",
   "Code is not just written. It is engineered.",
   "If it scares you, it’s probably worth doing.",
   "Comfort is the enemy of growth.",
   "Every expert was once confused — but consistent.",
   "Small daily improvements create massive long-term results.",
   "Pressure creates precision.",
   "Don’t aim to be busy. Aim to be valuable.",
   "Your competition is practicing right now.",
   "Average effort gives average results.",
   "Think like an engineer, not just a programmer.",
   "Clarity of fundamentals creates confidence in interviews.",
  "If you can’t explain it simply, you don’t understand it deeply.",
  "Build things. Break things. Fix things. Repeat.",
  "Opportunities come to those who are prepared — not those who hope.",
  "The grind feels slow until one day it feels worth it.",
  "Two years of focus can place you among the top 1%."
];
const button = document.querySelector("button");
const quote = document.querySelector('h1');
button .addEventListener("click", () => {
  const index=Math.floor(Math.random()*20);
  quote.textContent=quotes[index];
});