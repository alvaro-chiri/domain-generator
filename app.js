let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let domains = [".com", ".net", ".us", ".io"];

pronouns.forEach((pronoun) => {
  adjs.forEach((adj) => {
    nouns.forEach((noun) => {
      domains.forEach((domain) => {
        console.log(pronoun + adj + noun + domain);
      });
    });
  });
});
