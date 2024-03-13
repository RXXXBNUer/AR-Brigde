$(()=>{
	function formatDateTime(inputDateTime) {
	    var formattedDateTime = inputDateTime.replace(/[- :\n]/g, '');
	    return formattedDateTime;
	}
	function findAdjacentElements(dateNumber, informations) {
	    for (var i = 0; i < informations.length; i++) {
	        if (informations[i].date === dateNumber) {
	            var prevIndex = (i === 0) ? (informations.length - 1) : (i - 1);
	            var nextIndex = (i === informations.length - 1) ? 0 : (i + 1);
	            return [informations[prevIndex], informations[nextIndex]];
	        }
	    }
	    return null;
	}
	var result = findAdjacentElements(formatDateTime($('.detailTime').html()), ARB.informations);
	if(result==null) {
		result = findAdjacentElements(formatDateTime($('.detailTime').html()), ARB.news);
	}
	$('.prevBox').append(`
		上一个：<a href='article_detail/`+result[0].date+`.html' title="`+result[0].name+`">`+result[0].name+`</a>
	`)
	$('.nextBox').append(`
		下一个：<a href='article_detail/`+result[1].date+`.html' title="`+result[1].name+`">`+result[1].name+`</a>
	`)
})