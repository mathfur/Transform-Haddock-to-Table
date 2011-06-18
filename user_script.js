// chromeのcontent_scriptとして使う
// メインとなるテーブル
alert("__START__");
var table = $("<table/>");
table.attr("border","2");
$("div.top").each(function(i,top_){
  // 挿入するテーブルのセル内データ
  var doc = $("div.doc",top_);
  var subs = $("div.subs",top_);
  var src = $("p.src",top_);
  var function_name = $("a.def",src).html(); //=> e.g. "cons"
  var description = $(doc).html();  // 各関数の解説部分
  var type_info = $(doc);

  // 挿入するセル
  var tr = $("<tr/>");
  var td1 = $("<td/>");
  var td2 = $("<td/>");

  // <a href="Data-Text-Lazy.html#v:map">map</a>
  $('a:contains("' + function_name + '")',doc).replaceWith($('<a/>').html("###"))
  
  var lhs = $("<p/>").html(doc.html()).append($("<p/>").html(subs.html()));
  td1.html( lhs );
  td1.appendTo(tr);

  var rhs = $("<pre/>").html(src.html());
  td2.html( rhs );
  td2.appendTo(tr);

  tr.appendTo(table);
});

// テーブルとして末尾に追加する
table.appendTo($("body"));
alert("__END__");
