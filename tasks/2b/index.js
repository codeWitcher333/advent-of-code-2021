require('fs').readFile(`${__dirname}/data.txt`,(_,data) => console.log(data.toString().split('\n').reduce((acc,val) => val.includes('forward')?[+val.replace(/\D/g,'')+acc[0],+val.replace(/\D/g,'')*acc[2]+acc[1],acc[2]]:val.includes('up')?[acc[0],acc[1],-+val.replace(/\D/g,'')+acc[2]]:[acc[0],acc[1],+val.replace(/\D/g,'')+acc[2]],[0,0,0]).slice(0, 2).reduce((a, b) => a*b, 1)));