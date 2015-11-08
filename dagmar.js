var dagmar = function (){

    function parseHeader( line ){
        var h = 0;
        for( var i = 0; i < line.length; i++){
            if( line.charAt(i) == "#" ){
                h++;
            }
            else break;
        }
        if( h > 6 ) throw "Header out of range";
        return "<h" + h + ">" + line.substring(h).trim() + "</h" +  h + ">";
    }

    function parseUnoderedList(list){
        var ret = "<ul>\n";
        for( var i = 0; i < list.length; i++){
            ret += "<li>" + list[i].substring(1).trim() + "</li>\n";
        }
        ret += "</ul>\n";
        return ret;
    }

    function parse(string){
        string = string.trim();
        var output = "";
        var lines = string.split("\n");
        for(var l = 0; l < lines.length; l++){
            var line = lines[l].trim();
            if(line.charAt(0) == "#"){
                output += parseHeader( line );
            }
            else if(line.charAt(0) == "*"){
                var ul = [];
                if( lines.length > 1){
                    while(l < lines.length && lines[l].trim().charAt(0) == "*"){
                        ul.push(lines[l].trim());
                        if( l < lines.length) l++;
                    }
                    l--;
                    output += parseUnoderedList(ul);
                }
                else{
                    output += parseUnoderedList(lines);
                }

            }
            else{
                output += "<p>" + line + "</p>\n";
            }
            output += "<br>\n";
        }
        return output.trim();
    }

    return {
        "parse" : parse
    }
}();