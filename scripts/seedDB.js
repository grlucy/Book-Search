const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Good Omens",
    authors: ["Neil Gaiman", "Terry Pratchett"],
    description:
      "The classic collaboration from the internationally bestselling authors Neil Gaiman and Terry Pratchett, soon to be an original series starring Michael Sheen and David Tennant. “Good Omens... is something like what would have happened if Thomas Pynchon, Tom Robbins and Don DeLillo had collaborated. Lots of literary inventiveness in the plotting and chunks of very good writing and characterization. It’s a wow. It would make one hell of a movie. Or a heavenly one. Take your pick.”—Washington Post According to The Nice and Accurate Prophecies of Agnes Nutter, Witch (the world's only completely accurate book of prophecies, written in 1655, before she exploded), the world will end on a Saturday. Next Saturday, in fact. Just before dinner. So the armies of Good and Evil are amassing, Atlantis is rising, frogs are falling, tempers are flaring. Everything appears to be going according to Divine Plan. Except a somewhat fussy angel and a fast-living demon—both of whom have lived amongst Earth's mortals since The Beginning and have grown rather fond of the lifestyle—are not actually looking forward to the coming Rapture. And someone seems to have misplaced the Antichrist...",
    coverImage:
      "https://books.google.com/books/content?id=-o-2KpQlFNsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:
      "https://play.google.com/store/books/details?id=-o-2KpQlFNsC&source=gbs_api",
    Date: "2002-12-09",
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
