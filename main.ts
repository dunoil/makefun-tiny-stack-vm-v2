import{readdirSync as R,readFileSync as F,writeFileSync as W,mkdirSync as K}from"fs"
const{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env
let S,C,M,U,s,c,p,q,w,n,i
function V(P,N){S=new Int32Array(256),C=[],M=[],U=[],s=c=p=q=0,n=P.length
for(let t=1e6;t--;){let y=P[p],v="#4d')-.2!!!!!!!!,,,,,,,(,,,(,,,!,,,!!!!!!!!!!!!!CGGC#!!!!!!!!!!!(+!!!!!!!!!!!!!!''$'".charCodeAt(y)-35
if(!(v>=0))return 5
let m=v>>4,a=v>>2&3
if(p+m>=n|p<0)return 9
let z=p+1+m,r=P[z-2]|P[z-1]<<8
if(s<a||s-a+(v&3)>256)return 3-(s<a)
p=z
if(y>15&&y<35){s+=v==5;let A=S[s-2],B=S[s-1],u=A>>>0,j=B>>>0,h=B&31
if(y>18&y<23&!B)return 4
S[s-2]=[A+B,A-B,Math.imul(A,B),A/B,A%B,u/j,u%j,-A,A&B,A|B,A^B,~A,A<<h,A>>h,A>>>h,,A==B,A<B,u<j][y-16]
s--}else switch(y){case 0:return 0
case 1:case 2:S[s++]=y==1?P.readInt8(z-1):P.readInt32LE(z-4);break
case 3:s--;break
case 4:case 6:S[s++]=S[s-y/2];break
case 5:case 7:for(i=7-y?1:2;i--;)w=S[s-1-i],S[s-1-i]=S[s-2-i],S[s-2-i]=w;break
case 48:case 49:case 50:if(y<49||!S[--s]^(y>49))p=z+(r<<16>>16);break
case 51:if(c>63)return 7;C[c++]=z;p=r;break
case 52:if(!c)return 8;p=C[--c];break
case 64:case 65:if((w=S[s-1])&~255)return 6;if(y<65)S[s-1]=M[w];else s-=2,M[w]=S[s];break
case 80:{let b=Buffer.from(""+S[--s]);if(U.length+b.length>65536)return 11;U.push(...b);break}
case 81:if(U.length>65535)return 11;U.push(S[--s]&255);break
case 82:S[s++]=N[q++]??-1;break
case 83:return S[--s]&255}}return 10}
R(I).forEach(e=>{let d=I+"/"+e,x=V(F(d+"/program.bin"),F(d+"/input.bin")),k=O+"/"+e
K(k,{recursive:!0})
W(k+"/stdout.bin",Buffer.from(U))
W(k+"/exit.txt",x+"")})
