const path = require("path");
const fs = require("fs");
const dirPath =path.join(__dirname, "../posts")
let postlist = [];

async function getPosts(){
    await fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed postget: "+err)
        }
       
        files.forEach((file, i)=> {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                console.log(contents)
            })
        })
    })
}

getPosts()