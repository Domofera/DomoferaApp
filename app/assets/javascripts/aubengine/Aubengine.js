// gl-matrix 1.2.4 - https://github.com/toji/gl-matrix/blob/master/LICENSE.md
(function(a){a.glMatrixArrayType=a.MatrixArray=null;a.vec3={};a.mat3={};a.mat4={};a.quat4={};a.setMatrixArrayType=function(a){return glMatrixArrayType=MatrixArray=a};a.determineMatrixArrayType=function(){return setMatrixArrayType("undefined"!==typeof Float32Array?Float32Array:Array)};determineMatrixArrayType()})("undefined"!=typeof exports?global:this);vec3.create=function(a){var b=new MatrixArray(3);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2]):b[0]=b[1]=b[2]=0;return b};
vec3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};vec3.add=function(a,b,c){if(!c||a===c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};vec3.subtract=function(a,b,c){if(!c||a===c)return a[0]-=b[0],a[1]-=b[1],a[2]-=b[2],a;c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};vec3.multiply=function(a,b,c){if(!c||a===c)return a[0]*=b[0],a[1]*=b[1],a[2]*=b[2],a;c[0]=a[0]*b[0];c[1]=a[1]*b[1];c[2]=a[2]*b[2];return c};
vec3.negate=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};vec3.scale=function(a,b,c){if(!c||a===c)return a[0]*=b,a[1]*=b,a[2]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};vec3.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(1===g)return b[0]=c,b[1]=d,b[2]=e,b}else return b[0]=0,b[1]=0,b[2]=0,b;g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};
vec3.cross=function(a,b,c){c||(c=a);var d=a[0],e=a[1],a=a[2],g=b[0],f=b[1],b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};vec3.length=function(a){var b=a[0],c=a[1],a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};vec3.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1],a=a[2]-b[2],b=Math.sqrt(d*d+e*e+a*a);if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};
vec3.lerp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};vec3.dist=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return Math.sqrt(c*c+d*d+e*e)};
vec3.unproject=function(a,b,c,d,e){e||(e=a);var g=mat4.create(),f=new MatrixArray(4);f[0]=2*(a[0]-d[0])/d[2]-1;f[1]=2*(a[1]-d[1])/d[3]-1;f[2]=2*a[2]-1;f[3]=1;mat4.multiply(c,b,g);if(!mat4.inverse(g))return null;mat4.multiplyVec4(g,f);if(0===f[3])return null;e[0]=f[0]/f[3];e[1]=f[1]/f[3];e[2]=f[2]/f[3];return e};vec3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};
mat3.create=function(a){var b=new MatrixArray(9);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8]);return b};mat3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};mat3.identity=function(a){a||(a=mat3.create());a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
mat3.transpose=function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};mat3.toMat4=function(a,b){b||(b=mat4.create());b[15]=1;b[14]=0;b[13]=0;b[12]=0;b[11]=0;b[10]=a[8];b[9]=a[7];b[8]=a[6];b[7]=0;b[6]=a[5];b[5]=a[4];b[4]=a[3];b[3]=0;b[2]=a[2];b[1]=a[1];b[0]=a[0];return b};
mat3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};mat4.create=function(a){var b=new MatrixArray(16);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]);return b};
mat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};mat4.identity=function(a){a||(a=mat4.create());a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
mat4.transpose=function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
mat4.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],n=a[11],o=a[12],m=a[13],p=a[14],a=a[15];return o*k*h*e-j*m*h*e-o*f*l*e+g*m*l*e+j*f*p*e-g*k*p*e-o*k*d*i+j*m*d*i+o*c*l*i-b*m*l*i-j*c*p*i+b*k*p*i+o*f*d*n-g*m*d*n-o*c*h*n+b*m*h*n+g*c*p*n-b*f*p*n-j*f*d*a+g*k*d*a+j*c*h*a-b*k*h*a-g*c*l*a+b*f*l*a};
mat4.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],n=a[10],o=a[11],m=a[12],p=a[13],r=a[14],s=a[15],A=c*h-d*f,B=c*i-e*f,t=c*j-g*f,u=d*i-e*h,v=d*j-g*h,w=e*j-g*i,x=k*p-l*m,y=k*r-n*m,z=k*s-o*m,C=l*r-n*p,D=l*s-o*p,E=n*s-o*r,q=A*E-B*D+t*C+u*z-v*y+w*x;if(!q)return null;q=1/q;b[0]=(h*E-i*D+j*C)*q;b[1]=(-d*E+e*D-g*C)*q;b[2]=(p*w-r*v+s*u)*q;b[3]=(-l*w+n*v-o*u)*q;b[4]=(-f*E+i*z-j*y)*q;b[5]=(c*E-e*z+g*y)*q;b[6]=(-m*w+r*t-s*B)*q;b[7]=(k*w-n*t+o*B)*q;b[8]=
(f*D-h*z+j*x)*q;b[9]=(-c*D+d*z-g*x)*q;b[10]=(m*v-p*t+s*A)*q;b[11]=(-k*v+l*t-o*A)*q;b[12]=(-f*C+h*y-i*x)*q;b[13]=(c*C-d*y+e*x)*q;b[14]=(-m*u+p*B-r*A)*q;b[15]=(k*u-l*B+n*A)*q;return b};mat4.toRotationMat=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat4.toMat3=function(a,b){b||(b=mat3.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};mat4.toInverseMat3=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],i=a[8],j=a[9],k=a[10],l=k*f-h*j,n=-k*g+h*i,o=j*g-f*i,m=c*l+d*n+e*o;if(!m)return null;m=1/m;b||(b=mat3.create());b[0]=l*m;b[1]=(-k*d+e*j)*m;b[2]=(h*d-e*f)*m;b[3]=n*m;b[4]=(k*c-e*i)*m;b[5]=(-h*c+e*g)*m;b[6]=o*m;b[7]=(-j*c+d*i)*m;b[8]=(f*c-d*g)*m;return b};
mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],n=a[9],o=a[10],m=a[11],p=a[12],r=a[13],s=a[14],a=a[15],A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14],b=b[15];c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*i+t*n+u*r;c[2]=A*g+B*j+t*o+u*s;c[3]=A*f+B*k+t*m+u*a;c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*i+x*n+y*r;c[6]=v*g+w*j+x*o+y*s;c[7]=v*f+w*k+x*m+y*a;c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*i+D*n+E*r;c[10]=z*g+C*
j+D*o+E*s;c[11]=z*f+C*k+D*m+E*a;c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*i+G*n+b*r;c[14]=q*g+F*j+G*o+b*s;c[15]=q*f+F*k+G*m+b*a;return c};mat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
mat4.multiplyVec4=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2],b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};
mat4.translate=function(a,b,c){var d=b[0],e=b[1],b=b[2],g,f,h,i,j,k,l,n,o,m,p,r;if(!c||a===c)return a[12]=a[0]*d+a[4]*e+a[8]*b+a[12],a[13]=a[1]*d+a[5]*e+a[9]*b+a[13],a[14]=a[2]*d+a[6]*e+a[10]*b+a[14],a[15]=a[3]*d+a[7]*e+a[11]*b+a[15],a;g=a[0];f=a[1];h=a[2];i=a[3];j=a[4];k=a[5];l=a[6];n=a[7];o=a[8];m=a[9];p=a[10];r=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=i;c[4]=j;c[5]=k;c[6]=l;c[7]=n;c[8]=o;c[9]=m;c[10]=p;c[11]=r;c[12]=g*d+j*e+o*b+a[12];c[13]=f*d+k*e+m*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=i*d+n*e+r*b+a[15];
return c};mat4.scale=function(a,b,c){var d=b[0],e=b[1],b=b[2];if(!c||a===c)return a[0]*=d,a[1]*=d,a[2]*=d,a[3]*=d,a[4]*=e,a[5]*=e,a[6]*=e,a[7]*=e,a[8]*=b,a[9]*=b,a[10]*=b,a[11]*=b,a;c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
mat4.rotate=function(a,b,c,d){var e=c[0],g=c[1],c=c[2],f=Math.sqrt(e*e+g*g+c*c),h,i,j,k,l,n,o,m,p,r,s,A,B,t,u,v,w,x,y,z;if(!f)return null;1!==f&&(f=1/f,e*=f,g*=f,c*=f);h=Math.sin(b);i=Math.cos(b);j=1-i;b=a[0];f=a[1];k=a[2];l=a[3];n=a[4];o=a[5];m=a[6];p=a[7];r=a[8];s=a[9];A=a[10];B=a[11];t=e*e*j+i;u=g*e*j+c*h;v=c*e*j-g*h;w=e*g*j-c*h;x=g*g*j+i;y=c*g*j+e*h;z=e*c*j+g*h;e=g*c*j-e*h;g=c*c*j+i;d?a!==d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]):d=a;d[0]=b*t+n*u+r*v;d[1]=f*t+o*u+s*v;d[2]=k*t+m*u+A*
v;d[3]=l*t+p*u+B*v;d[4]=b*w+n*x+r*y;d[5]=f*w+o*x+s*y;d[6]=k*w+m*x+A*y;d[7]=l*w+p*x+B*y;d[8]=b*z+n*e+r*g;d[9]=f*z+o*e+s*g;d[10]=k*z+m*e+A*g;d[11]=l*z+p*e+B*g;return d};mat4.rotateX=function(a,b,c){var d=Math.sin(b),b=Math.cos(b),e=a[4],g=a[5],f=a[6],h=a[7],i=a[8],j=a[9],k=a[10],l=a[11];c?a!==c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[4]=e*b+i*d;c[5]=g*b+j*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+i*b;c[9]=g*-d+j*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c};
mat4.rotateY=function(a,b,c){var d=Math.sin(b),b=Math.cos(b),e=a[0],g=a[1],f=a[2],h=a[3],i=a[8],j=a[9],k=a[10],l=a[11];c?a!==c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+i*-d;c[1]=g*b+j*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+i*b;c[9]=g*d+j*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c};
mat4.rotateZ=function(a,b,c){var d=Math.sin(b),b=Math.cos(b),e=a[0],g=a[1],f=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7];c?a!==c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+i*d;c[1]=g*b+j*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+i*b;c[5]=g*-d+j*b;c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c};
mat4.frustum=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=2*e/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2*e/i;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/i;f[10]=-(g+e)/j;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(2*g*e)/j;f[15]=0;return f};mat4.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b*=a;return mat4.frustum(-b,b,-a,a,c,d,e)};
mat4.ortho=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/i;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/j;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/i;f[14]=-(g+e)/j;f[15]=1;return f};
mat4.lookAt=function(a,b,c,d){d||(d=mat4.create());var e,g,f,h,i,j,k,l,n=a[0],o=a[1],a=a[2];f=c[0];h=c[1];g=c[2];k=b[0];c=b[1];e=b[2];if(n===k&&o===c&&a===e)return mat4.identity(d);b=n-k;c=o-c;k=a-e;l=1/Math.sqrt(b*b+c*c+k*k);b*=l;c*=l;k*=l;e=h*k-g*c;g=g*b-f*k;f=f*c-h*b;(l=Math.sqrt(e*e+g*g+f*f))?(l=1/l,e*=l,g*=l,f*=l):f=g=e=0;h=c*f-k*g;i=k*e-b*f;j=b*g-c*e;(l=Math.sqrt(h*h+i*i+j*j))?(l=1/l,h*=l,i*=l,j*=l):j=i=h=0;d[0]=e;d[1]=h;d[2]=b;d[3]=0;d[4]=g;d[5]=i;d[6]=c;d[7]=0;d[8]=f;d[9]=j;d[10]=k;d[11]=
0;d[12]=-(e*n+g*o+f*a);d[13]=-(h*n+i*o+j*a);d[14]=-(b*n+c*o+k*a);d[15]=1;return d};mat4.fromRotationTranslation=function(a,b,c){c||(c=mat4.create());var d=a[0],e=a[1],g=a[2],f=a[3],h=d+d,i=e+e,j=g+g,a=d*h,k=d*i,d=d*j,l=e*i,e=e*j,g=g*j,h=f*h,i=f*i,f=f*j;c[0]=1-(l+g);c[1]=k+f;c[2]=d-i;c[3]=0;c[4]=k-f;c[5]=1-(a+g);c[6]=e+h;c[7]=0;c[8]=d+i;c[9]=e-h;c[10]=1-(a+l);c[11]=0;c[12]=b[0];c[13]=b[1];c[14]=b[2];c[15]=1;return c};
mat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};quat4.create=function(a){var b=new MatrixArray(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};quat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
quat4.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a===b)return a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a;b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};quat4.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};quat4.inverse=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[3],c=(c=c*c+d*d+e*e+g*g)?1/c:0;if(!b||a===b)return a[0]*=-c,a[1]*=-c,a[2]*=-c,a[3]*=c,a;b[0]=-a[0]*c;b[1]=-a[1]*c;b[2]=-a[2]*c;b[3]=a[3]*c;return b};
quat4.conjugate=function(a,b){if(!b||a===b)return a[0]*=-1,a[1]*=-1,a[2]*=-1,a;b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};quat4.length=function(a){var b=a[0],c=a[1],d=a[2],a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};quat4.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(0===f)return b[0]=0,b[1]=0,b[2]=0,b[3]=0,b;f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};
quat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],a=a[3],f=b[0],h=b[1],i=b[2],b=b[3];c[0]=d*b+a*f+e*i-g*h;c[1]=e*b+a*h+g*f-d*i;c[2]=g*b+a*i+d*h-e*f;c[3]=a*b-d*f-e*h-g*i;return c};quat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2],b=a[0],f=a[1],h=a[2],a=a[3],i=a*d+f*g-h*e,j=a*e+h*d-b*g,k=a*g+b*e-f*d,d=-b*d-f*e-h*g;c[0]=i*a+d*-b+j*-h-k*-f;c[1]=j*a+d*-f+k*-b-i*-h;c[2]=k*a+d*-h+i*-f-j*-b;return c};
quat4.toMat3=function(a,b){b||(b=mat3.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h,c=c*i,l=d*h,d=d*i,e=e*i,f=g*f,h=g*h,g=g*i;b[0]=1-(l+e);b[1]=k+g;b[2]=c-h;b[3]=k-g;b[4]=1-(j+e);b[5]=d+f;b[6]=c+h;b[7]=d-f;b[8]=1-(j+l);return b};
quat4.toMat4=function(a,b){b||(b=mat4.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h,c=c*i,l=d*h,d=d*i,e=e*i,f=g*f,h=g*h,g=g*i;b[0]=1-(l+e);b[1]=k+g;b[2]=c-h;b[3]=0;b[4]=k-g;b[5]=1-(j+e);b[6]=d+f;b[7]=0;b[8]=c+h;b[9]=d-f;b[10]=1-(j+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
quat4.slerp=function(a,b,c,d){d||(d=a);var e=a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3],g,f;if(1<=Math.abs(e))return d!==a&&(d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3]),d;g=Math.acos(e);f=Math.sqrt(1-e*e);if(0.001>Math.abs(f))return d[0]=0.5*a[0]+0.5*b[0],d[1]=0.5*a[1]+0.5*b[1],d[2]=0.5*a[2]+0.5*b[2],d[3]=0.5*a[3]+0.5*b[3],d;e=Math.sin((1-c)*g)/f;c=Math.sin(c*g)/f;d[0]=a[0]*e+b[0]*c;d[1]=a[1]*e+b[1]*c;d[2]=a[2]*e+b[2]*c;d[3]=a[3]*e+b[3]*c;return d};
quat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};

var gl = null;
var prg = null;
var c_width = 0;
var c_height = 0;
var names    = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
var interactor = null;
var transforms = null;

function resizeCanvas(aubengine){
    c_width = $('#content').width();
    c_height = $('#content').height();
    $('#the-canvas').attr('width',c_width);
    $('#the-canvas').attr('height',c_height);
    if (aubengine) aubengine.draw();
}

$(window).resize(function(){resizeCanvas();});

'use strict';

function Animation(frequency, times, callback, data, callbackObj) {
  this.frequency   = frequency;
  this.interval    = null;
  if (callbackObj) {
    this.callbackObj     = callbackObj;
    callbackObj.callback = callback;
  } else {
    this.callbackObj = {callback: callback}
  }
  var count = 0;
  var eTime;
  var self = this;
  
  this.onFrame = function() {
    var stopAnimation = function() {
      clearInterval(self.interval);
    };

    eTime = (new Date).getTime() - self.iTime;
    if (eTime < 5) return;
    var steps = Math.floor(eTime / frequency);
    while ((steps > 0) && (count != times)) {
      self.callbackObj.callback(data);
      steps -= 1;
      count++;
    };

    if (count == times) {
        stopAnimation();
    };

    self.iTime = (new Date).getTime();
  };

  this.startAnimation = function() {
    self.iTime = (new Date).getTime();
    self.interval = setInterval(self.onFrame, self.frequency/1000);
  };
};

var	Configuration = {

	getGLContext : function(name, width, height){
		var canvas  = document.getElementById(name);
		var context = null;

		if (canvas == null){
			alert('Hey! There is no canvas!');
			return null;
		} else {
			c_width  = canvas.width;
			c_height = canvas.height;
		}

		for (var i = 0; i < names.length; ++i) {
			try {
				context = canvas.getContext(names[i]);
			}
			catch(e) {}
				if (context) {
					break;
				}
		}

		if (context == null) {
			alert("Sorry! Not posible to initialize :(");
			return null;
		} else {
			return context;
		}
	},

	requestAnimFrame : function(o){
		requestAnimFrame(o);
	},

	//Triangles
  calculateNormals : function(vs, ind){
      var x=0;
      var y=1;
      var z=2;

      var ns = [];
      for(var i=0;i<vs.length;i=i+3){ //for each vertex, initialize normal x, normal y, normal z
          ns[i+x]=0.0;
          ns[i+y]=0.0;
          ns[i+z]=0.0;
      }

      for(var i=0;i<ind.length;i=i+3){
          var v1 = [];
          var v2 = [];
          var normal = [];
          //p2 - p1
          v1[x] = vs[3*ind[i+2]+x] - vs[3*ind[i+1]+x];
          v1[y] = vs[3*ind[i+2]+y] - vs[3*ind[i+1]+y];
          v1[z] = vs[3*ind[i+2]+z] - vs[3*ind[i+1]+z];
          //p0 - p1
          v2[x] = vs[3*ind[i]+x] - vs[3*ind[i+1]+x];
          v2[y] = vs[3*ind[i]+y] - vs[3*ind[i+1]+y];
          v2[z] = vs[3*ind[i]+z] - vs[3*ind[i+1]+z];
          normal[x] = v1[y]*v2[z] - v1[z]*v2[y];
          normal[y] = v1[z]*v2[x] - v1[x]*v2[z];
          normal[z] = v1[x]*v2[y] - v1[y]*v2[x];
          for(j=0;j<3;j++){ //suma de vectores
              ns[3*ind[i+j]+x] =  ns[3*ind[i+j]+x] + normal[x];
              ns[3*ind[i+j]+y] =  ns[3*ind[i+j]+y] + normal[y];
              ns[3*ind[i+j]+z] =  ns[3*ind[i+j]+z] + normal[z];
          }
      }
      //normalizacion
      for(var i=0;i<vs.length;i=i+3){

          var nn=[];
          nn[x] = ns[i+x];
          nn[y] = ns[i+y];
          nn[z] = ns[i+z];

          var len = Math.sqrt((nn[x]*nn[x])+(nn[y]*nn[y])+(nn[z]*nn[z]));
          if (len == 0) len = 1.0;

          nn[x] = nn[x]/len;
          nn[y] = nn[y]/len;
          nn[z] = nn[z]/len;

          ns[i+x] = nn[x];
          ns[i+y] = nn[y];
          ns[i+z] = nn[z];
      }

      return ns;
  },

    calculateTangents : function(vs, tc, ind){
        var i;
        var tangents = [];
        for(i=0;i<vs.length/3; i++){
            tangents[i]=[0, 0, 0];
        }


        var a = [0, 0, 0], b = [0, 0, 0];
        var triTangent = [0, 0, 0];
        for(i = 0; i < ind.length; i+=3) {
            var i0 = ind[i+0];
            var i1 = ind[i+1];
            var i2 = ind[i+2];

            var pos0 = [ vs[i0 * 3], vs[i0 * 3 + 1], vs[i0 * 3 + 2] ];
            var pos1 = [ vs[i1 * 3], vs[i1 * 3 + 1], vs[i1 * 3 + 2] ];
            var pos2 = [ vs[i2 * 3], vs[i2 * 3 + 1], vs[i2 * 3 + 2] ];

            var tex0 = [ tc[i0 * 2], tc[i0 * 2 + 1] ];
            var tex1 = [ tc[i1 * 2], tc[i1 * 2 + 1] ];
            var tex2 = [ tc[i2 * 2], tc[i2 * 2 + 1] ];

            vec3.subtract(pos1, pos0, a);
            vec3.subtract(pos2, pos0, b);

            var c2c1t = tex1[0] - tex0[0];
            var c2c1b = tex1[1] - tex0[1];
            var c3c1t = tex2[0] - tex0[0];
            var c3c1b = tex2[0] - tex0[1];

            triTangent = [c3c1b * a[0] - c2c1b * b[0], c3c1b * a[1] - c2c1b * b[1], c3c1b * a[2] - c2c1b * b[2]];

            vec3.add(tangents[i0], triTangent);
            vec3.add(tangents[i1], triTangent);
            vec3.add(tangents[i2], triTangent);
        }

        //normalizacion
        var ts = [];
        for(i=0;i<tangents.length; i++){
            var tan = tangents[i];
            vec3.normalize(tan);
            ts.push(tan[0]);
            ts.push(tan[1]);
            ts.push(tan[2]);
        }

        return ts;
    }
}

'use strict'

function Transformation(name, position, size, rotation) {
  this.name = name;
  this.mv = null;
  this.position = position || [0,0,0];
  this.size = size || [1,1,1];
  this.rotation = rotation || {angle: 0, axis: [0,0,0]};  //angle, axis
  this.animations = [];
};

Transformation.prototype.getPosition = function() {
  return this.position;
};

Transformation.prototype.startAnimation = function() {
  this.animations.forEach(function(animation) {
    animation.startAnimation();
  })
};

Transformation.prototype.copy = function() {
  var self = this;
  var newTransformation = new Transformation(self.name, self.position, self.size, self.rotation);
  return newTransformation;
};

Transformation.prototype.beginDraw = function() {
  transforms.push(); //apila
  transforms.calculateModelView(); //calcula la matriz actual
  this.mv = transforms.mvMatrix; //hace una copia

  if (this.position!=null) {
    mat4.translate(this.mv, this.position);
  };

  if (this.size!=null) {
    mat4.scale(this.mv, this.size);
  };

  if (this.rotation!=null) {
			mat4.rotate(this.mv,(this.rotation.angle*Math.PI/180),this.rotation.axis);
  };

  transforms.setMatrixUniforms();
  console.log('begin draw ' + this.name);
};

Transformation.prototype.endDraw = function() {
  transforms.pop(); //la desapila y la pone como mvMatrix
  console.log('end draw ' + this.name)
}

/* ANIMATION */
Transformation.prototype.rotate = function(rotations) {
  rotations[0].angle = rotations[1].angle + rotations[0].angle;
  vec3.add(rotations[0].axis, rotations[1].axis, rotations[0].axis);
};

Transformation.prototype.translate = function(positions) {
  vec3.add(positions[0], positions[1], positions[0]);
};

Transformation.prototype.scale = function(sizes) {
  vec3.add(sizes[0], sizes[1], sizes[0]);
};

Transformation.prototype.animate = function(frequency, scene, times, callback, data) {
  this.animations.push(new Animation(frequency, scene, times, callback, data));
};

function Texture(img){
	this.texture = gl.createTexture();
	this.image = new Image();
	var self = this;
	this.image.src = img;
	this.image.onload = function() {
		gl.bindTexture(gl.TEXTURE_2D, self.texture);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.generateMipmap(gl.TEXTURE_2D);
		gl.bindTexture(gl.TEXTURE_2D, null);
	}
};

Texture.prototype.getTexture = function() {
	return this.texture;
};

function Light(name){
	this.id = name;
	this.position = [0.0,0.0,0.0];
	this.ambient  = [0.0,0.0,0.0,0.0];
	this.diffuse  = [0.0,0.0,0.0,0.0];
	this.specular = [0.0,0.0,0.0,0.0];
}

Light.prototype.setPosition = function(p) {
	this.position = p.slice(0);
};

Light.prototype.setDiffuse = function (d) {
	this.diffuse = d.slice(0);
}

Light.prototype.setAmbient = function(a) {
	this.ambient = a.slice(0);
}

Light.prototype.setSpecular = function(s) {
	this.specular = s.slice(0);
}

Light.prototype.setProperty = function(pName, pValue) {
	if(typeof pName == 'string'){
		if (pValue instanceof Array){
			this[pName] = pValue.slice(0);
		}
		else {
			this[pName] = pValue;
		}
	}
	else{
		throw 'The property name must be a string';
	}
};

Light.prototype.beginDraw = function(transforms) {
	var self = this;
	Lights.draw(self, transforms);
	console.log('beginDraw of ' + this.id);
};

Light.prototype.endDraw = function(transforms) {
	console.log('endDraw of ' + this.id);
};

var Lights = {
	list : [],
	add : function(light, position){
		if (!(light instanceof Light)){
			alert('the parameter is not a light');
			return;
		}
		light.setPosition(position);
		this.list.push(light);
	},

	getArray: function(type){
		var a = [];
		for(var i = 0, max = this.list.length; i < max; i+=1){
			a = a.concat(this.list[i][type]);
		}
		return a;
	},

	get: function(idx){
		if ((typeof idx == 'number') && idx >= 0 && idx < this.list.length){
			return this.list[idx];
		}
		else if (typeof idx == 'string'){
			for(var i=0, max = this.list.length; i < max; i+=1){
				if (this.list[i].id == idx) return this.list[i];
			}
			throw 'Light ' + idx + ' does not exist';
		}
		else {
			throw 'Unknown parameter';
		}
	},

	setNumLights: function() {
		if (this.list.length <= 0) return 4
		else return this.list.length
	},

	//draws all the lights
	draw: function(light, transforms) {
		//lights uniform vector, uses PHONG
		gl.uniform3fv(Program.uLightPosition, Lights.getArray('position'));
		gl.uniform3fv(Program.uLa, Lights.getArray('ambient'));
		gl.uniform3fv(Program.uLd, Lights.getArray('diffuse'));
		gl.uniform3fv(Program.uLs, Lights.getArray('specular'));

		//object properties uniform vector
		gl.uniform3fv(Program.uKa, [1.0,1.0,1.0]);
		gl.uniform3fv(Program.uKd, [1.0,1.0,1.0]);
		gl.uniform3fv(Program.uKs, [1.0,1.0,1.0]);

		gl.uniform1f(Program.uNs, 1.0);
		gl.uniform1i(Program.uTranslateLights, true);
	}
}

var Shaders = {
     "vertex" : {
      'type' : "x-shader/x-vertex",
       'content' : "const int NUM_LIGHTS =" + Lights.setNumLights() + ";\n"
        /* geometry */
        + "   attribute vec3 aVertexPosition;\n"
        + "   attribute vec3 aVertexNormal;\n"
        + "   attribute vec4 aVertexColor;\n"
        + "   attribute vec2 aVertexTextureCoords;\n"
        /* matrices */
        + "   uniform mat4 uMVMatrix;\n"
        + "   uniform mat4 uPMatrix;\n"
        + "   uniform mat4 uNMatrix;\n"
        /* lights */
        + "   uniform bool uTranslateLights;\n"
        + "   uniform vec3 uLightPosition[NUM_LIGHTS];\n"
        /* varyings */
        + "   varying vec3 vNormal;\n"
        + "   varying vec3 vLightRay[NUM_LIGHTS];\n"
        + "   varying vec3 vEye[NUM_LIGHTS];\n"
        + "   varying vec2 vTextureCoord;\n"

        + "   void main(void) {\n"

        + "        vec4 c = aVertexColor;\n"
        + "        vec4 vertex = uMVMatrix * vec4(aVertexPosition, 1.0);\n" //coordenadas de vista
        + "        vNormal = vec3(uNMatrix * vec4(aVertexNormal, 1.0));\n" //normal para la diferencia de vectores
        + "        vec4 lightPosition = vec4(0.0);\n"

        + "        if (uTranslateLights){ "
        + "            for(int i=0; i < NUM_LIGHTS; i++){ "
        + "              lightPosition =   uMVMatrix * vec4(uLightPosition[i], 1.0);\n"
        + "              vLightRay[i] = vertex.xyz - lightPosition.xyz;\n"
        + "              vEye[i] = -vec3(vertex.xyz);\n"
        + "            }\n"
        + "        }\n"

        + "        else {\n"
        + "           for(int i=0; i < NUM_LIGHTS; i++){\n"
        + "             lightPosition = vec4(uLightPosition[i], 1.0);\n"
        + "             vLightRay[i] = vertex.xyz - lightPosition.xyz;\n"
        + "             vEye[i] = -vec3(vertex.xyz);\n"
        + "           }\n"
        + "       }\n"
        + "       gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n" //pasa a 2D, multiplicando por el vertice original
        + "       vTextureCoord = aVertexTextureCoords;\n" //texturas
        + "   }\n"
  },

  "fragment" : {
    'type' : "x-shader/x-fragment",
    'content' : "#ifdef GL_ES\n"
  + "precision highp float;\n"
  + "#endif\n"

  //Light uniforms
  + "  const int NUM_LIGHTS =" + Lights.setNumLights() + ";\n"
  + "  uniform vec3  uLa[NUM_LIGHTS];\n"   //ambient
  + "  uniform vec3  uLd[NUM_LIGHTS];\n"   //diffuse
  + "  uniform vec3  uLs[NUM_LIGHTS];\n"   //specular
  + "  uniform vec3  uLightPosition[NUM_LIGHTS];\n"

   //Material uniforms
  + "  uniform vec3  uKa;\n"   //ambient
  + "  uniform vec3  uKd;\n"   //diffuse
  + "  uniform vec3  uKs;\n"   //specular
  + "  uniform float uNs;\n"   //specular coefficient
  + "  uniform float d;\n"    //Opacity
  + "  uniform int   illum;\n" //Illumination mode

  + "  uniform bool  uWireframe;\n" //wireframe
  + "  uniform bool  uTextures;\n" //wireframe
  + "  uniform sampler2D uSampler;\n" //texturas

  /* varying */
  + "  varying vec3 vNormal;\n"
  + "  varying vec3 vLightRay[NUM_LIGHTS];\n"
  + "  varying vec3 vEye[NUM_LIGHTS];\n"
  + "  varying vec2 vTextureCoord;\n"

  + "  float calculateAttenuation(in vec3 ray){\n"
  + "      float dist = length(ray);\n"
  + "      return (1.0 / (0.1 * dist));\n"
  + "  }\n"

  + "  void main(void) {\n"
  + "      if (uWireframe || illum == 0){\n"
  + "          gl_FragColor = vec4(uKd,d);\n"
  + "          return;\n"
  + "      }\n"

  + "     vec3 COLOR = vec3(0.0,0.0,0.0);\n"
  + "     vec3 N =  normalize(vNormal);\n"
  + "     vec3 L =  vec3(0.0,0.0,0.0);\n"
  + "     vec3 E =  vec3(0.0,0.0,0.0);\n"
  + "     vec3 R =  vec3(0.0,0.0,0.0);\n"
  + "     vec3 deltaRay = vec3(0.0);\n"
  + "     const int  lsize = 2;\n"
  + "     const float step = 0.25;\n"
  + "     const float inv_total = 1.0/((float(lsize*lsize) + 1.0)*(float(lsize*lsize) + 1.0));\n"  //how many deltaRays

  + "     float dx = 0.0;\n"
  + "     float dz = 0.0;\n"
  + "     float LT = 0.0;\n"

  + "     if (illum == 1){\n"
  + "          for(int i = 0; i < NUM_LIGHTS; i++){\n"
  + "              L = normalize(vLightRay[i]);\n"
  + "              N = normalize(vNormal);\n"
  + "              COLOR += (uLa[i] * uKa) + (uLd[i] * uKd * clamp(dot(N, -L),0.0,1.0));\n"
  + "          }\n"

  + "       if (uTextures){\n"
  + "         gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n"
  + "       } else {\n"
  + "         gl_FragColor =  vec4(COLOR,d);\n"
  + "       }\n"
  + "       return;\n"
  + "     }\n"

  + "     if (illum == 2){\n"
  + "          for(int i = 0; i < NUM_LIGHTS; i++){\n"

  + "              E = normalize(vEye[i]);\n"
  + "              L = normalize(vLightRay[i]);\n"
  + "              R = reflect(L, N);\n"
  + "              COLOR += (uLa[i] * uKa);\n"
  + "              COLOR += (uLd[i] * uKd * clamp(dot(N,-L),0.0,1.0));\n"// * calculateAttenuation(vLightRay[i]));
  + "              COLOR += (uLs[i] * uKs * pow( max(dot(R, E), 0.0), uNs) * 4.0);\n"
  + "          }\n"
  + "       if (uTextures){\n"
  + "         gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n"
  + "       } else {\n"
  + "         gl_FragColor = vec4(COLOR,d);\n"
  + "       }\n"
  + "       return;\n"
  + "     }\n"
  + "  }\n"
  }
}

var Program = {
  //init Program
  attributeList : ["aVertexPosition", "aVertexNormal", "aVertexColor", "aVertexTextureCoords"],
  uniformList   : [	"uPMatrix", "uMVMatrix", "uNMatrix", "uLightPosition", "uWireframe",
                    "uLa", "uLd", "uLs", "uKa", "uKd", "uKs", "uNs", "d", "illum", "uTranslateLights",
                    "uSampler", "uTextures"
                  ],

    getShader : function(gl, id) {
        var str  = Shaders[id]['content'];
        var type = Shaders[id]['type'];

        var shader, message;
        if (type == "x-shader/x-fragment") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
            message = 'Fragment Shader';
        } else if (type == "x-shader/x-vertex") {
            shader = gl.createShader(gl.VERTEX_SHADER);
            message = 'Vertex Shader';
        } else {
            return null;
        }


        gl.shaderSource(shader, str);
        gl.compileShader(shader);


        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert('There was a problem with the ' + message +':\n\n'+ gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    },

    load : function() {
     var fragmentShader          = Program.getShader(gl, "fragment");
     var vertexShader            = Program.getShader(gl, "vertex");

     prg = gl.createProgram();
     gl.attachShader(prg, vertexShader);
     gl.attachShader(prg, fragmentShader);

     //taken from https://developer.mozilla.org/en-US/docs/Web/WebGL/WebGL_best_practices (!)
     gl.bindAttribLocation(prg, 0 , "aVertexPosition");
     gl.linkProgram(prg);

     if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
      alert("Could not initialise shaders");
     }

     gl.useProgram(prg);
     gl.enableVertexAttribArray(0);

  	 this.setAttributeLocations(this.attributeList);
  	 this.setUniformLocations(this.uniformList);
    },

	setAttributeLocations: function (attrList){

		for(var i=0, max = attrList.length; i <max; i+=1){
			this[attrList[i]] = gl.getAttribLocation(prg, attrList[i]);
		}

	},

	setUniformLocations: function (uniformList){

		for(var i=0, max = uniformList.length; i < max; i +=1){
			this[uniformList[i]] = gl.getUniformLocation(prg, uniformList[i]);
		}
	},

    getUniform: function (uniformLocation){
        return gl.getUniform(prg, uniformLocation);
    }
};

'use strict'

function Mesh(filename, alias, texture) {
  this.filename = filename;
  this.alias   = alias;
  this.ambient = null;
  this.diffuse = null;
  this.specular = null;
  this.wireframe = null;
  this.vertices = null;
  this.indices = null;
  this.scalars = null;
  this.texture_coords = null;
  this.texture = texture || null;
  this.image = null;
  this.tbo = null;
  this.cbo = null;
  this.nbo = null;
  this.ibo = null;
  this.vbo = null;
  this.remote = null;

  //default values
  this.Ni = 1.00000;
  this.Ka = [0.00000,0.00000,0.00000]; //color ambient
  this.d = 1.00000;
  this.Kd = [0.8,0.80842,0.64000]; //color diffuse
  this.illum = 2;
  this.Ks = [0.94944,0.94944,0.94944]; //color specular
  this.Ns = 96.07843;

  this.position = null;
  this.size     = null;
  this.rotation = null;
}

Mesh.prototype.getAlias = function() {
  return this.alias;
};

Mesh.prototype.getFilename = function() {
  return this.filename;
};

Mesh.prototype.setSpecularColor = function(r,g,b) {
  this.Kd = Color.rgb2decimal(r,g,b);
};

Mesh.prototype.getPosition = function() {
  return this.position;
};

Mesh.prototype.setPosition = function(position) {
  this.position = position;
};

Mesh.prototype.getRotation = function() {
  return this.rotation;
};

Mesh.prototype.setRotation = function(rotation) {
  this.rotation = rotation;
};

Mesh.prototype.setSize = function(size) {
  this.size = size;
};

Mesh.prototype.getSize = function() {
  return this.size;
};

Mesh.prototype.setSpecular = function(value) {
  this.Ns = value;
};

Mesh.prototype.getAttributes = function() {
  var attributes = {
    "Ni" : this.Ni,
    "Ka" : this.Ka,
    "d"  : this.d,
    "Kd" : this.Kd,
    "illum" : this.illum,
    "Ks" : this.Ks,
    "Ns" : this.Ns,
    "texture": this.texture
  };
  return attributes;
};

Mesh.prototype.defaultCoords = function() {
  return [0.0, 0.0,
					1.0, 0.0,
					1.0, 1.0,
					0.0, 1.0,
					1.0, 0.0,
					1.0, 1.0,
					0.0, 1.0,
					0.0, 0.0,
					0.0, 1.0,
					0.0, 0.0,
					1.0, 0.0,
					1.0, 1.0,
					1.0, 1.0,
					0.0, 1.0,
					0.0, 0.0,
					1.0, 0.0,
					1.0, 0.0,
					1.0, 1.0,
					0.0, 1.0,
					0.0, 0.0,
					0.0, 0.0,
					1.0, 0.0,
					1.0, 1.0,
					0.0, 1.0];
};

Mesh.prototype.draw = function() {
  try{
    var object = Scene.getObject(this.getAlias());
    gl.uniform1i(Program.uWireframe, false);
    if (object.texture_coords) {
      gl.uniform1i(Program.uTextures, true);
    } else {
      gl.uniform1i(Program.uTextures, false);
    }
    gl.uniform3fv(Program.uKa, object.Ka);
    gl.uniform3fv(Program.uKd, object.Kd);
    gl.uniform3fv(Program.uKs, object.Ks);
    gl.uniform1f(Program.uNs, object.Ns);
    gl.uniform1f(Program.d, object.d);
    gl.uniform1i(Program.illum, object.illum);

    gl.enableVertexAttribArray(Program.aVertexPosition);
    gl.disableVertexAttribArray(Program.aVertexNormal);
    gl.disableVertexAttribArray(Program.aVertexColor);

    gl.bindBuffer(gl.ARRAY_BUFFER, object.vbo);
    gl.vertexAttribPointer(Program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(Program.aVertexPosition);


   if(object.d < 1.0){  //tweaking parameters here
         gl.uniform1f(Program.d, 0.14);
        }

    /* texture */
    if (object.texture_coords) {
      gl.enableVertexAttribArray(Program.aVertexTextureCoords);
      gl.bindBuffer(gl.ARRAY_BUFFER, object.tbo);
      gl.vertexAttribPointer(Program.aVertexTextureCoords, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, object.texture.texture);
      gl.uniform1i(Program.uSampler, 0);

    };

    /* wireframe */
    if(!object.wireframe){
      gl.bindBuffer(gl.ARRAY_BUFFER, object.nbo);
      gl.vertexAttribPointer(Program.aVertexNormal, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(Program.aVertexNormal);


          }
          else{
              gl.uniform1i(Program.uWireframe, true);
          }

          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.ibo);

    if (object.wireframe){
              gl.drawElements(gl.LINES, object.indices.length, gl.UNSIGNED_SHORT,0);
          }
          else{
              gl.drawElements(gl.TRIANGLES, object.indices.length, gl.UNSIGNED_SHORT,0);
          }

          gl.bindBuffer(gl.ARRAY_BUFFER, null);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

  }
  catch(err){
      console.error(err.description);
    }
};

Mesh.prototype.beginDraw = function(transforms) {
  console.log('beginDraw of' + this.alias);
  this.draw();
}

Mesh.prototype.endDraw = function() {
  console.log('endDraw of ' + this.alias);
};

var Scene = {
    objects : [],

    getObject : function(alias){
        for(var i=0, max = Scene.objects.length; i < max; i++){
            if (alias == Scene.objects[i].alias) return Scene.objects[i];
        }
        return null;
    },

    loadObject : function(filename,alias,attributes,aubengine) {
        var request = new XMLHttpRequest();
        console.info('Requesting ' + filename);
        request.open("GET",filename);

        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if(request.status == 404) {
                    console.info(filename + ' does not exist');
                }
                else {
                    var o = JSON.parse(request.responseText);
                    o.alias = (alias==null)?'none':alias;
                    o.remote = true;
                    Scene.addObject(o,attributes,aubengine);
                }
            }
        }
        request.send();
    },

    loadObjectByParts: function(path, alias, parts){
        for(var i = 1;i <= parts; i++){
            var partFilename =  path+''+i+'.json';
            var partAlias = alias+''+i;
            Scene.loadObject(partFilename,partAlias);
        }
    },

    addObject : function(object, attributes, aubengine) {

        //deffault object light
        if (object.wireframe        === undefined)    {   object.wireframe        = false;            }
        if (object.texture          === undefined)    {   object.texture          = false;            }
        if (object.diffuse          === undefined)    {   object.diffuse          = [1.0,1.0,1.0,1.0];}
        if (object.ambient          === undefined)    {   object.ambient          = [0.2,0.2,0.2,1.0];}
        if (object.specular         === undefined)    {   object.specular         = [1.0,1.0,1.0,1.0];}
        if (object.texture_coords) {
          gl.uniform1i(Program.uTextures, true);
        } else {
          gl.uniform1i(Program.uTextures, false);
        }
        //set attributes
       for(var key in attributes){
			     object[key] = attributes[key];
        }

        var vertexBufferObject = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(object.vertices), gl.STATIC_DRAW);

        var normalBufferObject = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, normalBufferObject);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Configuration.calculateNormals(object.vertices, object.indices)), gl.STATIC_DRAW);

       var colorBufferObject;
       if (object.scalars){
            colorBufferObject = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBufferObject);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(object.scalars), gl.STATIC_DRAW);
            object.cbo = colorBufferObject;
        }

		var textureBufferObject, tangentBufferObject;
		if (object.texture_coords){
			// console.info('the object '+object.alias+' has texture coordinates');
			textureBufferObject = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, textureBufferObject);

			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(object.texture_coords), gl.STATIC_DRAW);
			object.tbo = textureBufferObject;

      tangentBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, tangentBufferObject);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Configuration.calculateTangents(object.vertices, object.texture_coords, object.indices)), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER,null);
      object.tanbo = tangentBufferObject;
		}
        var indexBufferObject = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBufferObject);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(object.indices), gl.STATIC_DRAW);

        object.vbo = vertexBufferObject;
        object.ibo = indexBufferObject;
        object.nbo = normalBufferObject;

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ARRAY_BUFFER,null);

        Scene.objects.push(object);

        if (object.remote){
            console.info(object.alias + ' has been added to the scene [Remote]');
         }
         else {
            console.info(object.alias + ' has been added to the scene [Local]');
         }
    //  
		//  if (aubengine != undefined) {
		// 	aubengine.draw();
    //   };
    },


	removeObject: function(objectName){
		var o = this.getObject(objectName);
		var idx = this.objects.indexOf(o);
		this.objects.splice(idx,1);
	},

	renderFirst: function(objectName){
		var o = this.getObject(objectName);
		var idx = this.objects.indexOf(o);
		if (idx == 0) return;
		this.objects.splice(idx, 1);
		this.objects.splice(0,0,o);
		console.info('render order:' + this.renderOrder());
	},

	renderLast: function(objectName){
		var o = this.getObject(objectName);
		var idx = this.objects.indexOf(o);
		if (idx == 0) return;
		this.objects.splice(idx, 1);
		this.objects.push(o);
		console.info('render order:' + this.renderOrder());
	},

	renderSooner : function(objectName){
		var o = this.getObject(objectName);
		var idx = this.objects.indexOf(o);
		if (idx == 0) return; //can't bring it forward further than to the first place
		this.objects.splice(idx,1);
		this.objects.splice(idx-1,0,o);
		console.info('render order:' + this.renderOrder());
	},

	renderLater: function(objectName){
		var o = this.getObject(objectName);
		var idx = this.objects.indexOf(o);
		if (idx == this.objects.length-1) return; //can't send it back further than to the last place
		this.objects.splice(idx,1);
		this.objects.splice(idx+1,0,o);
		console.info('render order:' + this.renderOrder());
	},

	renderOrder: function(){
		var s = '[ ';
		for(var i =0, max=this.objects.length; i< max; i++){
			s += this.objects[i].alias + ' ';
		}
		s += ']';
		return s;
	}
}

var Axis = {
    alias           : 'axis',
    dim             : 10,
    vertices        : [-10,0.0,0.0, 10,0.0,0.0, 0.0,-10/2,0.0,
                        0.0,10/2,0.0, 0.0,0.0,-10, 0.0,0.0,10],
    indices         : [0,1,2,3,4,5],
    colors          : [1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1],
    wireframe       : true,
    perVertexColor  : true,
    build           : function(d){
                        if (d) Axis.dim = d;
                        Axis.vertices = [-d,0.0,0.0, d,0.0,0.0, 0.0,-d/2,0.0,
                                        0.0,d/2,0.0, 0.0,0.0,-d, 0.0,0.0,d];
                      }
}

var Floor = {
    alias       : 'floor',
    wireframe   : true,
    dim         : 50,
    lines       : 50,
    vertices    : [],
    indices     : [],
    diffuse : [0.7,0.7,0.7,1.0],
    build : function(d,e){
                    if (d) Floor.dim = d;
                    if (e) Floor.lines = 2*Floor.dim/e;
                    var inc = 2*Floor.dim/Floor.lines;
                    var v = [];
                    var i = [];

                    for(var l=0;l<=Floor.lines;l++){
                        v[6*l] = -Floor.dim; 
                        v[6*l+1] = 0;
                        v[6*l+2] = -Floor.dim+(l*inc);
                        
                        v[6*l+3] = Floor.dim;
                        v[6*l+4] = 0;
                        v[6*l+5] = -Floor.dim+(l*inc);
                        
                        v[6*(Floor.lines+1)+6*l] = -Floor.dim+(l*inc); 
                        v[6*(Floor.lines+1)+6*l+1] = 0;
                        v[6*(Floor.lines+1)+6*l+2] = -Floor.dim;
                        
                        v[6*(Floor.lines+1)+6*l+3] = -Floor.dim+(l*inc);
                        v[6*(Floor.lines+1)+6*l+4] = 0;
                        v[6*(Floor.lines+1)+6*l+5] = Floor.dim;
                        
                        i[2*l] = 2*l;
                        i[2*l+1] = 2*l+1;
                        i[2*(Floor.lines+1)+2*l] = 2*(Floor.lines+1)+2*l;
                        i[2*(Floor.lines+1)+2*l+1] = 2*(Floor.lines+1)+2*l+1;        
                    }
                    Floor.vertices = v;
                    Floor.indices = i;
              }
}





'use strict';

var Color = {
  hex2rgb: function(hex, opacity) {
    var hexStr = hex.replace('#','');
    var r = parseInt(hexStr.substring(0,2), 16);
    var g = parseInt(hexStr.substring(2,4), 16);
    var b = parseInt(hexStr.substring(4,6), 16);
    return [r/255,g/255,b/255,opacity];
  },

  rgb2hex: function(rgb) {
    return "#" +
     ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2);
  },

  rgb2decimal: function(r,g,b) {
    return [r/255, g/255, b/255];

  }
}

var CAMERA_ORBITING_TYPE = 1;
var CAMERA_TRACKING_TYPE = 2;

function Camera(alias, t, tFocus, tAzimuth, tElevation) {
    //default parameters
    this.alias      = alias;
    this.matrix     = mat4.create();
    this.up         = vec3.create();
    this.right      = vec3.create();
    this.normal     = vec3.create();
    this.position   = vec3.create();
    this.focus      = vec3.create();
    this.azimuth    = 0.0;
    this.elevation  = 0.0;
    this.type       = t;
    this.steps      = 0;
    this.home       = vec3.create();

    //update in drawing
    // this.tHome      = tHome;
    this.tHome      = vec3.create();
    this.tFocus     = tFocus;
    this.tAzimuth   = tAzimuth;
    this.tElevation = tElevation;
}

Camera.prototype.isMain = function() {
  return this.main;
};

Camera.prototype.setType = function(t) {

    this.type = t;

    if (t != CAMERA_ORBITING_TYPE && t != CAMERA_TRACKING_TYPE) {
        alert('Wrong Camera Type!. Setting Orbitting type by default');
        this.type = CAMERA_ORBITING_TYPE;
    }
};

Camera.prototype.getAlias = function() {
  return this.alias;
};

Camera.prototype.goHome = function(h) {
    if (h != null){
        this.home = h;
    }

    this.setPosition(this.home);
    this.setAzimuth(0);
    this.setElevation(0);
    this.steps = 0;
}

Camera.prototype.dolly = function(s){
    var c = this;

    var p =  vec3.create();
    var n = vec3.create();

    p = c.position;

    var step = s - c.steps;

    vec3.normalize(c.normal,n);

    var newPosition = vec3.create();

    if(c.type == CAMERA_TRACKING_TYPE){
        newPosition[0] = p[0] - step*n[0];
        newPosition[1] = p[1] - step*n[1];
        newPosition[2] = p[2] - step*n[2];
    }
    else{
        newPosition[0] = p[0];
        newPosition[1] = p[1];
        newPosition[2] = p[2] - step;
    }

    c.setPosition(newPosition);
    c.steps = s;
}

Camera.prototype.setHome = function(home) {
  vec3.set(home, this.tHome);
};

Camera.prototype.setPosition = function(p){
    vec3.set(p, this.position);
    vec3.set(p, this.tHome);
    this.update();
}

Camera.prototype.setFocus = function(f){
	vec3.set(f, this.focus);
	this.update();
}

Camera.prototype.setAzimuth = function(az){
    this.changeAzimuth(az - this.azimuth);
}

Camera.prototype.changeAzimuth = function(az){
    var c = this;
    c.azimuth +=az;

    if (c.azimuth > 360 || c.azimuth <-360) {
		c.azimuth = c.azimuth % 360;
	}
    c.update();
}

Camera.prototype.setElevation = function(el) {
    this.changeElevation(el - this.elevation);
}

Camera.prototype.changeElevation = function(el) {
    var c = this;

    c.elevation +=el;

    if (c.elevation > 360 || c.elevation <-360) {
		c.elevation = c.elevation % 360;
	}
    c.update();
}

Camera.prototype.calculateOrientation = function(){
	var m = this.matrix;
    mat4.multiplyVec4(m, [1, 0, 0, 0], this.right);
    mat4.multiplyVec4(m, [0, 1, 0, 0], this.up);
    mat4.multiplyVec4(m, [0, 0, 1, 0], this.normal);
}

Camera.prototype.update = function() {
	mat4.identity(this.matrix);

	this.calculateOrientation();

    if (this.type == CAMERA_TRACKING_TYPE){
        mat4.translate(this.matrix, this.position);
        mat4.rotateY(this.matrix, this.azimuth * Math.PI/180);
        mat4.rotateX(this.matrix, this.elevation * Math.PI/180);
    }
    else {
        var trxLook = mat4.create();
        mat4.rotateY(this.matrix, this.azimuth * Math.PI/180);
        mat4.rotateX(this.matrix, this.elevation * Math.PI/180);
        mat4.translate(this.matrix,this.position);
    }

    this.calculateOrientation();

    if(this.type == CAMERA_TRACKING_TYPE){
        mat4.multiplyVec4(this.matrix, [0, 0, 0, 1], this.position);
    }
}

Camera.prototype.getViewTransform = function(){
    var m = mat4.create();
    mat4.inverse(this.matrix, m);
    return m;
};

//draws the main camera
Camera.prototype.draw = function() {
  this.goHome(this.tHome);
  this.setFocus(this.tFocus);
  this.setAzimuth(this.tAzimuth);
  this.setElevation(this.tElevation);
};

Camera.prototype.beginDraw = function() {
  this.draw();
  console.log('beginDraw of ' + this.alias);
};

Camera.prototype.endDraw = function() {
  console.log('endDraw of ' + this.alias);
};

var Cameras = {
  list : [],
  add : function(camera, position){
		if (!(camera instanceof Camera)){
			alert('the parameter is not a light');
			return;
		}
    camera.setPosition(position);
		this.list.push(camera);
	},

	getArray: function(type) {
		var a = [];
		for(var i = 0, max = this.list.length; i < max; i+=1){
			a = a.concat(this.list[i][type]);
		}
		return a;
	},

	get: function(idx){
		if ((typeof idx == 'number') && idx >= 0 && idx < this.list.length){
			return this.list[idx];
		}
		else if (typeof idx == 'string'){
			for(var i=0, max = this.list.length; i < max; i+=1){
				if (this.list[i].alias == idx) return this.list[i];
			}
			throw 'Camera ' + idx + ' does not exist';
		}
		else {
			throw 'Unknown parameter';
		}
	},

	getNumCameras: function() {
		if (this.list.length <= 0) return 1
		else return this.list.length
	}
}

/**
* Camera Interactor
*
* This object listens for mouse and keyboard events on the canvas, then, it interprets them and sends the intended instruction to the camera
*/
function CameraInteractor(camera,canvas){

    this.camera = camera;
    this.canvas = canvas;
    this.update();

    this.dragging = false;
    this.picking = false;
    this.x = 0;
    this.y = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.button = 0;
    this.ctrl = false;
    this.key = 0;

    this.MOTION_FACTOR = 10.0;
    this.dloc = 0;
    this.dstep = 0;

	this.picker = null;

}

CameraInteractor.prototype.setPicker = function(p){
	this.picker = p;
}

CameraInteractor.prototype.get2DCoords = function(ev){
	var x, y, top = 0, left = 0, obj = this.canvas;

	while (obj && obj.tagName != 'BODY') {
		top += obj.offsetTop;
		left += obj.offsetLeft;
		obj = obj.offsetParent;
	}

    left += window.pageXOffset;
    top  += window.pageYOffset;

	x = ev.clientX - left;
	y = c_height - (ev.clientY - top);

	return {x:x,y:y};
}

CameraInteractor.prototype.onMouseUp = function(ev){
	this.dragging = false;

    if (!ev.shiftKey){
        this.picking = false;
        if(this.picker) { this.picker.stop(); }
    }
}

CameraInteractor.prototype.onMouseDown = function(ev){
    this.dragging = true;
    this.x = ev.clientX;
	this.y = ev.clientY;
	this.button = ev.button;
	this.dstep = Math.max(this.camera.position[0],this.camera.position[1],this.camera.position[2])/100;

    if (this.picker == null) return;

    var coords = this.get2DCoords(ev);
    this.picking = this.picker.find(coords);

    if (this.picking){
        var count = this.picker.plist.length;
        var message = count==1?count+' object has been selected': count+' objects have been selected';
        $('#title-id').html(message);
    }
    else{
        this.picker.stop();
        $('#title-id').html('Please select an object and drag it. (Alt key drags on the camera axis)');
    }
}

CameraInteractor.prototype.onMouseMove = function(ev){
	this.lastX = this.x;
	this.lastY = this.y;
	this.x = ev.clientX;
    this.y = ev.clientY;

	if (!this.dragging) return;


	this.ctrl = ev.ctrlKey;
	this.alt = ev.altKey;
	var dx = this.x - this.lastX;
	var dy = this.y - this.lastY;

    if (this.picking && this.picker.moveCallback){
        this.picker.moveCallback(this,dx,dy);
        return;
    }

	if (this.button == 0) {
		if(this.alt){
			this.dolly(dy);
		}
		else{
			this.rotate(dx,dy);
		}
	}
}

CameraInteractor.prototype.onKeyDown = function(ev){
    var c = this.camera;

	this.key = ev.keyCode;
	this.ctrl = ev.ctrlKey;

	if (!this.ctrl){
		if (this.key == 38){
			c.changeElevation(10);
		}
		else if (this.key == 40){
			c.changeElevation(-10);
		}
		else if (this.key == 37){
			c.changeAzimuth(-10);
		}
		else if (this.key == 39){
			c.changeAzimuth(10);
		}
        else if (this.key == 87) {  //w
            if(fovy) fovy+=5;
            console.info('FovY:'+fovy);
        }
        else if (this.key == 78) { //n
            if(fovy) fovy-=5;
            console.info('FovY:'+fovy);
        }

	}
}

CameraInteractor.prototype.onKeyUp = function(ev){
    if (ev.keyCode == 17){
		this.ctrl = false;
	}
}

CameraInteractor.prototype.update = function(){
    var self = this;
	var canvas = this.canvas;


	canvas.onmousedown = function(ev) {
		self.onMouseDown(ev);
    }

    canvas.onmouseup = function(ev) {
		self.onMouseUp(ev);
    }

	canvas.onmousemove = function(ev) {
		self.onMouseMove(ev);
    }

	window.onkeydown = function(ev){
		self.onKeyDown(ev);
	}

	window.onkeyup = function(ev){
		self.onKeyUp(ev);
	}
}

CameraInteractor.prototype.dolly = function(value){
 	if (value>0){
 		this.dloc += this.dstep;
 	}
 	else{
 		this.dloc -= this.dstep;
 	}
	this.camera.dolly(this.dloc);
}

CameraInteractor.prototype.rotate = function(dx, dy){


	var camera = this.camera;
	var canvas = this.canvas;

	var delta_elevation = -20.0 / canvas.height;
	var delta_azimuth   = -20.0 / canvas.width;

	var nAzimuth = dx * delta_azimuth * this.MOTION_FACTOR;
	var nElevation = dy * delta_elevation * this.MOTION_FACTOR;

	camera.changeAzimuth(nAzimuth);
	camera.changeElevation(nElevation);
}


function SceneTransforms(c){
	this.stack = [];
	this.camera = c;
	this.mvMatrix    = mat4.create();    // modelview
	this.pMatrix     = mat4.create();    // projection
	this.nMatrix     = mat4.create();    // normal
};


SceneTransforms.prototype.calculateModelView = function() {
	this.mvMatrix = this.camera.getViewTransform();
};

SceneTransforms.prototype.calculateNormal = function(){
    mat4.identity(this.nMatrix);
    mat4.set(this.mvMatrix, this.nMatrix);
    mat4.inverse(this.nMatrix);
    mat4.transpose(this.nMatrix);
};

SceneTransforms.prototype.calculatePerspective = function(){
    mat4.identity(this.pMatrix);
    mat4.perspective(30, c_width / c_height, 0.1, 1000.0, this.pMatrix);
};


SceneTransforms.prototype.init = function(){
    this.calculateModelView();
    this.calculatePerspective();
    this.calculateNormal();
};


//resize screen
SceneTransforms.prototype.updatePerspective = function(){
    mat4.perspective(30, c_width / c_height, 0.1, 1000.0, this.pMatrix);
};


SceneTransforms.prototype.setMatrixUniforms = function() {
	this.calculateNormal();
    gl.uniformMatrix4fv(Program.uMVMatrix, false, this.mvMatrix);
    gl.uniformMatrix4fv(Program.uPMatrix, false, this.pMatrix);
    gl.uniformMatrix4fv(Program.uNMatrix, false, this.nMatrix);
};


SceneTransforms.prototype.push = function() {
	var memento =  mat4.create();
	mat4.set(this.mvMatrix, memento);
	this.stack.push(memento);
};

SceneTransforms.prototype.pop = function() {
	if(this.stack.length == 0) return;
	this.mvMatrix  =  this.stack.pop();
};

'use strict';

function NodeTree(entity, father, children) {
    this.entity    = entity   || '';
    this.children  = children || [];

    if (father) father.addChild(this);
    else this.father = '';
  }

  NodeTree.prototype.getFather = function() {
    return this.father;
  };

  NodeTree.prototype.setFather = function(father) {
    if (father instanceof NodeTree) this.father = father;
    else console.log('This is not a node');
  }

  NodeTree.prototype.getEntity = function() {
    return this.entity;
  }

  NodeTree.prototype.setEntity = function(entity) {
    if (entity instanceof Entity) this.entity = entity;
    else console.log('This is not an entity');
  }

  NodeTree.prototype.index = function() {
    if (!this.isRoot()) return this.father.children.indexOf(this);
  }

  NodeTree.prototype.isRoot = function() {
    return (this.father == '');
  };

  NodeTree.prototype.childrenNumber = function() {
    return this.children.length;
  };

  NodeTree.prototype.hasSibling = function() {
    return (this.father.existsChild(this.father.getChild(this.index() +1 )));
  }

  NodeTree.prototype.nextSibling = function() {
    return ((!this.isRoot()) && (this.hasSibling())) ? this.father.getChild(this.index() +1) : null;
  };

  NodeTree.prototype.addChild = function(child) {
    child.setFather(this);
    this.children.push(child);
  };

  NodeTree.prototype.newChild = function() {
    return this.addChild(new NodeTree('', this, []));
  };

  NodeTree.prototype.getChild = function(index) {
    return (this.existsChild(this.children[index])) ? this.children[index] : null;
  };

  NodeTree.prototype.firstChild = function() {
    return this.getChild(0);
  };

  NodeTree.prototype.lastChild = function() {
    return this.getChild(this.childrenNumber() -1);
  };

  NodeTree.prototype.removeChild = function(child) {
    (this.existsChild(child)) ? this.children.splice(this.index(), 1) : false;
  };

  NodeTree.prototype.removeChildren = function() {
    this.children = [];
  };

  NodeTree.prototype.delete = function() {
    this.father.removeChild(this);
  };

  NodeTree.prototype.existsChild = function(child) {
    return (this.children.indexOf(child) != -1);
  };

  NodeTree.prototype.getChildren = function() {
    return this.children;
  };

  NodeTree.prototype.draw = function(transforms) {
    this.getEntity().beginDraw(transforms);
    this.getChildren().forEach(function(child) {
      child.draw(transforms);
    })
    this.getEntity().endDraw(transforms);
  };

  NodeTree.prototype.save = function(aubengine) {
    var node = this;
    if (node.getEntity() instanceof Light) Lights.add(node.getEntity(), node.getFather().getEntity().getPosition());
      else if (node.getEntity() instanceof Camera) Cameras.add(node.getEntity(), node.getFather().getEntity().getPosition());
      else if (node.getEntity() instanceof Mesh) {
        Scene.loadObject(node.getEntity().getFilename(),
                         node.getEntity().getAlias(),
                         node.getEntity().getAttributes(), aubengine);
      };
    node.getChildren().forEach(function(child) {
      child.save(aubengine);
    })
  };

'use strict';

function Tree() {
  this.root = new NodeTree();
  this.isDraw = false;
};

Tree.prototype.getRoot = function() {
  return this.root;
};

Tree.prototype.setDraw = function(draw) {
  this.isDraw = draw;
};

Tree.prototype.getDraw = function() {
  return this.isDraw;
};

Tree.prototype.draw = function(transforms) {
  this.getRoot().getChildren().forEach(function(child) {
    child.draw(transforms);
  });
};

Tree.prototype.save = function(aubengine) {
  this.getRoot().getChildren().forEach(function(child) {
    child.save(aubengine);
  });
};

Tree.prototype.saveEntities = function(aubengine, callback) {
  var self = this;
  this.save(self.getRoot().firstChild(), aubengine, callback);
};

var WEBGLAPP_RENDER      = undefined;
var WEBGLAPP_TIMER_ID    = -1;
var WEBGLAPP_RENDER_RATE = 16;

function Aubengine(canvas, tree) {
    this.interactor = null; //the camera interactor
    this.transforms = null;
    this.tree       = new Tree();

    gl = Configuration.getGLContext(canvas); //clobal context

    this.camera = null;
    this.canvas = canvas;
    //drawing loop
    initialTime = undefined;
    elapsedTime = undefined;
    this.frequency = 5;

}

Aubengine.prototype.getTree = function() {
  return this.tree;
};

Aubengine.prototype.getRoot = function() {
  return this.tree.getRoot();
};

Aubengine.prototype.getTransforms = function() {
  return this.transforms;
}

Aubengine.prototype.setUpEnvironment = function(color, opacity) {
  this.changeColor(color, opacity);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

  this.loadProgram();
};

Aubengine.prototype.changeColor = function(color, opacity) {
  var clearColor = Color.hex2rgb(color, opacity);
  gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
  gl.clearDepth(1.0);
};

Aubengine.prototype.createCamera = function(alias, focus, azimuth, elevation) {
  var    camera = new Camera(alias, CAMERA_ORBITING_TYPE, focus, azimuth, elevation);
  return camera;
};

Aubengine.prototype.setMainCamera = function(camera) {
  this.camera     = camera;
  this.interactor = new CameraInteractor(camera, this.canvas);
  this.transforms = new SceneTransforms(camera);

  transforms = this.transforms;
  interactor = this.interactor;
  transforms.init();

};

Aubengine.prototype.loadProgram = function() {
  Program.load();
}

Aubengine.prototype.createMesh = function(filename, alias, texture) {
  var mesh = new Mesh(filename, alias, texture);
  return mesh;
};


Aubengine.prototype.addFloor = function(visible) {
  Floor.build(80,2);
  Floor.Ka = [1,1,1];
  Floor.Kd = [0.6,0.6,0.6]
  Floor.Ks = [1,1,1];
  Floor.Ni = 1;
  Floor.Ns = 1;
  Floor.d = 1.0;
  Floor.illum = 1;
  Floor.visible = visible;
};

Aubengine.prototype.createLight = function(name, diffuse, ambient, specular) {
      if ((name == null) || (diffuse == null) || (ambient == null) || (specular == null)) {
        alert('Light can not be created! Wrong parameters.');
      } else {
        var light = new Light(name);
        light.setDiffuse(diffuse);
        light.setAmbient(ambient);
        light.setSpecular(specular);
      };

      return light;
};

Aubengine.prototype.createTransformation = function(name, position, size, rotation) {
  var transformation = new Transformation(name, position, size, rotation);
  return transformation;
};

Aubengine.prototype.addNode = function(father, node) {
  father.addChild(node);
};

Aubengine.prototype.createNode = function(entity) {
  var node = new NodeTree(entity);
  return node;
};

Aubengine.prototype.draw = function() {
  var self = this;
  gl.viewport(0, 0, c_width, c_height);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  self.transforms.updatePerspective();
  self.getTree().draw(self.transforms);
};
