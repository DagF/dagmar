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
        return "<h" + h + ">" + line.substring(h) + "</h" +  h + ">";
    }

    function parse(string){
        var output = "";
        var lines = string.split("\n");
        for(var l = 0; l < lines.length; l++){
            var line = lines[l];
            if(line.charAt(0) == "#"){
                output += parseHeader( line );
            }
            else{
                output += line;
            }
        }
        return output;
    }

    return {
        "parse" : parse
    }
}();