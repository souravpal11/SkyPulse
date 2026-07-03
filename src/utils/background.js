export const background=(code)=>{

if(code===0)
return "linear-gradient(135deg,#56CCF2,#2F80ED)";

if(code<=3)
return "linear-gradient(135deg,#757F9A,#D7DDE8)";

if(code>=61)
return "linear-gradient(135deg,#373B44,#4286f4)";

return "linear-gradient(135deg,#00d2ff,#3a7bd5)";

}