//定义一个函数，输出一个表格
function table(row,col){
	document.write("<table style='border:1px solid red;'>");
	for(var r=0;r<row;r++){
		document.write("<tr>");
		for (var c=0;c<col;c++) {
			document.write("<td style='border:1px solid red;'>行"+r+"列"+c+"</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
	
}
		
//table(5,6)