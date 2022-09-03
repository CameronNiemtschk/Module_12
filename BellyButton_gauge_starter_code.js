// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples
    // Create a variable that filters the samples for the object with the desired sample number.
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var result_meta = sample-metadata[i];

    // Create a variable that holds the first sample in the array.
    var result = resultArray[0];


    // 2. Create a variable that holds the first sample in the metadata array.
    var result =  sample-metadata[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;


    // 3. Create a variable that holds the washing frequency.
   
    // Create the yticks for the bar chart.
    var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

    // Use Plotly to plot the bar data and layout.
    Plotly.gaugePlot({
      y: yticks,
      x: sample_values.slice(0, 10).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "guage",
      orientation: "h",
  });
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.bubblePlot({
      y: yticks,
      x: sample_values.slice(0, 10).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "bubble",
      orientation: "h",
  });
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [    {
      y: yticks,
      x: sample_values.slice(0, 10).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "guage",
      orientation: "h",
  }
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {title: "Belly Button Washing Frequency",
    margin: { t: 30, l: 150 }
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot();
  });
}
