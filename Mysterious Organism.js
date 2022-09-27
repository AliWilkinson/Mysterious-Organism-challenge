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
  };
};

const specemin1 = pAequorFactory(1, testArr);
console.log(specemin1.mutate());
