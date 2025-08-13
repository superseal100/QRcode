function generateQR(){
  document.getElementById("qrcode").innerHTML = "";
	let data ="";
	data=document.getElementById("inputd1").value+","+document.getElementById("inputd2").value+","+document.getElementById("inputd3").value+",";
	let elements = document.getElementsByName("radio1");
	let len = elements.length;
	let checkValue ="";
	for (let i = 0; i < len; i++){
		if (elements.item(i).checked){
			checkValue = elements.item(i).value;
		}
	}
	data=data+checkValue+",";
	checkValue ="";
	elements = document.getElementsByName("radio2");
	len = elements.length;
	for (i = 0; i < len; i++){
		if (elements.item(i).checked){
			checkValue = elements.item(i).value;
		}
	}
	data=data+checkValue;
	var qrcode = new QRCode(document.getElementById('qrcode'), {
		text: data,
		width: 256,
		height: 256
	});
}
