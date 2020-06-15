init();

function init(){

    var selector = d3.select('#selDataset');

    d3.json("samples.json").then( (data) => {

        var sampleNames = data.names;

        sampleNames.forEach(sample => {
            //console.log(sample);
            selector.append('option')
                    .text(sample)
                    .property('value',sample);
        });

        firstSample = sampleNames[0];
        //buildCharts(firstSample);
        buildMedadata(firstSample);
        
    });

}

function optionChanged(newSample) {
    
    //buildCharts(newSample);
    buildMedadata(newSample);

}


function buildMedadata(selectedSample) {

    d3.json("samples.json").then( (data) => {

        // Select the panel-body
        var panelbody =  d3.select('#sample-metadata');
        
        // remove data from the table
        panelbody.html("");

        var sampleMetadata = data.metadata;
        console.log(sampleMetadata);

        filteredSample = sampleMetadata.filter(sample => sample.id === selectedSample);

        console.log(`Selected sample-id: ${selectedSample}`);
        console.log(filteredSample);

    });

}

/*
    d3.json("samples.json").then( (data) => {

        var sampleMetadata = data.metadata;

        sampleMetadata.forEach(metadata => {

            if (metadata.id == selectedSample) {

                console.log('metadata:');
                Object.entries(metadata).forEach(([key,value]) => {
                    console.log(`${key}: ${value}`);
                    panelbody.append('p')
                        .text(`${key}: ${value}`);
                });                 
            }
        });

    });


    //buildGuagechart(firstSample.wfreq);




function buildCharts(selectedSample){

    d3.json("samples.json").then( (data) => {

        let samples = data.samples;

        filteredSample = samples.filter(sample => sample.id === selectedSample);
        console.log(`Selected sample-id: ${selectedSample}`);
        console.log(filteredSample);

        var otu_ids = filteredSample[0].otu_ids;
        var sample_values = filteredSample[0].sample_values;
        var otu_labels = filteredSample[0].otu_labels;
        
        y1 = otu_ids.slice(0,10).reverse();

        for (i=0; i< 10; i++) {
            y1[i] = `Otu ${y1[i]}  `;

        }
        var lightGreen = 'rgba(0,255,50,0.6)';
        var redShade   = 'rgba(255,50,0,0.6)';

        var data = [{
            type: 'bar',
            x: sample_values.slice(0,10).reverse(),
            y: y1,
            //y: otu_ids.slice(0,10).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            orientation : 'h',
            width: 0.7,
            marker: {
                color: [lightGreen, redShade, lightGreen, redShade, lightGreen, redShade, lightGreen, redShade, lightGreen, redShade,lightGreen],
                line: {
                color: 'black',
                width: 1
                }
            }

          }];
          var layout = {
            autosize: true,
            //width: 450,
            height: 500,
            //paper_bgcolor: '#7f7f7f',
            //plot_bgcolor: '#c7c7c7'
          };
        // Plot the chart to a div tag with id "bar-plot"
        Plotly.newPlot("bar", data,layout);
        

    });
}    

*/