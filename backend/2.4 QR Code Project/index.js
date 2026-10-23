import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url, { type: "png" });

    qr_svg.pipe(fs.createWriteStream("i_love_qr.png"));

    console.log("QR code generated successfully!");
  })
  .catch((error) => {
    console.log(error);
  });