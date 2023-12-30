const express = require("express")
const z = require("zod")
const app = express();
const schema = z.array(z.number());

// validataion of inputs

// const schema = z.object({
//     email:z.string().email(),
//     password: z.string().min(8),
//     country: z.literal("IN").or(z.literal("US")),
//     kidneys : z.array(z.number())

// })

app.use(express.json());

app.post("/health-checkup", function(req, res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    //const kidneyslength = kidneys.length;
    const response = schema.safeParse(kidneys)
    console.log(response)
    if (!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })
    }else{
    res.send({
        response
    })}
   // res.send("you have " + kidneyslength + " kidneys");
});

app.listen(3000)

//global catches : to stop errors propogating to the user
    // app.use(function(err, req, res, next){
    //     res.json({
    //         msg : "Something is up with the server"
    //     });
    // });