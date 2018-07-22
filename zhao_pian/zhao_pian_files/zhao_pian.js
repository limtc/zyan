// Created by iWeb 3.0.1 local-build-20100116

function createMediaStream_id1()
{return IWCreateMediaCollection("file://localhost/Users/limtc/Sites/Zhao_Yan/zhao_pian/zhao_pian_files/rss.xml",true,255,["暂时没有照片","%d 张照片","%d 张照片"],["","%d 个剪辑","%d 个剪辑"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('file://localhost/Users/limtc/Sites/Zhao_Yan/zhao_pian',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget5'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('file://localhost/Users/limtc/Sites/Zhao_Yan/zhao_pian',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(272,204),new IWSize(272,49),new IWSize(309,268),27,27,0,new IWSize(110,92)),new IWPhotoFrame([IWCreateImage('zhao_pian_files/spiralboook_ul.png'),IWCreateImage('zhao_pian_files/spiralboook_top.png'),IWCreateImage('zhao_pian_files/spiralboook_ur.png'),IWCreateImage('zhao_pian_files/spiralboook_right.png'),IWCreateImage('zhao_pian_files/spiralboook_lr.png'),IWCreateImage('zhao_pian_files/spiralboook_bottom.png'),IWCreateImage('zhao_pian_files/spiralboook_ll.png'),IWCreateImage('zhao_pian_files/spiralboook_left.png')],null,1,1.000000,0.000000,10.000000,0.000000,19.000000,62.000000,49.000000,48.000000,72.000000,20.000000,1.000000,20.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget5',null,'widget6',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('zhao_pian_files/zhao_pianMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
