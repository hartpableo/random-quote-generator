// auto-update year in footer 
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

// quotes generator
const quotes = [
    `"The greatest glory in living lies not in never falling, but in rising every time we fall."<br><br> -<b>Nelson Mandela</b>`,
    `"The way to get started is to quit talking and begin doing."<br><br> -<b>Walt Disney</b>`,
    `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."<br><br> -<b>Steve Jobs</b>`,
    `"If life were predictable it would cease to be life, and be without flavor."<br><br> -<b>Eleanor Roosevelt</b>`,
    `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."<br><br> -<b>Oprah Winfrey</b>`,
    `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."<br><br> -<b>James Cameron</b>`,
    `"Life is what happens when you're busy making other plans."<br><br> -<b>John Lennon</b>`,
    `"Spread love everywhere you go. Let no one ever come to you without leaving happier."<br><br> -<b>Mother Teresa</b>`,
    `"When you reach the end of your rope, tie a knot in it and hang on."<br><br> -<b>Franklin D. Roosevelt</b>`,
    `"Always remember that you are absolutely unique. Just like everyone else."<br><br> -<b>Margaret Mead</b>`,
    `"Don't judge each day by the harvest you reap but by the seeds that you plant."<br><br> -<b>Robert Louis Stevenson</b>`,
    `"The future belongs to those who believe in the beauty of their dreams."<br><br> -<b>Eleanor Roosevelt</b>`,
    `"Tell me and I forget. Teach me and I remember. Involve me and I learn."<br><br> -<b>Benjamin Franklin</b>`,
    `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."<br><br> -<b>Helen Keller</b>`,
    `"It is during our darkest moments that we must focus to see the light."<br><br> -<b>Aristotle</b>`,
    `"Whoever is happy will make others happy too."<br><br> -<b>Anne Frank</b>`,
    `"Do not go where the path may lead, go instead where there is no path and leave a trail."<br><br> -<b>Ralph Waldo Emerson<b/>`,
    `"You will face many defeats in life, but never let yourself be defeated."<br><br> -<b>Maya Angelou</b>`,
    `"The greatest glory in living lies not in never falling, but in rising every time we fall."<br><br> -<b>Nelson Mandela</b>`,
    `"In the end, it's not the years in your life that count. It's the life in your years."<br><br> -<b>Abraham Lincoln</b>`,
    `"Never let the fear of striking out keep you from playing the game."<br><br> -<b>Babe Ruth</b>`,
    `"Life is either a daring adventure or nothing at all."<br><br> -<b>Helen Keller</b>`,
    `"Many of life's failures are people who did not realize how close they were to success when they gave up."<br><br> -<b>Thomas A. Edison</b>`,
    `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."<br><br> -<b>Dr. Seuss</b>`,
    `"Success is not final; failure is not fatal: It is the courage to continue that counts."<br><br> -<b>Winston S. Churchill</b>`,
    `"Success usually comes to those who are too busy to be looking for it."<br><br> -<b>Henry David Thoreau</b>`,
    `"The way to get started is to quit talking and begin doing."<br><br> -<b>Walt Disney</b>`,
    `"If you really look closely, most overnight successes took a long time."<br><br> -<b>Steve Jobs</b>`,
    `"The secret of success is to do the common thing uncommonly well."<br><br> -<b>John D. Rockefeller Jr.</b>`,
    `"I find that the harder I work, the more luck I seem to have."<br><br> -<b>Thomas Jefferson</b>`,
    `"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."<br><br> -<b>Barack Obama</b>`,
    `"You miss 100% of the shots you don't take."<br><br> -<b>Wayne Gretzky</b>`,
    `"Whether you think you can or you think you can't, you're right."<br><br> -<b>Henry Ford</b>`,
    `"I have learned over the years that when one's mind is made up, this diminishes fear."<br><br> -<b>Rosa Parks</b>`,
    `"I alone cannot change the world, but I can cast a stone across the water to create many ripples."<br><br> -<b>Mother Teresa</b>`,
    `"Nothing is impossible, the word itself says, ‘I'm possible!'"<br><br> -<b>Audrey Hepburn</b>`,
    `"The question isn't who is going to let me; it's who is going to stop me."<br><br> -<b>Ayn Rand</b>`,
    `"The only person you are destined to become is the person you decide to be."<br><br> -<b>Ralph Waldo Emerson</b>`,
    `"Believe you can and you're halfway there."<br><br> -<b>Theodore Roosevelt</b>`
];
const generateBtn = document.querySelector('.generateBtn');
const quote = document.querySelector('.quote');

window.addEventListener('DOMContentLoaded',function() {
    quote.innerHTML = `"Hi! Thanks for checking my mini-project out. Just click the 'Generate Now' button above to start getting your quote ideas. Cheers!"<br><br> -<b>Hart Pableo</b>`;
});

generateBtn.addEventListener('click',function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerHTML = randomQuote;
});