function tranform_to_table(){
  var table = $("<table/>");
  table.attr("border","2");
  $("div.top").each(function(i,top_){
    // 挿入するテーブルのセル内データ
    var doc = $("div.doc",top_); // function description part.
    var subs = $("div.subs",top_); 
    var src = $("p.src",top_);  // example) plus :: Int -> Int
    var function_name = $("a.def",src).html(); //=> e.g. "cons"
    var description = $(doc).html();  // 各関数の解説部分
    var type_info = $(doc);
  
    // 挿入するセル
    var tr = $("<tr/>");
    var td1 = $("<td/>");
    var td2 = $("<td/>");
  
    // subsの中にあるテーブルは単なるテキストに変換する
    var table_in_cell = $("table",subs).html();
    $("table",subs).remove();
    subs.append($("<div/>").html(table_in_cell));

    $('a:contains("' + function_name + '")',doc).replaceWith($('<a/>').html("φ"));
    
    $("pre",doc).html(($("pre",doc).html() || '').replace(new RegExp(function_name,'g'),'φ'));

    var lhs = $("<p/>").html(doc.html()).append($("<p/>").html(subs.html()));
    td1.html( lhs );
    td1.appendTo(tr);

    // delete "Source" link at "plus :: Int -> Int    |Source"
    $("a.link",src).remove();
  
    var rhs = $("<pre/>").html(src.html());
    td2.html( rhs );
    td2.appendTo(tr);
  
    tr.appendTo(table);
  });
  
  // テーブルとして末尾に追加する
  table.appendTo($("body"));
  
  // コピペ時にフッターが邪魔なので削除する
  $('div#footer').remove();
  $('#package-header').remove();
  $('#interface').remove();
  $('table.info').remove();
  
  // 右側の目次部分,synopsis部分も削除する
  $('#table-of-contents').remove();
  $('#synopsis').remove();
}

tranform_to_table();
