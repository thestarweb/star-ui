const fs = require('fs');
const path = require('path');
const srcDir="./src";
const outDir="./out";
var down = [];
var task = ["/main.ts"];
while(task.length){
	const file=task.pop();
	if(down.indexOf(file) != -1) continue;
	let fileData = fs.readFileSync(path.join(srcDir, file), "utf8");
	let outfile=path.join(outDir, file);
	if(file.endsWith(".vue")){
		//fileData
		fileData=fileData.substring(fileData.indexOf("<script lang=\"ts\">")+18,fileData.lastIndexOf("</script>"));
		outfile+=".ts";
	}
	fileData=fileData.replace(/import (.+?) from "(.+?)"/g,function(row,m,importFile){
		//console.log(r,r2,path);
		if(!importFile.startsWith(".")){
			return row;
		}
		let importFile_ = path.join(path.dirname(file), importFile);
		if(importFile.lastIndexOf(".")<=importFile.lastIndexOf("/")){
			const base = path.join(srcDir, importFile_);
			if(fs.existsSync(base+".ts")){
				importFile_+=".ts";
			}else if(fs.existsSync(base+".d.ts")){
				importFile_+=".d.ts";
			}
		}
		task.push(importFile_);
		return row;
	});
	try{
		fs.mkdirSync(path.dirname(outfile));
	}catch(e){
		//nothin to do
	}
	down.push(file);
	fs.writeFileSync(outfile, fileData, {flag: "w+"});
}