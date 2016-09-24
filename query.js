var Connection = require('tedious').Connection;
    var config = {
        userName: 'shobhit',
        password: 'ashosho11!',
        server: 'airassist.database.windows.net',
        // If you are on Microsoft Azure, you need this:
        options: {encrypt: true, database: 'airassist'}
    };
    var connection = new Connection(config);
    connection.on('connect', function(err) {
    // If no error, then good to proceed.
        console.log("Connected");
        passengerInfo();
    });
    var Request = require('tedious').Request;
    var TYPES = require('tedious').TYPES;

    function passengerInfo() {
        console.log("Entered: Pending Query");
        request = new Request("SELECT * FROM dbo.Passengers", function(err) {
        console.log("Entered Query;");
        if (err) {
            console.log(err);}
        });
        var result = "";
        request.on('row', function(columns) {
            console.log(columns);
        //    console.log("Entered");
        // columns.forEach(function(column) {
        //       if (column.value === null) {
        //         console.log('NULL');
        //       } else {
        //         result+= column.value + " ";
        //       }
        //     });
        //     console.log(result);
        //     result ="";
        });

        request.on('done', function(rowCount, more) {
        console.log(rowCount + ' rows returned');
        });
        connection.execSql(request);
    }
