function assert(name,msg,exspected,functon,input){
    try{
        var result = functon(input);
    }
    catch (e){
        var result = e;
    }

    var output = "";

    if( exspected == result ){
        output = " - " + name;
    }
    else{
        output = " x " + name + "\n" + "\t" + exspected + " != " + result + "\n\t" + msg;
    }

    console.log(output)
}

assert(
    "Parse empty string",
    "Empty strings should be returned",
    "",
    dagmar.parse,
    ""
);

assert(
    "Parse H1",
    "# shuld be parsed to H1",
    "<h1>Test</h1>",
    dagmar.parse,
    "#Test"
);

assert(
    "Parse H2",
    "## shuld be parsed to H2",
    "<h2>Test</h2>",
    dagmar.parse,
    "##Test"
);

assert(
    "Parse H3",
    "## shuld be parsed to H3",
    "<h3>Test</h3>",
    dagmar.parse,
    "###Test"
);

assert(
    "Parse H4",
    "#### shuld be parsed to H4",
    "<h4>Test</h4>",
    dagmar.parse,
    "####Test"
);

assert(
    "Parse H5",
    "##### shuld be parsed to H5",
    "<h5>Test</h5>",
    dagmar.parse,
    "#####Test"
);

assert(
    "Parse H6",
    "###### shuld be parsed to H6",
    "<h6>Test</h6>",
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

