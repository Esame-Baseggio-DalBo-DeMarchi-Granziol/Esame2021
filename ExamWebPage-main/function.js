
function requestData(_query_) {
    var data;
    var params = JSON.stringify({ query: _query_ });
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "data.php", false);
    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = this.responseText;
            data = JSON.parse(data);
        }
    }
    xhttp.send(params);
    return data;
}

function getData(dato, query) {
    var r = [];
    var temp = requestData(query);
    for (var i in temp) {
        r[i] = parseFloat(temp[i][dato]);
    }
    return r;
}




function getParameterURL(paramter) {
    let url = new URL(window.location.href);
    if (url.searchParams.has(paramter)) {

        return url.searchParams.get(paramter);
    }
}

