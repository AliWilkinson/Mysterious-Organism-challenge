let testArr = [
  "G",
  "G",
  "C",
  "G",
  "T",
  "T",
  "A",
  "A",
  "C",
  "A",
  "G",
  "C",
  "C",
  "G",
  "T",
];

let testOragnism = {
  specimenNum: 2,
  dna: [
    "A",
    "A",
    "A",
    "A",
    "T",
    "T",
    "A",
    "A",
    "C",
    "A",
    "G",
    "C",
    "C",
    "G",
    "T",
  ],
};

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

console.log(returnRandBase());
console.log(returnRandBase());
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//console.log(mockUpStrand());

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      console.log(this.dna);
      let index = Math.floor(Math.random() * 15);
      let randomBase = this.dna[index];
      let newBase = "";
      if (randomBase === "A") {
        const otherBases = ["T", "C", "G"];
        newBase = otherBases[Math.floor(Math.random() * 3)];
        return newBase;
      } else if (randomBase === "T") {
        const otherBases = ["A", "C", "G"];
        newBase = otherBases[Math.floor(Math.random() * 3)];
      } else if (randomBase === "C") {
        const otherBases = ["A", "T", "G"];
        newBase = otherBases[Math.floor(Math.random() * 3)];
      } else if (randomBase === "G") {
        const otherBases = ["A", "T", "C"];
        newBase = otherBases[Math.floor(Math.random() * 3)];
      }
      this.dna[index] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      let commonBases = [];
      let s1Bases = this.dna;
      let s2Bases = pAequor.dna;
      for (let x = 0; x < 15; x++) {
        if (s1Bases[x] === s2Bases[x]) {
          commonBases.push(s1Bases[x]);
        }
      }

      //console.log(commonBases);
      let totalNoBases = commonBases.length;
      let percentageCommonBaes = (totalNoBases / 15) * 100;
      return `specimen #1 and specimen #2 have ${percentageCommonBaes}% DNA in common`;
    },
    willLikelySurvive() {
      let dnaArr = this.dna;
      let cAndG = [];
      for (let x = 0; x < dnaArr.length; x++) {
        if (dnaArr[x] === "C" || dnaArr[x] === "G") {
          cAndG.push(dnaArr[x]);
        }
      }
      //console.log(cAndG);
      let sumCG = cAndG.length;
      let percentageCG = (sumCG / 15) * 100;
      if (percentageCG >= 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      let originalStrand = this.dna;
      let complementStrand = [];
      for (let x = 0; x < originalStrand.length; x++) {
        if (originalStrand[x] === "A") {
          complementStrand.push("T");
        } else if (originalStrand[x] === "T") {
          complementStrand.push("A");
        } else if (originalStrand[x] === "C") {
          complementStrand.push("G");
        } else if (originalStrand[x] === "G") {
          complementStrand.push("C");
        }
      }
      return complementStrand;
    },
  };
};

const specemin1 = pAequorFactory(31, testArr);
console.log(specemin1.compareDNA(testOragnism));
console.log(specemin1.willLikelySurvive());
console.log(specemin1.dna);
console.log(specemin1.complementStrand());

let speceminArr = [];
let n = 1;
while (speceminArr.length < 30) {
  let newPAequor = pAequorFactory(n, mockUpStrand());

  if (newPAequor.willLikelySurvive()) {
    speceminArr.push(newPAequor);
  }
  n++;
}
console.log(speceminArr);
