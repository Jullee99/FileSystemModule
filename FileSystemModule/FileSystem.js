const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const fs = require("fs");
var filename ="";
var directory="";
var content ="";

var createDirectoryWizard = () => {
    r1.question("Enter Directory Name:" , (ans) => {
        directory = ans;
        fs.mkdir(ans,function(err) {
            if(err){
                console.log(err)
            }
            else {
                console.log("Create Directory :" + directory);
            }
            repeat();
        });
    });
};

var removeDirectoryWizard = () => {
    r1.question("Enter Directory Name Which you want ot Delete:" , (ans) => {
        directory = ans;
        fs.rmdir(directory,(err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("Deleted Directory:" + directory);
            }
            repeat();
        });
    });
};

var createFileWizard = () => {
    r1.question("Enter File Name:" , (ans) => {
        filename = ans + ".txt";
        r1.question("Enter File Content:" , (ans) => {
            content = ans;
            fs.writeFile(filename,content,(err) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.log("File Has Create..");
                }
                repeat();
            });
        });
    });
};

var readFileWizrad = () => {
    r1.question("Enter File Name Which you want to Read:" , (ans) => {
        filename = ans + ".txt";
        fs.readFile(filename,'utf-8',(err,result) => {
            if(err) {
                console.log(err);
            }
            else{
                console.log(result);
            }
            repeat();
        });
    });
};

var deleteFileWizard = () => {
    r1.question("Enter File Name Which you want to Delete:" ,(ans) => {
        filename = ans + ".txt";
        fs.unlink(filename, (err) => {
            if(err) {
                console.log(err);
            }
            else{
                console.log("Delete File:" + filename);
            }
            repeat();
        });
    });
};

var appendFileWizard = () => {
    r1.question("Enter File Name In Which you want to More Data:" , (ans) => {
        filename = ans + ".txt";
        r1.question("Enter Content:" , (ans) => {
            content = ans;
            fs.appendFile(filename,content,(err) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.log("Append Content in File:" + filename);
                }
                repeat();
            });
        });
    });
};

var updateFileWizard = () => {
    r1.question("Enter File Name Which you want to Update:" ,(ans) => {
        filename = ans + ".txt";
        r1.question("Enter Content:" , (ans) => {
            content = ans;
            fs.writeFile(filename,content,(err) => {
                if(err) {
                    console.log(err);
                }
                else{
                    console.log("Updated File Data:" , filename);
                }
                repeat();
            });
        });
    });
};

var updateFileNameWizard = () => {
    r1.question("Enter File Name Which you want to change:" ,(ans) => {
        filename = ans + ".txt";
        r1.question("Enter New Name Of File:" ,(ans) => {
            var newFileName = ans + ".txt";
            fs.rename(filename,newFileName,(err) => {
                if(err) {
                    console.log(err)
                }
                else {
                    console.log("New File Name:" + filename);
                }
                repeat();
            });
        });
    });
};

var instruction = () => {
    console.log("Enter 1 to Create Directory:");
    console.log("Enter 2 to Remove Directory:");
    console.log("Enter 3 to Create and Write in the File:");
    console.log("Enter 4 to Read the File:");
    console.log("Enter 5 to Delete the File:");
    console.log("Enter 6 to Appned the Data of file");
    console.log("Enter 7 to Update Data in File:");
    console.log("Enter 8 to Rename the File:");
    console.log("Enter 0 for Exit:");
};

var choice = () => {
    r1.question("Enter Your choice:" , (ans) => {
        if(ans == '1') {
            createDirectoryWizard();
        }
        else if(ans == '2') {
            removeDirectoryWizard();
        }
        else if(ans == '3') {
            createFileWizard();
        }
        else if(ans == '4') {
            readFileWizrad();
        }
        else if(ans == '5') {
            deleteFileWizard();
        }
        else if(ans == '6') {
            appendFileWizard();
        }
        else if(ans == '7') {
            updateFileWizard();
        }
        else if(ans == '8') {
            updateFileNameWizard();
        }
        else if(ans == '0') {
            r1.close();
        }
        else {
            console.log("Please Enter Valid Choice...");
            choice();
        }
    });
};

var repeat = () => {
    instruction();
    choice();
};

console.log("Welcome to jullee's File System!!!");
repeat();
