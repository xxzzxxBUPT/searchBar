/**
 * Created by xz on 2017/7/12.
 */
window.onload = function () {

    var wrap = document.getElementsByClassName("search-wrap")[0];
    var content = document.getElementsByClassName("search-content")[0];
    var cancelBtn = document.getElementsByClassName("search-cancel")[0];
    var deleteIcon = document.getElementsByClassName("search-icon-delete")[0];
    var table = document.getElementsByTagName("table")[0];
    var input = document.getElementsByTagName("input")[0];

    String.prototype.removeStr = function (str) {
        var self = this;
        var cl = self.split(' ');
        for (var i = 0; i < cl.length; i++) {
            if (cl[i] == str) {
                cl.splice(i, 1);
                break;
            }
        }
        return cl.join(" ");
    }

    genrerateTable();

    content.addEventListener('click', function () {
        wrap.className += ' focus';
        input.focus();
    })

    cancelBtn.addEventListener('click', function () {
        var trs = document.getElementsByTagName('tr');
        for(var tr of trs){
            tr.style.display = '';
        }
        input.value = '';
        var cls = wrap.className;
        wrap.className = cls.removeStr('focus');
    })

    deleteIcon.addEventListener('click',function (e) {
        var trs = document.getElementsByTagName('tr');
        for(var tr of trs){
            tr.style.display = '';
        }
        input.value = '';
        e.stopPropagation();
    })

    input.oninput = function () {
        var wds = input.value;
        var trs = document.getElementsByTagName('tr');
        for(var tr of trs){
            if(tr.parentNode.nodeName != "THEAD"){
                tr.style.display = 'none';
            }
        }
        var tds = document.getElementsByTagName('td');
        for(var td of tds){
            if(td.textContent.indexOf(wds) !== -1){
                //display为table-row 元素作为一个表格行来显示 如果为block 作为
                //块级元素显示，会有错误
                td.parentNode.style.display = 'table-row';
            }
        }
    }

    function genrerateTable() {
        var res = '<tbody>';
        for(var i = 0; i < 100; i++){
            res += '<tr>'
                +'<td>'+Math.floor(Math.random()*1000)+'</td>'
                +'<td>'+Math.floor(Math.random()*1000)+'</td>'
                +'<td>'+Math.floor(Math.random()*1000)+'</td>'
                +'</tr>';
        }
        res += '</tbody>';
        table.insertAdjacentHTML('beforeEnd',res);
    }
}