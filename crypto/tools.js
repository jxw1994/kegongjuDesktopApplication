exports.encrypt = (filePath="../dist/archive/files.zip")=>{
	var crypto = require('crypto');
	const fs = require('fs');
	var secret = exports.generateSecrete();
    var zip = require("../components/zip");
    var status = zip.util.archive(["../dist/archive/key.secret","../dist/archive/output.docx"]);
	status.on('close', function() {
		const cipher = crypto.createCipher('aes192', secret);
		const input = fs.createReadStream(filePath);
		const output = fs.createWriteStream('../dist/archive/files.kgj');
		input.pipe(cipher).pipe(output);
	});
	
}

exports.decrypt = ()=>{
	var crypto = require('crypto');
	const fs = require('fs');
	var privatePem = fs.readFileSync('./private.pem');
	var secretFileBuffer = new Buffer(fs.readFileSync("../dist/archive/key.secret"));
	var secret = crypto.privateDecrypt(privatePem, secretFileBuffer).toString()
	const decipher = crypto.createDecipher('aes192', secret);
	const input2 = fs.createReadStream('../dist/archive/files.kgj');
	const output2 = fs.createWriteStream('files.zip');
	input2.pipe(decipher).pipe(output2);
	console.log(secret);	
}

exports.generateSecrete = ()=>{
	var crypto = require('crypto');
	const fs = require('fs');
	var secret = Math.random()+"";
	var publicPem = fs.readFileSync('./public.pub');
	var encryptedBuffer = new Buffer(secret);
	var secretFile = crypto.publicEncrypt(publicPem, encryptedBuffer)
	fs.writeFileSync("../dist/archive/key.secret",secretFile);
	return secret;
}
// exports.encrypt();
// exports.decrypt();
