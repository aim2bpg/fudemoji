#!/usr/bin/env node

const Enquirer = require('enquirer')
const Fudemoji = require('./inflater')

const main = () => {
  (async () => {
    const question = {
      type: 'select',
      name: 'choice',
      message: 'Please select the Fudemoji.',
      choices: Fudemoji.names
    }

    let choiceNumber = 0
    let choiceNumbers = []

    do {
      const answer = await Enquirer.prompt(question)
      choiceNumber = parseInt(answer.choice.slice(0, 2))
      if (choiceNumber === 99) {
        choiceNumbers = [...Array(question.choices.length - 1)].map((_, i) => i)
        choiceNumber = 0
      }
      choiceNumbers.push(choiceNumber)
    } while (choiceNumber !== 0)

    for (choiceNumber in choiceNumbers) {
      const pattern = Fudemoji.getPattern(choiceNumbers[choiceNumber])
      const inflatedStr = Fudemoji.inflateStr(pattern)
      process.stdout.write(`\n\n\n\n\n${inflatedStr}\n\n\n\n\n`)
    }
  })()
}

main()
