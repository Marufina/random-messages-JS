const randomNumber = num => Math.floor(Math.random() * num)

const generalMessages = {
    general: ['Take the time to notice the little things that are truly beautiful in your life', 'The place to focus your energies these days is in your home', 'You have the opportunity to accomplish things that will make you shine in days to come', 'Your masculine and feminine energies are working together, which has a positive effect on your bottom line', 'Do not expect anything from others at this time and prioritize your decisions', 'The decision taken by your understanding will get the right result', 'The mind will be disheartened by receiving some bad news about a particular person', 'Do not let conflicts arise with neighbours', 'Use your time wisely', 'Stay away from people with negative activity'],
    love: ['You will meet today someone that shakes your floor', 'It is a good time to express your emotions', 'It is worth waiting for the best moments in your love life', 'Trust each other and have faith', 'Give each other space', 'Work on your bonding and Partnership and give it a chance', 'Support your partner in this tough situation', 'Be cautious, don’t express your emotions openly', 'Someone from the past will be back in your life', 'It is a good time to express your emotions'],
    health: ['It is about time to visit your doctor', 'Constipation, gas, etc. can bother', 'Stress managment is necessary', 'You might be having sleepless nights due to negative thoughts', 'Start taking your physical health seriously', 'Are you drinking enough water to stay hydrated all the time?', 'Try to eat at home more than you eat takeout', ' Your body, your health, and your relationships deserve your focused attention','Keeping yourself on a strict schedule of exercise and a healthy diet','Something is "not quite right" and you will have to look inward to find the cause of this dis-ease'],
    money: ['Pay attention to what your dreams are telling you. You are being led in the right financial direction', 'You are going to make serious bank when you strike a universal note with your work', 'The skills you bring to the table are vital, too. If you want more, learn more','Your shared investments and property may require some action on your part', 'Your ambition can not be matched. Make hay while the Sun shines', 'It is time to pay off any debt you may have', 'You are able to use your prodigious communication skills to convince others that you and your projects are worthy of investment', 'There will be some challenges. You will be able to overcome it', 'The financial situation may be a bit weak at this time', 'You will be able to take financial decisions in the right way'],
}

let horoscopeOfTheDay = []

for (let item in generalMessages) {
    let index = randomNumber(generalMessages[item].length)

    switch(item) {
        case 'general':
            horoscopeOfTheDay.push(`


^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^
General Horoscope: ${generalMessages[item][index]}.`)
            break
        case 'love':
            horoscopeOfTheDay.push(`Love: ${generalMessages[item][index]}.`)
            break
        case 'health':
            horoscopeOfTheDay.push(`Health: ${generalMessages[item][index]}.`)
            break
        case 'money':
            horoscopeOfTheDay.push(`Money: ${generalMessages[item][index]}.
^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^


`)
            break
        default:
            horoscopeOfTheDay.push('There is no horoscope for you today.')
    }
}

function newHoroscope(horoscope) {
    const formated = horoscopeOfTheDay.join('\n')
    console.log(formated)
}

newHoroscope(horoscopeOfTheDay)