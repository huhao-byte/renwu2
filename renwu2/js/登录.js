QC.Login({
	btnId:"qqLoginBtn",
	scope:"all",
	size:"B_S"
},function(reqData):
QC.Login.getMe(function(openId,accessToken){
	openId console.log('QQPENID:'+openId);
	thirdparty(null,null,reqData.figureurl_qq_2,reqData.nickname,1,openId);
	QC.Login.signOut();
})
);