export const prices = {
    lo:     { lo: 0, hi: 30 },
    medLo:  { lo: 31, hi: 60 },
    med:    { lo: 61, hi: 100 },
    hi:     { lo: 100, hi: Infinity },
    all:    { lo: 0, hi: Infinity },
}

const sortLoHi = (arr) => {
    return [...arr].sort((a, b) => (a.price - b.price))
}

const sortHiLo = (arr) => {
    return [...arr].sort((a, b) => (b.price - a.price))
}

const sortAZ = (arr) => {
    return [...arr].sort((a, b) => a.title.localeCompare(b.title))
}

const sortZA = (arr) => {
    return [...arr].sort((a, b) => b.title.localeCompare(a.title))
}

export const sortFns = {
    sortLoHi: sortLoHi,
    sortHiLo: sortHiLo,
    sortAZ: sortAZ,
    sortZA: sortZA
}
