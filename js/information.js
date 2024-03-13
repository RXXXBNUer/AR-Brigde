$(()=>{
	function formatDate(inputDate) {
	    var year = inputDate.substring(0, 4);
	    var month = inputDate.substring(4, 6);
	    var day = inputDate.substring(6, 8);
	    var formattedDate = year + '-' + month + '-' + day;
	    return formattedDate;
	}
	ARB.informations.forEach((v, i)=>{
		$('#nameList').append(`
			<li>
				<span>`+(i+1)+`</span>
				<a href="article_detail/`+v.date+`.html">`+v.name+`</a>
				<span class="time">`+formatDate(v.date)+`</span>
			</li>
		`)
	})
	
})