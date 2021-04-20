const fs = require('fs');
const path = require('path');
const srcDir="./src";
const outDir="./out";
var task = ["/main.ts"]
while(task.length){
	const file=task.pop();
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
		if(importFile.endsWith(".ts")){
			task.push(path.join(path.dirname(file), importFile));
			return row;
		}
		if(importFile.endsWith(".vue")){
			task.push(path.join(path.dirname(file), importFile));
			return row;
		}
		return "";
	});
	try{
		fs.mkdirSync(path.dirname(outfile));
	}catch(e){
		//nothin to do
	}
	fs.writeFileSync(outfile, fileData, {flag: "w+"});
}