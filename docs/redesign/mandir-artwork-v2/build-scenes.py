import cv2, numpy as np, sys
R='/home/user/sanatan-art/public/art/redesign/'
M=sys.argv[3]+'/'
OUT=sys.argv[1]; SUF=''
W,H=853,1056; Y0=276
plate=cv2.imread(R+'mandir-offerings-v2/empty.webp')
plate=cv2.resize(plate,(W,H),interpolation=cv2.INTER_CUBIC)
s=W/504.0
# the empty shrine has a tiny leftover candle glint on the ledge; remove it
_b=[int(v*s) for v in (236,513,272,548)]
_sub=plate[_b[1]:_b[3],_b[0]:_b[2]]
_hsv=cv2.cvtColor(_sub,cv2.COLOR_BGR2HSV)
_m=cv2.dilate(((_hsv[...,2]>235)&(_hsv[...,1]<90)).astype(np.uint8)*255,np.ones((11,11),np.uint8))
plate[_b[1]:_b[3],_b[0]:_b[2]]=cv2.inpaint(_sub,_m,7,cv2.INPAINT_TELEA)
def rect_mask(boxes,feather):
    m=np.zeros((H,W),np.float32)
    for x0,y0,x1,y1 in boxes:
        m[int(y0*s):int(y1*s),int(x0*s):int(x1*s)]=1
    k=int(feather*s)|1
    return cv2.GaussianBlur(m,(k*2+1,k*2+1),k/2.5)
# areas replaced with the empty shrine: hanging bells + chains, lamp flames, whole lower ledge
CUT={'ram':531,'durga':530}
BASE=[(22,0,112,208),(392,0,482,208),(8,262,95,336),(410,262,500,336)]
masks={}
def mask_for(n):
    cut=CUT.get(n.split('-')[0],520)
    if cut not in masks:
        masks[cut]=rect_mask(BASE+[(0,cut,504,624)],9 if cut==520 else 5)[...,None]
    return masks[cut]
def kill_flame(c,box,v=205,sat=110):
    x0,y0,x1,y1=[int(v*s) for v in box]
    sub=c[y0:y1,x0:x1].astype(np.uint8)
    hsv=cv2.cvtColor(sub,cv2.COLOR_BGR2HSV)
    m=((hsv[...,2]>v)&(hsv[...,1]<sat)).astype(np.uint8)*255
    m=cv2.dilate(m,np.ones((9,9),np.uint8))
    out=cv2.inpaint(sub,m,5,cv2.INPAINT_TELEA)
    c[y0:y1,x0:x1]=out
    return c
names=sys.argv[2].split(',')
for n in names:
    g=cv2.imread(M+n+'.png'); base=n.split('-')[0]
    c=g[Y0:Y0+H,:W].astype(np.float32)
    if base=='ram': c=kill_flame(c.astype(np.uint8).copy(),(236,505,274,531)).astype(np.float32)
    else:
        y0,y1,x0,x1=[int(v*s) for v in ((517 if base=='durga' else 506),(536 if base=='durga' else 530),246,264)]
        w=x1-x0+6
        strip=c[y0:y1,x0-w:x1-w].copy()
        a=np.ones((y1-y0,x1-x0,1),np.float32); a=cv2.GaussianBlur(a,(1,1),0)
        c[y0:y1,x0:x1]=strip
    mask=mask_for(n)
    o=c*(1-mask)+plate.astype(np.float32)*mask
    cv2.imwrite(OUT+'/'+n+'.png',np.clip(o,0,255).astype(np.uint8))
