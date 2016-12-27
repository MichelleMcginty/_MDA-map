$(document).ready(function(){function a(){var a=d3.zoomTransform(this);d3.select("#map_g").attr("transform","translate("+a.x+","+a.y+") scale("+a.k+")")}function b(a,b,c){function d(a){var b=a.properties.name;return b}var e=topojson.feature(b,b.objects.states).features,f=c[0];l(f),g.selectAll(".state").data(e).enter().append("path").attr("class","state").attr("id",d).attr("d",i).on("mouseover",function(a){d3.select(this).classed("state--hover",!0)}).on("mouseout",function(a){d3.select(this).classed("state--hover",!1)}).on("click",function(a){var b=d(a);j(f,b,c),d3.select(this).classed("state--selected")?d3.select(this).classed("state--selected",!1):d3.select(this).classed("state--selected",!0)})}var c={top:50,left:50,right:50,bottom:50},d=300-c.top-c.bottom,e=400-c.left-c.right,f=d3.zoom().scaleExtent([1,8]).on("zoom",a),g=d3.select("#main").append("svg").attr("width",e+c.left+c.right).attr("height",d+c.top+c.bottom).attr("id","map_svg").style("border","2px solid #9ba725").append("g").attr("id","map_g").call(f);d3.queue().defer(d3.json,"/json/us.topojson").defer(d3.csv,"/csv/licensure.csv").await(b);var h=d3.geoAlbersUsa().translate([e/2,d/2]).scale([500]),i=d3.geoPath().projection(h),j=function(a,b,c){var d=b.replace(" ","-"),e=d+"-row",f=document.getElementById(e);if(f)return void d3.select("#"+e).remove();var g=d3.keys(a),h=k(b,c),i=d3.select("tbody").append("tr").attr("id",d+"-row").attr("class","state-row");for(var j in g){var l=g[j],m=h[l];i.append("td").attr("class",l+"-cell").text(m)}},k=function(a,b){for(var c in b){var d=b[c].State;if(a===d)return b[c]}return null},l=function(a){var b=d3.select("#info").append("table").attr("id","info_table").style("border","2px solid #9ba725"),c=b.append("thead");b.append("tbody").attr("id","tbody");c.append("tr").selectAll("th").data(d3.keys(a)).enter().append("th").text(function(a){return a})}});