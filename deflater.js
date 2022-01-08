#!/usr/bin/env node

const main = () => {
  const str = `
Paste the string you want to compress here.
`
  const pattern = deflateStr(str)
  process.stdout.write(pattern)
}

const deflateStr = (str) => {
  return str.replace(/([ @])\1+/g, (match, p1) => {
    const cnt = match.length / p1.length
    if (match.length % 1 === 0) return p1 + cnt
    else return match
  })
}

main()
