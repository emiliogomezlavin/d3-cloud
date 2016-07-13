console.log("linked!")

var frequency_list = [
        {"text":"Ben","size":95},
        {"text":"sexy","size":60},
        {"text":"athletic","size":30},
        {"text":"girls","size":49},
        {"text":"Pokemon GO","size":72},
        {"text":"boys","size":25},
        {"text":"drinking","size":55},
        {"text":"exercise","size":46},
        {"text":"Game of Thrones","size":51},
        {"text":"Developer","size":70},
        {"text":"Taiwan","size":26},
        {"text":"Toyota","size":12},
        {"text":"chiropractic","size":21},
        {"text":"Matt","size":34},
        {"text":"I am a PIMP!!","size":61},
        {"text":"Warriors","size":15},
        {"text":"San Francisco","size":10},
        {"text":"Yang","size":20},
        {"text":"San Mateo","size":25},
        {"text":"Benito Camelo","size":30},
        {"text":"friend","size":35}
  ]

var color = d3.scale.linear()
        .domain([0,25,34,60,100])
        .range(["green", "red"]);

d3.layout.cloud().size([800, 500])
        .words(frequency_list)
        .rotate(0)
        .fontSize(function(d) { return d.size; })
        .on("end", draw)
        .start();

function draw(words) {
    var count = 0;
    var orientation;
    var orientationArray = [randomizer(30), randomizer(-30), randomizer(30), randomizer(-30), randomizer(50) ];

    d3.select(".wordCloud").append("svg")
            .attr("width", 850)
            .attr("height", 500)
            .attr("class", "wordcloud")
            .append("g")
            // without the transform, words words would get cutoff to the left and top, they would
            // appear outside of the SVG area
            .attr("transform", "translate(250,320)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("fill", function(d, i) { return color(i); })
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + orientation() + ")";
            })
            .text(function(d) { return d.text; });

    
    function orientation () {
        var rotate;
        if(count === 5) {
            count = 0;
        }
        rotate = orientationArray[count];
        count ++;
        return rotate;
    }
    

    function randomizer (num) {
        return Math.random() * num;
    }

}



