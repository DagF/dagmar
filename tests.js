function assert(name,msg,exspected,functon,input){
    try{
        var result = functon(input);
    }
    catch (e){
        var result = e;
    }

    var output = "";
    var color = "green";

    if( exspected == result ){
        output = " - " + name;
    }
    else{
        output = " x " + name + "\n" + "\t" + exspected + " != " + result + "\n\t" + msg;
        color = "red";
    }

    console.log("%c" + output , 'color: ' + color);
}

assert(
    "Parse empty string",
    "Empty strings should be returned",
    "<p></p>\n<br>",
    dagmar.parse,
    ""
);

assert(
    "Parse H1",
    "# shuld be parsed to H1",
    "<h1>Test</h1><br>",
    dagmar.parse,
    "#Test"
);

assert(
    "Parse H2",
    "## shuld be parsed to H2",
    "<h2>Test</h2><br>",
    dagmar.parse,
    "##Test"
);

assert(
    "Parse H3",
    "## shuld be parsed to H3",
    "<h3>Test</h3><br>",
    dagmar.parse,
    "###Test"
);

assert(
    "Parse H4",
    "#### shuld be parsed to H4",
    "<h4>Test</h4><br>",
    dagmar.parse,
    "####Test"
);

assert(
    "Parse H5",
    "##### shuld be parsed to H5",
    "<h5>Test</h5><br>",
    dagmar.parse,
    "#####Test"
);

assert(
    "Parse H6",
    "###### shuld be parsed to H6",
    "<h6>Test</h6><br>",
    dagmar.parse,
    "######Test"
);

assert(
    "Parse H7",
    "####### should throw Header out of range exception",
    "Header out of range",
    dagmar.parse,
    "#######Test"
);

assert(
    "Parse multiple lines with headers",
    "note sure",
    "<h1>Test</h1><br>\n<h2>Test2</h2><br>",
    dagmar.parse,
    "#Test\n##Test2"
);

assert(
    "Parse multiple lines with headers and whitespace",
    "note sure",
    "<h1>Test</h1><br>\n<h2>Test2</h2><br>",
    dagmar.parse,
    "\n\n\t\n#Test\n##Test2"
);

assert(
    "Parse ul with one element",
    "* should be paresed to unordered list",
    "<ul>\n<li>Test</li>\n</ul>\n<br>",
    dagmar.parse,
    "*Test"
);

assert(
    "Parse ul with two elements",
    "* should be paresed to unordered list",
    "<ul>\n<li>Test</li>\n<li>Test2</li>\n</ul>\n<br>",
    dagmar.parse,
    "*Test\n*Test2"
);

assert(
    "Parse ul with many elements",
    "* should be paresed to unordered list",
    "<ul>\n<li>Test</li>\n<li>Test2</li>\n<li>Test3</li>\n<li>Test4</li>\n</ul>\n<br>",
    dagmar.parse,
    "*Test\n*Test2\n*Test3\n*Test4"
);


assert(
    "Parse ul with many elements folowed by paragraph",
    "* should be paresed to unordered list",
    "<ul>\n<li>Test</li>\n<li>Test2</li>\n<li>Test3</li>\n<li>Test4</li>\n</ul>\n<br>\n<p>Para</p>\n<br>",
    dagmar.parse,
    "*Test\n*Test2\n*Test3\n*Test4\nPara"
);

assert(
    "Parse ol with one element",
    "* should be paresed to odered list",
    "<ol>\n<li value='1'>Test</li>\n</ol>\n<br>",
    dagmar.parse,
    "1. Test"
);

assert(
    "Parse ol with two element",
    "* should be paresed to odered list",
    "<ol>\n<li value='1'>Test</li>\n<li value='2'>Test 2</li>\n</ol>\n<br>",
    dagmar.parse,
    "1. Test\n 2.Test 2"
);

assert(
    "Parse ol with multiple items with odd numbering",
    "* should be paresed to odered list",
    "<ol>\n<li value='1'>Test</li>\n<li value='3'>Test2</li>\n<li value='5'>Test4</li>\n</ol>\n<br>",
    dagmar.parse,
    "1. Test \n 3. Test2 \n 5.Test4"
);