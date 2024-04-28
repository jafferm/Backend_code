import  express  from "express";
import  mysql  from "mysql";
import cors from "cors";
const app = express()
const db = mysql.createConnection({
    host:"mysql-3437486a-mohiuddin293-cedc.h.aivencloud.com",
    port:11919,
    user:"avnadmin",
    password:"AVNS_8XsUrC_8JaWzeT5c7Tm",
    database:"defaultdb",
})
app.use(express.json())
app.use(cors())

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
        return;
    }
    console.log("Connected to MySQL database");
});
app.get("/", (req,res)=>{
    res.json("Hello this is backend")
})
app.get("/books",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name='backend.txt'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/concatenate",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'concatenate%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/activation",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'activation%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/batch_normalization",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'batch_normalization%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/dense",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'dense%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/add1",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'add%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})

app.get("/dropout",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'dropout%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/time_distributed",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'time_distributed%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/lstm",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'lstm%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/convo2d",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'conv2d%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/conv1d",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'conv1d%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/cudnn_lstm",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'cudnn_lstm%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/embedding",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'embedding%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/flatten",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'flatten%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/repvec",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'repeat_vector%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/simprnn",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'simple_rnn%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/conv3d",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'conv3d%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/maxpool",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'max_pooling2d%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/vg16",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'vgg16%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/training",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'training%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
app.get("/contract",(req,res)=>{
    const q= "SELECT file_content FROM storetextfile_table WHERE file_name LIKE 'temp2%'"
    db.query(q,(err,data)=>{
        if(err) return res.json
        return res.json(data)
    })
})
const port = process.env.PORT || 8800;
app.listen(port,()=>{
    console.log("connected to backend")
})
