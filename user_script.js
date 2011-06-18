// chromeのcontent_scriptとして使う
// メインとなるテーブル
alert("__START__");
var table = $("<table/>");
table.attr("border","2");
$("div.top > div.doc").each(function(i,doc){
  // 挿入するテーブルのセル内データ
  var description = $(doc).find("p").html();  // 各関数の解説部分
  var src = $(doc).find("pre").html();        // 各関数のサンプルソース

  // 挿入するセル
  var tr = $("<tr/>");
  var td1 = $("<td/>");
  var td2 = $("<td/>");

  td1.html( $("<p/>").html(description) );
  td1.appendTo(tr);

  td2.html( $("<pre/>").html(src) );
  td2.appendTo(tr);

  tr.appendTo(table);
});

// テーブルとして末尾に追加する
table.appendTo($("body"));
alert("__END__");
