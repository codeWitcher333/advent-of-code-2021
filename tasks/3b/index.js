module.exports = data  => data[0].split('').reduce((acc,_,k) => acc.map((x,l) => x.length == 1?x:x.filter(y => y[k] == [x.reduce((acc,val) => +val[k]?[acc[0],acc[1]+1]:[acc[0]+1,acc[1]],[0,0])].map(x => x[0]>x[1]?(l+1)%2:l)[0])),[data,data]).reduce((acc,val) => parseInt(val,2)*acc,1);